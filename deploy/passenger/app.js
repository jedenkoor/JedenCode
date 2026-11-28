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

// Секреты (MySQL и прочее) лежат в .env рядом с приложением и не попадают в git.
// В окружениях без файла переменные приходят из process.env.
try {
    process.loadEnvFile('.env')
} catch {
    // .env отсутствует — это нормально для локальной разработки
}

// Путь к серверной сборке вычисляем как URL: .output появляется только после
// `nuxt build` и не индексируется IDE, а статический импорт давал бы ложные
// ошибки «Cannot resolve directory».
const entry = new URL('./.output/server/index.mjs', import.meta.url)

import(entry.href).catch(error => {
    console.error('[passenger-ssr] Nuxt server failed to start', error)
    process.exit(1)
})
