import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt/config'

// Feature-Sliced Design on top of Nuxt:
// - the FSD `app` layer (src/app) is Nuxt's srcDir: App.vue, routes, global styles;
// - file-based routes live in src/app/routes so they don't clash with the FSD `pages` layer;
// - other layers (pages, widgets, features, entities, shared) are imported explicitly via `@/`.
export default defineNuxtConfig({
  compatibilityDate: '2026-11-01',

  srcDir: 'src/app',
  dir: {
    pages: 'routes'
  },
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url))
  },

  // Explicit imports only: FSD public APIs instead of auto-imported components/composables
  components: false,
  imports: {
    autoImport: false
  },

  css: ['@/app/styles/index.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title: 'jedencode',
      meta: [
        { name: 'title', content: 'Jedencode' },
        { property: 'og:site_name', content: 'Jedencode' },
        { property: 'og:title', content: 'Jedencode' },
        { property: 'og:description', content: 'Jedencode' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://jedenkoor.ru/' },
        { property: 'og:image', content: '/og-share-img.jpg' },
        { property: 'og:image:width', content: '1800' },
        { property: 'og:image:height', content: '945' },
        { name: 'msapplication-TileColor', content: '#000000' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
        { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#000000' }
      ]
    }
  },

  typescript: {
    // Type-check every FSD layer, not only srcDir (paths are relative to .nuxt/)
    tsConfig: {
      include: ['../src/**/*']
    }
  },

  devtools: { enabled: false }
})
