# AGENTS.md

## Cursor Cloud specific instructions

**Pebolas** is a client-side-only React 18 scoreboard app (Create React App). No backend, no database, no external services.

### Commands

See `package.json` scripts. Key commands:
- `npm start` — dev server on port 3000 (hot-reload enabled)
- `npm test` — Jest + React Testing Library (runs in watch mode; use `CI=true npm test` for non-interactive)
- `npm run build` — production build
- `npx eslint src/` — lint

### Known issues

- The default test in `src/App.test.js` fails because it still searches for `"learn react"` text from the CRA template, but the app was rewritten as a scoreboard. This is a pre-existing issue in the repository.
- ESLint reports a `react-hooks/exhaustive-deps` warning in `src/App.js` (missing `handleGameStart` in useEffect deps). This is pre-existing.
- `caniuse-lite` outdated warning appears during build/lint. Non-blocking.
