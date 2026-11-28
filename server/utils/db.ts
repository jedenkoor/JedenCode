import { createPool, type Pool } from 'mysql2/promise'
import { useRuntimeConfig } from '#imports'

let pool: Pool | undefined

/**
 * Один пул на процесс: Passenger держит приложение живым между запросами,
 * поэтому создавать соединение на каждый запрос не нужно.
 */
export const getDbPool = (): Pool => {
    if (!pool) {
        const config = useRuntimeConfig()

        pool = createPool({
            host: config.dbHost,
            port: Number(config.dbPort),
            database: config.dbName,
            user: config.dbUser,
            password: config.dbPassword,
            waitForConnections: true,
            connectionLimit: 5
        })
    }

    return pool
}
