## Cursor Cloud specific instructions

- This is a static Astro site (project `rosland-v3`). The package manager is **Bun** (`bun.lock`), installed at `~/.bun/bin/bun`. Use `bun install`, `bun run build`, and `bun run dev`. Node must be >= 22.12.0.
- Dev server: `bunx astro dev --background` serves at `http://localhost:4321` with 3 routes (`/`, `/my-work`, `/about-me`). Manage it with `astro dev status`, `astro dev logs`, `astro dev stop`.
- Build: `bun run build` outputs static HTML to `dist/` and also generates `.astro/` types.
- There is no lint script. `astro check` is not usable out of the box because it requires `@astrojs/check` and `typescript`, which are not declared dependencies (running it triggers an interactive install prompt). Rely on `bun run build` for type generation/validation.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
