#!/usr/bin/env bash
# BayesForce Port Management Helpers

PORT_LANDING=3005
PORT_STORYBOOK=6005

get_pids_on_port() {
  local port="$1"
  local pids=""

  if command -v fuser >/dev/null 2>&1; then
    pids=$(fuser "$port/tcp" 2>/dev/null || true)
  fi

  if [[ -z "$pids" ]] && command -v lsof >/dev/null 2>&1; then
    pids=$(lsof -ti :"$port" 2>/dev/null || true)
  fi

  if [[ -z "$pids" ]] && command -v ss >/dev/null 2>&1; then
    pids=$(ss -lptn "sport = :$port" 2>/dev/null | grep -o 'pid=[0-9]*' | cut -d'=' -f2 | tr '\n' ' ' || true)
  fi

  echo "$pids"
}

check_port_free() {
  local port="$1"
  local pids
  pids=$(get_pids_on_port "$port")
  if [[ -n "$pids" ]]; then
    return 1
  else
    return 0
  fi
}

kill_process_on_port() {
  local port="$1"
  local name="${2:-Service}"
  local pids
  pids=$(get_pids_on_port "$port")

  if [[ -n "$pids" ]]; then
    log_warn "Stopping process on port $port ($name, PID: $pids)..."
    if command -v fuser >/dev/null 2>&1; then
      fuser -k -9 "$port/tcp" >/dev/null 2>&1 || true
    else
      for pid in $pids; do
        kill -9 "$pid" 2>/dev/null || true
      done
    fi
    sleep 0.5
    log_success "Port $port ($name) is now free."
  else
    log_info "No process was running on port $port ($name)."
  fi
}

show_services_status() {
  local pids_landing pids_sb
  pids_landing=$(get_pids_on_port "$PORT_LANDING" | xargs || true)
  pids_sb=$(get_pids_on_port "$PORT_STORYBOOK" | xargs || true)

  echo -e "${CLR_BOLD}BayesForce Services Status:${CLR_RESET}"
  echo ""
  if [[ -n "$pids_landing" ]]; then
    echo -e "  ${CLR_GREEN}● RUNNING${CLR_RESET}  ${CLR_BOLD}Landing Page${CLR_RESET}   (Port: ${PORT_LANDING}, PID: ${pids_landing}) ➜ http://localhost:${PORT_LANDING}"
  else
    echo -e "  ${CLR_SLATE}○ STOPPED${CLR_RESET}  ${CLR_BOLD}Landing Page${CLR_RESET}   (Port: ${PORT_LANDING}) ➜ http://localhost:${PORT_LANDING}"
  fi

  if [[ -n "$pids_sb" ]]; then
    echo -e "  ${CLR_GREEN}● RUNNING${CLR_RESET}  ${CLR_BOLD}UI Storyboard${CLR_RESET}  (Port: ${PORT_STORYBOOK}, PID: ${pids_sb}) ➜ http://localhost:${PORT_STORYBOOK}"
  else
    echo -e "  ${CLR_SLATE}○ STOPPED${CLR_RESET}  ${CLR_BOLD}UI Storyboard${CLR_RESET}  (Port: ${PORT_STORYBOOK}) ➜ http://localhost:${PORT_STORYBOOK}"
  fi
  echo ""
}
