<#
  Start, stop, or inspect the local Bayesforce landing app.
  Usage: .\scripts\start-local.ps1 [start|stop|status|check|build]
#>
[CmdletBinding()]
param(
  [Parameter(Position = 0)]
  [ValidateSet("start", "stop", "status", "check", "build", "landing")]
  [string]$Action = "start"
)

$ErrorActionPreference = "Stop"
$RootDir = Split-Path -Parent $PSScriptRoot
$Port = 3005

function Get-ProcessIdOnPort {
  @(Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue |
    Select-Object -ExpandProperty OwningProcess -Unique)
}

function Assert-Prerequisites {
  foreach ($command in "node.exe", "pnpm.cmd") {
    if (-not (Get-Command $command -ErrorAction SilentlyContinue)) { throw "$command is required." }
  }
  if (-not (Test-Path (Join-Path $RootDir "node_modules"))) {
    Push-Location $RootDir
    try { & pnpm.cmd install; if ($LASTEXITCODE) { throw "pnpm install failed." } }
    finally { Pop-Location }
  }
}

if ($Action -eq "landing") { $Action = "start" }
$Pids = Get-ProcessIdOnPort

switch ($Action) {
  "status" {
    if ($Pids.Count) { Write-Host "Landing app is running at http://localhost:$Port (PID: $($Pids -join ', '))." }
    else { Write-Host "Landing app is stopped." }
    exit 0
  }
  "stop" {
    if ($Pids.Count) {
      $Pids | ForEach-Object { Stop-Process -Id $_ -Force }
      Write-Host "Stopped the landing app."
    } else { Write-Host "Landing app is not running." }
    exit 0
  }
}

Assert-Prerequisites
Push-Location $RootDir
try {
  switch ($Action) {
    "check" { & pnpm.cmd --filter "@bayesforce/landing" typecheck }
    "build" { & pnpm.cmd --filter "@bayesforce/landing" build }
    "start" {
      if ($Pids.Count) { throw "Port $Port is already in use (PID: $($Pids -join ', '))." }
      Write-Host "Landing app: http://localhost:$Port"
      & pnpm.cmd --filter "@bayesforce/landing" dev
    }
  }
  exit $LASTEXITCODE
} finally {
  Pop-Location
}
