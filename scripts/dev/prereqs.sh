#!/usr/bin/env bash
# BayesForce Prerequisite and Workspace Health Check

check_prereqs() {
  log_info "Verifying development environment prerequisites..."

  # Check Node.js
  if command -v node >/dev/null 2>&1; then
    local node_ver
    node_ver=$(node -v)
    log_success "Node.js detected: $node_ver"
  else
    log_error "Node.js is not installed or not in PATH."
    exit 1
  fi

  # Check PNPM
  if command -v pnpm >/dev/null 2>&1; then
    local pnpm_ver
    pnpm_ver=$(pnpm -v)
    log_success "PNPM detected: v$pnpm_ver"
  else
    log_error "PNPM is not installed or not in PATH."
    exit 1
  fi

  # Check node_modules
  if [[ ! -d "$ROOT_DIR/node_modules" ]]; then
    log_warn "node_modules missing in workspace root. Running 'pnpm install'..."
    (cd "$ROOT_DIR" && pnpm install)
    log_success "Dependencies installed."
  fi
}
