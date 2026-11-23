import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt/config'
import { SITE_NAME, SITE_OG_IMAGE_URL, SITE_URL } from './src/app/config/site'
import { THEME_INIT_SCRIPT } from './src/app/config/theme'
import { APP_LOCALES, DEFAULT_LOCALE, LOCALE_LANGUAGES, LOCALE_NAMES } from './src/shared/constants/locale'

// Feature-Sliced Design on top of Nuxt:
// - the FSD `app` layer (src/app) is Nuxt's srcDir: App.vue, routes, global styles;
// - file-based routes live in src/app/routes so they don't clash with the FSD `pages` layer;
// - other layers (pages, widgets, features, entities, shared) are imported explicitly via `@/`.
export default defineNuxtConfig({
    compatibilityDate: '2026-11-01',

    modules: ['@nuxtjs/i18n'],

    i18n: {
        defaultLocale: DEFAULT_LOCALE,
        strategy: 'prefix_except_default',
        baseUrl: SITE_URL,
        langDir: 'locales',
        locales: APP_LOCALES.map(code => ({
            code,
            language: LOCALE_LANGUAGES[code],
            name: LOCALE_NAMES[code],
            file: `${code}.json`
        })),
        // Автоопределение по браузеру отключено: сохраняем только явный выбор
        detectBrowserLanguage: false
    },

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
            meta: [
                { property: 'og:site_name', content: SITE_NAME },
                { property: 'og:type', content: 'website' },
                { property: 'og:image', content: SITE_OG_IMAGE_URL },
                { property: 'og:image:width', content: '1800' },
                { property: 'og:image:height', content: '945' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'msapplication-TileColor', content: '#222222' },
                // Точное значение выставляет клиент под выбранную тему; здесь — значение по умолчанию
                { name: 'theme-color', content: '#222222' }
            ],
            link: [
                // Шрифты лежат в public/fonts, поэтому URL стабильный и их можно предзагрузить
                {
                    rel: 'preload',
                    as: 'font',
                    type: 'font/woff2',
                    href: '/fonts/jurabook.woff2',
                    crossorigin: 'anonymous'
                },
                {
                    rel: 'preload',
                    as: 'font',
                    type: 'font/woff2',
                    href: '/fonts/jurademi-bold.woff2',
                    crossorigin: 'anonymous'
                },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
                { rel: 'manifest', href: '/favicon/site.webmanifest' },
                { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#222222' }
            ],
            script: [{ innerHTML: THEME_INIT_SCRIPT }]
        }
    },

    // Обе локали генерируются статически: английская без префикса, русская — с /ru
    nitro: {
        prerender: {
            routes: ['/', '/projects', '/ru', '/ru/projects']
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
