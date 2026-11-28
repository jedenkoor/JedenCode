import { defineConfig, devices } from '@playwright/test'

const PORT = Number(process.env.E2E_PORT ?? 4173)
const BASE_URL = `http://127.0.0.1:${PORT}`

export default defineConfig({
    testDir: './e2e',
    outputDir: '../test-results',
    fullyParallel: true,
    forbidOnly: Boolean(process.env.CI),
    retries: process.env.CI ? 2 : 0,
    reporter: [['list'], ['html', { open: 'never', outputFolder: '../playwright-report' }]],
    use: {
        baseURL: BASE_URL,
        trace: 'on-first-retry'
    },
    projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
    webServer: {
        command: 'node .output/server/index.mjs',
        cwd: '..',
        url: BASE_URL,
        env: { NITRO_PORT: String(PORT) },
        reuseExistingServer: !process.env.CI,
        timeout: 120_000
    }
})
