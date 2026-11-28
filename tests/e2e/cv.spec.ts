import { expect, test } from '@playwright/test'

test.describe('Резюме', () => {
    test('на английской версии предлагает EN-файл и он открывается', async ({ page, request }) => {
        await page.goto('/')
        await expect(page.locator('.profile-contacts__action[download]')).toHaveAttribute('href', /-en\.pdf$/)

        const response = await request.get('/cv/daniil-kuzmin-frontend-developer-en.pdf')

        expect(response.status()).toBe(200)
        expect(response.headers()['content-type']).toContain('application/pdf')
    })

    test('на русской версии предлагает RU-файл', async ({ page }) => {
        await page.goto('/ru')

        await expect(page.locator('.profile-contacts__action[download]')).toHaveAttribute('href', /-ru\.pdf$/)
    })
})
