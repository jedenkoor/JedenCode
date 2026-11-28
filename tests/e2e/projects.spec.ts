import { expect, test } from '@playwright/test'

test.describe('Проекты', () => {
    test('показывает все карточки', async ({ page }) => {
        await page.goto('/projects')

        await expect(page.locator('.project-card')).toHaveCount(9)
    })

    test('фильтрует по стеку из query', async ({ page }) => {
        await page.goto('/projects?stack=Nuxt%203')

        await expect(page.locator('.project-card')).toHaveCount(2)
        await expect(page.locator('.projects-filter-tags__input:checked')).toHaveCount(1)
    })

    test('фильтр работает в серверном HTML без JavaScript', async ({ request }) => {
        const response = await request.get('/projects?stack=Nuxt%203')
        const html = await response.text()

        expect(response.status()).toBe(200)
        expect((html.match(/class="project-card"/g) ?? []).length).toBe(2)
    })

    test('фильтр сохраняет посторонние query-параметры', async ({ page }) => {
        await page.goto('/projects?utm_source=telegram')
        await page.locator('.projects-filter-tags__label', { hasText: 'Nuxt 3' }).click()

        await expect(page).toHaveURL(
            url => url.searchParams.get('stack') === 'Nuxt 3' && url.searchParams.get('utm_source') === 'telegram'
        )
    })
})
