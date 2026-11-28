import { expect, test } from '@playwright/test'

test.describe('Страница 404', () => {
    test('неизвестный путь отдаёт HTTP 404 и локализованную страницу', async ({ page }) => {
        const response = await page.goto('/ru/unknown-page')

        expect(response?.status()).toBe(404)
        await expect(page.locator('h1')).toContainText('Страница не найдена')
        await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex')
    })

    test('английская версия 404 тоже отвечает статусом 404', async ({ page }) => {
        const response = await page.goto('/unknown-page')

        expect(response?.status()).toBe(404)
        await expect(page.locator('h1')).toContainText('Page not found')
    })
})
