/**
 * Passenger entry point для Nuxt SSR на shared-хостинге.
 *
 * Passenger запускает этот файл Node.js-приложением. Nitro сам создаёт
 * HTTP-сервер и слушает порт из NITRO_PORT / PORT, который передаёт Passenger.
 * Файл должен лежать в домашней папке домена рядом с .output:
 *
 *   ~/domains/<domain>/
 *     app.js
 *     .output/
 *       server/
 *       public/
 */
process.env.NITRO_PORT ??= process.env.PORT

import('./.output/server/index.mjs').catch(error => {
    console.error('[passenger-ssr] Nuxt server failed to start', error)
    process.exit(1)
})
