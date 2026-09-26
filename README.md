# Bayesforce

The Bayesforce website is a single Next.js application for presenting AI capabilities, workflows, insights, and company information.

## Start here

```bash
pnpm install
pnpm dev
```

On Windows, run `pnpm start:win`. The site is available at `http://localhost:3005`.

## Repository map

- `apps/landing` — the production Next.js site.
- `apps/landing/app/components/layout` — header and footer shared by every route.
- `apps/landing/app/components/shared` — small reusable page scaffolding.
- `apps/landing/app/components/ui` — the small, app-owned primitive set; it is not a separate design-system package.
- `apps/landing/app/features` — UI and styles that belong to a single product area.
- `apps/landing/app/content` — framework-free editorial/domain content.
- `apps/landing/app/styles/base.css` — global browser reset, tokens, and utility-framework entry point only. Route and component-specific styles live beside their owners.
- `docs` — strategy, research, and design references; not application runtime code.
- `scripts` — local developer commands for Unix and Windows.

## Quality checks

```bash
pnpm typecheck
pnpm build
```
