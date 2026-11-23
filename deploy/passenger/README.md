# Passenger entry point

`app.js` — точка входа для Nuxt SSR на shared-хостинге с Passenger. Она
импортирует `.output/server/index.mjs`; Passenger передаёт порт через `PORT`,
Nitro читает его как `NITRO_PORT`.

Файл лежит рядом с `.output` в домашней папке домена. Загружать его вручную не
нужно: `scripts/deploy-ssr.mjs` кладёт его вместе с `.output` и перезапускает
приложение через `tmp/restart.txt`.

Актуальная инструкция по деплою — в корневом `README.md`.
