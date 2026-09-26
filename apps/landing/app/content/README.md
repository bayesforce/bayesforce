# Site content

`catalog.ts` is the source of truth for Bayesforce’s capabilities, workflows, insights, and career-role copy. It is intentionally framework-free so route components can consume it without presentation dependencies.

When a content area grows enough to need its own editing cadence, move that collection into a sibling module (`capabilities.ts`, `workflows.ts`, or `insights.ts`) and re-export it from a small `index.ts`. Keep UI concerns out of this directory.
