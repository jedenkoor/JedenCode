# jedencode

Vue 3 + TypeScript + Vue Router + Vite.

## Structure
[Feature-Sliced Design](https://feature-sliced.design/). Layers import only from layers below them,
and other slices are imported only through their public API (`index.ts`):
```
src/
  app/        entry point, App.vue, router, global styles (reset, fonts, theme variables, utilities)
  pages/      main, not-found
  widgets/    header, footer, projects (projects block + list)
  features/   theme-toggle, projects-filter
  entities/   project (type, data, ProjectCard)
  shared/     ui/logo, lib/directives
```

## Styles
- Plain CSS, no preprocessors. Styles live in the component's `<style scoped>`.
- Flat BEM selectors. Nesting is used only for `:hover`/`:focus` and modifiers (`&.active`).
  Media queries go at the end of the style block.
- A component with more than 200 lines of styles gets its own folder:
  `Component.vue` + `Component.css` (`<style scoped src="./Component.css">`) + `index.ts`,
  and the folder exports only the Vue component.
- Global styles are only in `src/app/styles/`: reset, fonts, theme variables, base tags,
  `.container` and `.visually-hidden`.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
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

### Deploys to hosting (jedenkoor.ru)
Every push to `main` deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`):
lint + build, then up to 3 FTPS upload attempts, each on a fresh runner, because some runner IPs
can't reach the hosting. Credentials are in the repository secrets
`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_SERVER_DIR`.

Manual / fallback deploy from your machine builds the project and uploads only changed files
from `dist/` over FTPS. It shares the sync state on the server with CI, so both can be mixed.
Credentials are read from `.env.deploy.local` (git-ignored):
```
FTP_SERVER=...
FTP_USERNAME=...
FTP_PASSWORD='...'
FTP_SERVER_DIR=domains/jedenkoor.ru/
```
```
npm run deploy
npm run deploy -- --dry-run   # show changes without uploading
```

### Customize configuration
See [Vite Configuration Reference](https://vite.dev/config/).
