#!/usr/bin/env bash
# BayesForce Master Developer Environment & Services Orchestrator
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Source Sub-Modules
source "$ROOT_DIR/scripts/dev/ui.sh"
source "$ROOT_DIR/scripts/dev/ports.sh"
source "$ROOT_DIR/scripts/dev/prereqs.sh"

ACTION="start"
SELECT_LANDING=false
SELECT_UI=false
TARGETS_SPECIFIED=false
FORCE_INTERACTIVE=false
NO_PROMPT=false

show_help() {
  print_banner
  echo -e "${CLR_BOLD}Usage:${CLR_RESET} ./scripts/start-local.sh [options] [command] [services...]"
  echo ""
  echo -e "${CLR_BOLD}Commands:${CLR_RESET}"
  echo -e "  ${CLR_CYAN}start${CLR_RESET}                     Start selected services in dev mode [Default]"
  echo -e "  ${CLR_CYAN}stop | kill${CLR_RESET}               Stop running services (all or specified)"
  echo -e "  ${CLR_CYAN}status${CLR_RESET}                    Display active ports, PIDs, and running status"
  echo -e "  ${CLR_CYAN}check${CLR_RESET}                     Run TypeScript typechecks (all or specified)"
  echo -e "  ${CLR_CYAN}build${CLR_RESET}                     Run production build (all or specified)"
  echo ""
  echo -e "${CLR_BOLD}Available Services:${CLR_RESET}"
  echo -e "  ${CLR_GREEN}landing${CLR_RESET}                   Next.js 15 Landing Page (http://localhost:3005)"
  echo -e "  ${CLR_GREEN}ui | storybook | sb${CLR_RESET}       @bayesforce/ui Storyboard (http://localhost:6005)"
  echo -e "  ${CLR_GREEN}all${CLR_RESET}                       All workspace services (Landing + Storyboard)"
  echo ""
  echo -e "${CLR_BOLD}Selective Targeting Options:${CLR_RESET}"
  echo -e "  ${CLR_GREEN}--landing, -l${CLR_RESET}             Select Landing Page service"
  echo -e "  ${CLR_GREEN}--ui, --sb, --storybook, -u${CLR_RESET} Select UI Storyboard catalog"
  echo -e "  ${CLR_GREEN}--all, -a${CLR_RESET}                 Select all services"
  echo -e "  ${CLR_GREEN}--only <svc1,svc2>${CLR_RESET}        Run only specified services (e.g. --only landing,ui)"
  echo -e "  ${CLR_GREEN}--skip, --exclude <svc>${CLR_RESET}   Exclude a service (e.g. --skip ui)"
  echo ""
  echo -e "${CLR_BOLD}General Options:${CLR_RESET}"
  echo -e "  ${CLR_GREEN}-i, --interactive${CLR_RESET}         Open interactive service selection menu"
  echo -e "  ${CLR_GREEN}-y, --yes, --no-prompt${CLR_RESET}    Non-interactive mode (start default/specified services)"
  echo -e "  ${CLR_GREEN}-h, --help${CLR_RESET}                Show this help message"
  echo ""
  echo -e "${CLR_BOLD}Examples:${CLR_RESET}"
  echo -e "  ${CLR_DIM}# Interactive service selection menu${CLR_RESET}"
  echo -e "  ./scripts/start-local.sh"
  echo ""
  echo -e "  ${CLR_DIM}# Start only the Landing Page (Next.js on port 3005)${CLR_RESET}"
  echo -e "  ./scripts/start-local.sh landing"
  echo -e "  ./scripts/start-local.sh --landing"
  echo ""
  echo -e "  ${CLR_DIM}# Start only the UI Storyboard (Storybook on port 6005)${CLR_RESET}"
  echo -e "  ./scripts/start-local.sh ui"
  echo -e "  ./scripts/start-local.sh --ui"
  echo ""
  echo -e "  ${CLR_DIM}# Start both selectively without prompt${CLR_RESET}"
  echo -e "  ./scripts/start-local.sh landing ui"
  echo -e "  ./scripts/start-local.sh --all"
  echo ""
  echo -e "  ${CLR_DIM}# Check running service status${CLR_RESET}"
  echo -e "  ./scripts/start-local.sh status"
  echo ""
  echo -e "  ${CLR_DIM}# Stop only Landing Page or only UI Storyboard${CLR_RESET}"
  echo -e "  ./scripts/start-local.sh stop landing"
  echo -e "  ./scripts/start-local.sh stop ui"
  echo -e "  ./scripts/start-local.sh stop"
  echo ""
}

parse_target_token() {
  local token="${1,,}"
  case "$token" in
    landing)
      SELECT_LANDING=true
      TARGETS_SPECIFIED=true
      ;;
    ui|sb|storybook)
      SELECT_UI=true
      TARGETS_SPECIFIED=true
      ;;
    all)
      SELECT_LANDING=true
      SELECT_UI=true
      TARGETS_SPECIFIED=true
      ;;
    *)
      log_error "Unknown target service: '$1'. Valid targets: landing, ui, all"
      echo ""
      show_help
      exit 1
      ;;
  esac
}

parse_skip_token() {
  local token="${1,,}"
  if [[ "$TARGETS_SPECIFIED" == false ]]; then
    SELECT_LANDING=true
    SELECT_UI=true
    TARGETS_SPECIFIED=true
  fi
  case "$token" in
    landing)
      SELECT_LANDING=false
      ;;
    ui|sb|storybook)
      SELECT_UI=false
      ;;
    *)
      log_error "Unknown service to skip: '$1'. Valid services: landing, ui"
      echo ""
      show_help
      exit 1
      ;;
  esac
}

prompt_custom_selection() {
  echo -e "${CLR_BOLD}Custom Service Selection:${CLR_RESET}"
  read -r -p "  Start Landing Page (Next.js - port $PORT_LANDING)? [Y/n]: " ans_l
  if [[ "${ans_l,,}" =~ ^(n|no)$ ]]; then
    SELECT_LANDING=false
  else
    SELECT_LANDING=true
  fi

  read -r -p "  Start UI Storyboard (Storybook - port $PORT_STORYBOOK)? [Y/n]: " ans_u
  if [[ "${ans_u,,}" =~ ^(n|no)$ ]]; then
    SELECT_UI=false
  else
    SELECT_UI=true
  fi

  if [[ "$SELECT_LANDING" == false && "$SELECT_UI" == false ]]; then
    log_warn "No services selected to start. Exiting."
    exit 0
  fi
}

interactive_stop_menu() {
  echo -e "${CLR_BOLD}Stop BayesForce Services:${CLR_RESET}"
  echo -e "  ${CLR_CYAN}[1]${CLR_RESET} Stop All Services"
  echo -e "  ${CLR_CYAN}[2]${CLR_RESET} Stop Landing Page only (Port $PORT_LANDING)"
  echo -e "  ${CLR_CYAN}[3]${CLR_RESET} Stop UI Storyboard only (Port $PORT_STORYBOOK)"
  echo -e "  ${CLR_CYAN}[q]${CLR_RESET} Cancel"
  echo ""
  read -r -p "Enter choice [1-3, q]: " stop_choice
  case "${stop_choice,,}" in
    1|""|"all")
      kill_process_on_port "$PORT_LANDING" "BayesForce Landing (Next.js)"
      kill_process_on_port "$PORT_STORYBOOK" "BayesForce UI (Storyboard)"
      log_success "All BayesForce service processes stopped cleanly."
      ;;
    2|"landing")
      kill_process_on_port "$PORT_LANDING" "BayesForce Landing (Next.js)"
      log_success "Landing Page process stopped cleanly."
      ;;
    3|"ui"|"sb"|"storybook")
      kill_process_on_port "$PORT_STORYBOOK" "BayesForce UI (Storyboard)"
      log_success "UI Storyboard process stopped cleanly."
      ;;
    *)
      log_info "Operation cancelled."
      ;;
  esac
}

show_interactive_menu() {
  while true; do
    echo -e "${CLR_BOLD}Select BayesForce service(s) to start:${CLR_RESET}"
    echo ""
    echo -e "  ${CLR_CYAN}[1]${CLR_RESET} ${CLR_BOLD}All Services${CLR_RESET}        (Landing Page + UI Storyboard) ${CLR_DIM}[Default]${CLR_RESET}"
    echo -e "  ${CLR_CYAN}[2]${CLR_RESET} ${CLR_BOLD}Landing Page only${CLR_RESET}   (Next.js 15 ➜ http://localhost:$PORT_LANDING)"
    echo -e "  ${CLR_CYAN}[3]${CLR_RESET} ${CLR_BOLD}UI Storyboard only${CLR_RESET}  (Storybook ➜ http://localhost:$PORT_STORYBOOK)"
    echo -e "  ${CLR_CYAN}[4]${CLR_RESET} ${CLR_BOLD}Custom selection${CLR_RESET}    (Toggle individual services)"
    echo -e "  ${CLR_CYAN}[s]${CLR_RESET} ${CLR_BOLD}Service status${CLR_RESET}      (Check running ports/processes)"
    echo -e "  ${CLR_CYAN}[k]${CLR_RESET} ${CLR_BOLD}Stop services${CLR_RESET}       (Kill running background instances)"
    echo -e "  ${CLR_CYAN}[q]${CLR_RESET} ${CLR_BOLD}Quit${CLR_RESET}"
    echo ""
    read -r -p "Enter choice [1-4, s, k, q] (default: 1): " choice
    echo ""

    case "${choice,,}" in
      1|""|"all")
        SELECT_LANDING=true
        SELECT_UI=true
        TARGETS_SPECIFIED=true
        break
        ;;
      2|"landing")
        SELECT_LANDING=true
        SELECT_UI=false
        TARGETS_SPECIFIED=true
        break
        ;;
      3|"ui"|"sb"|"storybook")
        SELECT_LANDING=false
        SELECT_UI=true
        TARGETS_SPECIFIED=true
        break
        ;;
      4|"custom")
        prompt_custom_selection
        TARGETS_SPECIFIED=true
        break
        ;;
      s|"status")
        show_services_status
        ;;
      k|"stop"|"kill")
        interactive_stop_menu
        exit 0
        ;;
      q|"quit"|"exit")
        log_info "Exiting."
        exit 0
        ;;
      *)
        log_warn "Invalid selection '$choice'. Please choose an option from the menu."
        ;;
    esac
  done
}

# Parse command line flags & arguments
while [[ $# -gt 0 ]]; do
  case "$1" in
    start)
      ACTION="start"
      shift
      ;;
    stop|kill|--stop|--kill|-k)
      ACTION="stop"
      shift
      ;;
    status|--status)
      ACTION="status"
      shift
      ;;
    check|--check)
      ACTION="check"
      shift
      ;;
    build|--build)
      ACTION="build"
      shift
      ;;
    -i|--interactive)
      FORCE_INTERACTIVE=true
      shift
      ;;
    -y|--yes|--no-prompt)
      NO_PROMPT=true
      shift
      ;;
    -h|--help)
      show_help
      exit 0
      ;;
    --landing|-l|landing)
      parse_target_token "landing"
      shift
      ;;
    --ui|--sb|--storybook|-u|ui|sb|storybook)
      parse_target_token "ui"
      shift
      ;;
    --all|-a|all)
      parse_target_token "all"
      shift
      ;;
    --only=*)
      val="${1#*=}"
      IFS=',' read -ra ADDR <<< "$val"
      for i in "${ADDR[@]}"; do
        parse_target_token "$i"
      done
      shift
      ;;
    --only)
      shift
      if [[ $# -eq 0 ]]; then
        log_error "Flag --only requires an argument (e.g. --only landing,ui)"
        exit 1
      fi
      IFS=',' read -ra ADDR <<< "$1"
      for i in "${ADDR[@]}"; do
        parse_target_token "$i"
      done
      shift
      ;;
    --skip=*|--exclude=*|--without=*)
      val="${1#*=}"
      IFS=',' read -ra ADDR <<< "$val"
      for i in "${ADDR[@]}"; do
        parse_skip_token "$i"
      done
      shift
      ;;
    --skip|--exclude|--without)
      shift
      if [[ $# -eq 0 ]]; then
        log_error "Flag requires an argument (e.g. --skip ui)"
        exit 1
      fi
      IFS=',' read -ra ADDR <<< "$1"
      for i in "${ADDR[@]}"; do
        parse_skip_token "$i"
      done
      shift
      ;;
    *)
      log_error "Unknown argument: $1"
      show_help
      exit 1
      ;;
  esac
done

print_banner

# Handle Status Action
if [[ "$ACTION" == "status" ]]; then
  show_services_status
  exit 0
fi

# Handle Stop Action
if [[ "$ACTION" == "stop" ]]; then
  if [[ "$TARGETS_SPECIFIED" == false || ("$SELECT_LANDING" == true && "$SELECT_UI" == true) ]]; then
    log_info "Freeing all BayesForce service ports..."
    kill_process_on_port "$PORT_LANDING" "BayesForce Landing (Next.js)"
    kill_process_on_port "$PORT_STORYBOOK" "BayesForce UI (Storyboard)"
    log_success "All BayesForce service processes stopped cleanly."
  elif [[ "$SELECT_LANDING" == true ]]; then
    log_info "Stopping BayesForce Landing Page..."
    kill_process_on_port "$PORT_LANDING" "BayesForce Landing (Next.js)"
    log_success "BayesForce Landing process stopped cleanly."
  elif [[ "$SELECT_UI" == true ]]; then
    log_info "Stopping BayesForce UI Storyboard..."
    kill_process_on_port "$PORT_STORYBOOK" "BayesForce UI (Storyboard)"
    log_success "BayesForce UI Storyboard process stopped cleanly."
  fi
  exit 0
fi

# Handle Check Action
if [[ "$ACTION" == "check" ]]; then
  check_prereqs
  if [[ "$TARGETS_SPECIFIED" == false || ("$SELECT_LANDING" == true && "$SELECT_UI" == true) ]]; then
    log_info "Running TypeScript typecheck across all workspace packages..."
    (cd "$ROOT_DIR" && pnpm typecheck)
    log_success "All workspace typechecks passed with zero errors."
  elif [[ "$SELECT_LANDING" == true ]]; then
    log_info "Running TypeScript typecheck for Landing Page (@bayesforce/landing)..."
    (cd "$ROOT_DIR" && pnpm --filter @bayesforce/landing typecheck)
    log_success "Landing Page typecheck passed with zero errors."
  elif [[ "$SELECT_UI" == true ]]; then
    log_info "Running TypeScript typecheck for UI Storyboard (@bayesforce/ui)..."
    (cd "$ROOT_DIR" && pnpm --filter @bayesforce/ui typecheck)
    log_success "UI Storyboard typecheck passed with zero errors."
  fi
  exit 0
fi

# Handle Build Action
if [[ "$ACTION" == "build" ]]; then
  check_prereqs
  if [[ "$TARGETS_SPECIFIED" == false || ("$SELECT_LANDING" == true && "$SELECT_UI" == true) ]]; then
    log_info "Building all packages and Next.js applications..."
    (cd "$ROOT_DIR" && pnpm build && pnpm build-storybook)
    log_success "Production builds for all services completed successfully."
  elif [[ "$SELECT_LANDING" == true ]]; then
    log_info "Building Landing Page application (@bayesforce/landing)..."
    (cd "$ROOT_DIR" && pnpm --filter @bayesforce/landing build)
    log_success "Landing Page build completed successfully."
  elif [[ "$SELECT_UI" == true ]]; then
    log_info "Building UI Storyboard component catalog (@bayesforce/ui)..."
    (cd "$ROOT_DIR" && pnpm --filter @bayesforce/ui build-storybook)
    log_success "UI Storyboard build completed successfully."
  fi
  exit 0
fi

# Action: Start Development Server(s)
# If no targets were passed via arguments:
if [[ "$TARGETS_SPECIFIED" == false ]]; then
  if [[ "$FORCE_INTERACTIVE" == true || ( -t 0 && "$NO_PROMPT" == false ) ]]; then
    show_interactive_menu
  else
    # In non-interactive contexts (scripts/CI) or when --no-prompt is supplied, start all services
    SELECT_LANDING=true
    SELECT_UI=true
  fi
fi

check_prereqs

if [[ "$SELECT_LANDING" == true && "$SELECT_UI" == true ]]; then
  TARGET_LABEL="All Services (Landing Page + UI Storyboard)"
elif [[ "$SELECT_LANDING" == true ]]; then
  TARGET_LABEL="Landing Page only (Next.js 15)"
elif [[ "$SELECT_UI" == true ]]; then
  TARGET_LABEL="UI Storyboard only (Storybook 10)"
else
  log_warn "No services selected. Exiting."
  exit 0
fi

log_info "Preparing dev environment for: ${CLR_BOLD}${TARGET_LABEL}${CLR_RESET}..."

# Free ports selectively (only touch the ports of services being started!)
if [[ "$SELECT_LANDING" == true ]]; then
  if ! check_port_free "$PORT_LANDING"; then
    log_warn "Port $PORT_LANDING is in use. Freeing..."
    kill_process_on_port "$PORT_LANDING" "Landing"
  fi
fi

if [[ "$SELECT_UI" == true ]]; then
  if ! check_port_free "$PORT_STORYBOOK"; then
    log_warn "Port $PORT_STORYBOOK is in use. Freeing..."
    kill_process_on_port "$PORT_STORYBOOK" "Storyboard"
  fi
fi

echo ""
log_success "Ready to launch!"

if [[ "$SELECT_LANDING" == true && "$SELECT_UI" == false ]]; then
  echo -e "  ${CLR_CYAN}➜ Landing Page:${CLR_RESET}   ${CLR_BOLD}http://localhost:${PORT_LANDING}${CLR_RESET}"
  echo ""
  exec pnpm --filter @bayesforce/landing dev
elif [[ "$SELECT_LANDING" == false && "$SELECT_UI" == true ]]; then
  echo -e "  ${CLR_CYAN}➜ UI Storyboard:${CLR_RESET}  ${CLR_BOLD}http://localhost:${PORT_STORYBOOK}${CLR_RESET}"
  echo ""
  exec pnpm --filter @bayesforce/ui storybook
else
  echo -e "  ${CLR_CYAN}➜ Landing Page:${CLR_RESET}   ${CLR_BOLD}http://localhost:${PORT_LANDING}${CLR_RESET}"
  echo -e "  ${CLR_CYAN}➜ UI Storyboard:${CLR_RESET}  ${CLR_BOLD}http://localhost:${PORT_STORYBOOK}${CLR_RESET}"
  echo ""
  exec pnpm run dev:all
fi
