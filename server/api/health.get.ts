import { defineEventHandler, setResponseStatus } from 'h3'
import { getDbPool } from '../utils/db'

/** Проверка живости приложения и соединения с MySQL. */
export default defineEventHandler(async event => {
    try {
        await getDbPool().query('SELECT 1')

        return { ok: true, db: 'up' }
    } catch {
        // Детали ошибки наружу не отдаём: только статус для мониторинга
        setResponseStatus(event, 503)

        return { ok: false, db: 'down' }
    }
})
