import { expect, test } from '@playwright/test'

test.describe('Главная', () => {
    test('по умолчанию отдаёт английскую версию', async ({ page }) => {
        const response = await page.goto('/')

        expect(response?.status()).toBe(200)
        await expect(page.locator('html')).toHaveAttribute('lang', 'en-US')
        await expect(page).toHaveTitle(/Senior Frontend Developer/)
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://jedenkoor.com')
    })

    test('на /ru отдаёт русскую версию', async ({ page }) => {
        await page.goto('/ru')

        await expect(page.locator('html')).toHaveAttribute('lang', 'ru-RU')
        await expect(page).toHaveTitle(/Senior Frontend/)
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://jedenkoor.com/ru')
    })

    test('переключатель языка ведёт на /ru и запоминает выбор в cookie', async ({ page }) => {
        await page.goto('/')
        await page.getByRole('link', { name: /Русский/ }).click()

        await expect(page).toHaveURL(/\/ru$/)
        await expect(page.locator('html')).toHaveAttribute('lang', 'ru-RU')

        // Повторный заход на корень должен сразу уводить на русскую версию
        await page.goto('/')
        await expect(page).toHaveURL(/\/ru$/)
    })
})
