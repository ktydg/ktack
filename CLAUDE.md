# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Starter template for React SPAs with TanStack Router (file-based routing), TanStack Query, Tailwind CSS v4, and Shadcn/ui. Uses Bun. Includes mock structure for features/entities layers.

## Commands

```bash
bun install              # Install dependencies
bun start                # Start dev server (port 3000)
bun run build            # TypeScript check + Vite build
bun run check            # Full check: TypeScript + ESLint + Prettier
bun run check:fix        # Fix all linting/formatting issues
bun run lint:fix         # Fix ESLint issues only
bun run format:fix       # Fix Prettier issues only
```

## Architecture

This project follows **Feature-Sliced Design (FSD)**:

```
src/
├── app/           # App initialization, providers, global styles
├── pages/         # File-based routes (TanStack Router)
├── widgets/       # Composite UI blocks (Header, etc.)
├── features/      # Feature modules (user actions, business logic)
├── entities/      # Domain entities
└── shared/        # Reusable utilities, UI components, configs
    ├── api/       # Axios instance
    ├── config/    # queryClient, navigation
    ├── ui/        # Shadcn components
    └── utils/     # Utilities (cn helper)
```

## Key Patterns

### Routing
- Routes are in `src/pages/` - files automatically become routes
- `__root.tsx` is the root layout wrapping all pages
- Route tree auto-generates to `src/app/routerTree.gen.ts`

### Data Fetching
- Use TanStack Query for server state
- Query client configured in `src/shared/config/queryClient.ts` (10min stale, 15min GC)
- Axios instance in `src/shared/api/index.ts` with `/api` proxy in dev

### Styling
- Tailwind CSS v4 with OKLch color space
- Shadcn components configured via `components.json` (import from `@/shared/ui`)
- Use `cn()` from `@/shared/utils` for merging classes
- Button variants use CVA pattern in `buttonVariants.ts`

### Path Aliases
- `@/` maps to `src/`

## Code Quality

- Strict TypeScript (`noUnusedLocals`, `noUnusedParameters`)
- Pre-commit hook runs `bun run check`
- Pre-push hook runs build
- Commits must follow conventional commit format (commitlint)
- Do NOT add "Co-Authored-By: Claude" or similar AI attribution to commits or code comments

## Environment Variables

Required in `.env`:
- `VITE_SERVER_URL` - API server URL
- `VITE_WEBSITE_URL` - Website URL (for meta tags)
