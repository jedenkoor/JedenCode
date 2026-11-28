import { fileURLToPath } from 'node:url'
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    test: {
        environment: 'node',
        include: ['tests/unit/**/*.spec.ts', 'tests/component/**/*.spec.ts'],
        environmentOptions: {
            nuxt: {
                domEnvironment: 'happy-dom'
            }
        }
    }
})
