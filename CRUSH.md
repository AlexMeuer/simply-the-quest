CRUSH.md

Commands

- Build: bun build
- Start dev: bun dev:up -d
  - Stop dev: bun dev:down
- Run tests: bun test
- Run a single test: bun test -- -t <pattern> or bun test -- --testNamePattern "YourTestName" depending on test framework compatibility
- Lint: bun run lint
- Typecheck: bun run typecheck

Code style

- Imports: ensure absolute/relative imports are correct, avoid circular deps
- Formatting: consistent 2-space or 4-space, see project style; prefer Prettier-like formatting
- Types: prefer TypeScript types, use interfaces for public APIs, avoid any; annotate React props
- Naming: descriptive, PascalCase for types/classes, camelCase for variables/functions
- Errors: throw informative errors, preserve stack traces, validate inputs
- Tests: unit tests for logic, integration tests for routes, test descriptions. Groups tests into describe block. Enforce a single expectation per test. Use table-driven tests when appropriate.
- Comments: minimal unless necessary; use JSDoc/TSDoc for types

Reminders

- Use Bun tooling as per repo rules
- Do not commit without user confirmation
- Run tests in CI-equivalent environments

Notes

- This project uses Remix, Bun, and TypeScript. Ensure tests cover edge cases and route behavior.
