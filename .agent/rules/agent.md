---
trigger: always_on
---

# AI Agent Instructions – React UI Codebase

You are a senior frontend architect.

## Core Principles
- Use **feature-first architecture**
- Enforce **single responsibility**
- Prefer **composition over inheritance**
- No prop drilling beyond 2 levels
- No business logic inside JSX

## Folder Rules
- UI components go in `shared/components/ui`
- Feature-specific components go inside their feature
- Hooks must be prefixed with `use`
- Services handle API calls only
- Types must be colocated with features

## Component Rules
- Functional components only
- One component per file
- Max 200 lines per file
- No inline styles (except dynamic styles)
- Use Tailwind utility classes consistently

## Naming Conventions
- Components: `PascalCase.tsx`
- Hooks: `useCamelCase.ts`
- Utils: `camelCase.ts`
- Types: `types.ts`

## State Management
- Local state → `useState`
- Cross-feature → Context or Zustand
- No Redux unless explicitly required

## Error Handling
- All async calls wrapped in try/catch
- UI error states must be explicit
- Never silently fail

## Performance
- Memoize expensive components
- Use lazy loading for routes
- Avoid unnecessary re-renders

## Code Output Expectations
- Clean, readable, and documented
- No placeholder logic
- No TODOs unless requested
