# jedencode

Nuxt 4 (static generation) + Vue 3 + TypeScript.

## Structure
[Feature-Sliced Design](https://feature-sliced.design/). Layers import only from layers below them,
and other slices are imported only through their public API (`index.ts`):
```
i18n/         locales/en.json, ru.json — UI-сообщения (framework-конфиг, не слой FSD)
src/
  app/        Nuxt srcDir: App.vue, routes/ (file-based routing), global styles (reset, fonts, theme, utilities)
  pages/      main, projects, not-found
  widgets/    header, footer, profile, projects (projects block + list)
  features/   locale-switch, theme-toggle, projects-filter
  entities/   profile (localized data), project (types, localized data, ProjectCard)
  shared/     ui/logo, utils/directives, composables, constants
```
Nuxt specifics (`nuxt.config.ts`): `srcDir` is `src/app`, file-based routes live in `src/app/routes/`
as thin wrappers around the FSD `pages` layer, `@/` points to `src/`, and auto-imports of components
and composables are disabled: everything is imported explicitly through public APIs.

## Styles
- Plain CSS, no preprocessors. Styles live in the component's `<style scoped>`.
- Flat BEM selectors. Nesting is used only for `:hover`/`:focus` and modifiers (`&.active`).
  Media queries go at the end of the style block.
- A component with more than 200 lines of styles gets its own folder:
  `Component.vue` + `Component.css` (`<style scoped src="./Component.css">`) + `index.ts`,
  and the folder exports only the Vue component.
- Global styles are only in `src/app/styles/`: reset, fonts, theme variables, base tags,
  `.container` and `.visually-hidden`. Font files live in `public/fonts/`, so their URLs are stable
  and can be preloaded from `nuxt.config.ts`.
- The theme is applied by an inline script in `<head>` (`src/app/config/theme.ts`) before the first
  paint: no flash of the dark theme, system preference respected, choice stored in `localStorage`.

## Languages
- English is the default locale at `/`, Russian is served from `/ru/` (`prefix_except_default`).
- The header switch builds locale-aware links with `switchLocalePath` and stores the choice in the
  `i18n_locale` cookie. On a later visit to `/`, a global route middleware redirects only by that
  saved choice; browser language is not used for automatic redirects.
- `@nuxtjs/i18n` renders `<html lang>`, `canonical`, `hreflang` and `og:locale`; per-page SEO lives
  in `useSeoMeta`, JSON-LD is localized in `src/app/config/seo.ts`.
- UI strings are in `i18n/locales/*.json`; profile and project content are localized in the entity
  `model/locales` / `LocalizedText` fields.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Type-checks and builds the SSR server into `.output/`
```
npm run build
```

### Start the SSR server locally
```
npm run start
```

### Preview production build
```
npm run preview
```

### Type-checks files
```
npm run type-check
```

### Lints files
```
npm run lint
```

### Deploys the SSR build
The site runs as a Node/Nitro application behind Passenger on shared hosting. Every push to `main`
deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`): lint, `nuxt build`,
upload `.output` over SSH, then restart Passenger via `tmp/restart.txt`.

Repository secrets:
```
SSH_HOST=<host>
SSH_PORT=22
SSH_USER=<user>
SSH_TARGET_DIR=<path to the app directory>/
SSH_PRIVATE_KEY=<private key contents>
```

Manual deploy from your machine (the same script as CI):
```
npm run deploy
```

Local target and key are read from `.env.deploy.local` (git-ignored):
```
SSH_HOST=<host>
SSH_PORT=22
SSH_USER=<user>
SSH_KEY_PATH=~/.ssh/<deploy key>
SSH_TARGET_DIR=<path to the app directory>/
```

The deploy replaces `.output` on the server and restarts the application; no backup copy is kept.

### Customize configuration
See [Vite Configuration Reference](https://vite.dev/config/).
