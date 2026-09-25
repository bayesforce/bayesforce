#!/usr/bin/env bash
# BayesForce Terminal Colors and Logging Helpers

CLR_RESET="\033[0m"
CLR_BOLD="\033[1m"
CLR_DIM="\033[2m"

# Palette: Cobalt, Obsidian, Amber Gold, Slate
CLR_BLUE="\033[38;2;37;99;235m"     # #2563EB Cobalt
CLR_CYAN="\033[38;2;59;130;246m"    # #3B82F6 Sapphire
CLR_GOLD="\033[38;2;245;158;11m"    # #F59E0B Amber Gold
CLR_GREEN="\033[38;2;16;185;129m"   # #10B981 Emerald
CLR_RED="\033[38;2;239;68;68m"      # #EF4444 Red
CLR_SLATE="\033[38;2;148;163;184m"  # #94A3B8 Slate

log_info() {
  echo -e "${CLR_BLUE}ℹ${CLR_RESET} ${CLR_BOLD}[BayesForce]${CLR_RESET} $1"
}

log_success() {
  echo -e "${CLR_GREEN}✔${CLR_RESET} ${CLR_BOLD}[BayesForce]${CLR_RESET} ${CLR_GREEN}$1${CLR_RESET}"
}

log_warn() {
  echo -e "${CLR_GOLD}⚠${CLR_RESET} ${CLR_BOLD}[BayesForce]${CLR_RESET} ${CLR_GOLD}$1${CLR_RESET}"
}

log_error() {
  echo -e "${CLR_RED}✖${CLR_RESET} ${CLR_BOLD}[BayesForce]${CLR_RESET} ${CLR_RED}$1${CLR_RESET}"
}

print_banner() {
  echo -e "${CLR_BLUE}"
  echo "  ██████╗  █████╗ ██╗   ██╗███████╗███████╗███████╗ ██████╗ ██████╗  ██████╗███████╗"
  echo "  ██╔══██╗██╔══██╗╚██╗ ██╔╝██╔════╝██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔════╝"
  echo "  ██████╔╝███████║ ╚████╔╝ █████╗  ███████╗█████╗  ██║   ██║██████╔╝██║     █████╗  "
  echo "  ██╔══██╗██╔══██║  ╚██╔╝  ██╔══╝  ╚════██║██╔══╝  ██║   ██║██╔══██╗██║     ██╔══╝  "
  echo "  ██████╔╝██║  ██║   ██║   ███████╗███████║██║     ╚██████╔╝██║  ██║╚██████╗███████╗"
  echo "  ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚══════╝"
  echo -e "${CLR_RESET}"
  echo -e "  ${CLR_GOLD}${CLR_BOLD}Make More Happen${CLR_RESET}  ${CLR_SLATE}|  Precision AI & Organizational Execution Intelligence${CLR_RESET}"
  echo -e "  ${CLR_DIM}--------------------------------------------------------------------------------${CLR_RESET}"
  echo ""
}

