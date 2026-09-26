#!/usr/bin/env bash
# Start, stop, or inspect the local Bayesforce landing app.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PORT=3005
ACTION="${1:-start}"

case "$ACTION" in
  start|--landing|landing) ACTION="start" ;;
  stop|--stop|kill) ACTION="stop" ;;
  status|--status) ACTION="status" ;;
  check|--check) ACTION="check" ;;
  build|--build) ACTION="build" ;;
  -h|--help)
    echo "Usage: ./scripts/start-local.sh [start|stop|status|check|build]"
    exit 0
    ;;
  *)
    echo "Unknown command: $ACTION" >&2
    exit 1
    ;;
esac

port_pids() {
  if command -v lsof >/dev/null 2>&1; then lsof -ti ":$PORT" 2>/dev/null || true
  elif command -v fuser >/dev/null 2>&1; then fuser "$PORT/tcp" 2>/dev/null || true
  fi
}

case "$ACTION" in
  status)
    pids="$(port_pids)"
    if [[ -n "$pids" ]]; then echo "Landing app is running at http://localhost:$PORT (PID: $pids)."
    else echo "Landing app is stopped."
    fi
    exit 0
    ;;
  stop)
    pids="$(port_pids)"
    if [[ -n "$pids" ]]; then kill $pids; echo "Stopped the landing app."
    else echo "Landing app is not running."
    fi
    exit 0
    ;;
esac

command -v node >/dev/null || { echo "Node.js is required." >&2; exit 1; }
command -v pnpm >/dev/null || { echo "pnpm is required." >&2; exit 1; }

cd "$ROOT_DIR"
[[ -d node_modules ]] || pnpm install

case "$ACTION" in
  check) exec pnpm --filter @bayesforce/landing typecheck ;;
  build) exec pnpm --filter @bayesforce/landing build ;;
  start)
    pids="$(port_pids)"
    [[ -z "$pids" ]] || { echo "Port $PORT is already in use (PID: $pids)." >&2; exit 1; }
    echo "Landing app: http://localhost:$PORT"
    exec pnpm --filter @bayesforce/landing dev
    ;;
esac
