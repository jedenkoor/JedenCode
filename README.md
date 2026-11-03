# jedencode

Vue 3 + TypeScript + Vue Router + Vite.

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
