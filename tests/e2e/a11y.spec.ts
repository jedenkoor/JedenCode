import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const PAGES = [
    { name: 'главная EN', path: '/' },
    { name: 'главная RU', path: '/ru' },
    { name: 'проекты EN', path: '/projects' },
    { name: 'проекты RU', path: '/ru/projects' }
]

for (const { name, path } of PAGES) {
    test(`${name}: нет нарушений WCAG 2.2 AA`, async ({ page }) => {
        await page.goto(path)

        const results = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
            .analyze()

        const summary = results.violations
            .map(violation => `${violation.id} (${violation.impact}): ${violation.nodes.map(node => node.target.join(' ')).join(', ')}`)
            .join('\n')

        expect(results.violations, summary).toHaveLength(0)
    })
}

test('страница 404: нет нарушений WCAG 2.2 AA', async ({ page }) => {
    await page.goto('/ru/unknown-page')

    const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze()

    const summary = results.violations
        .map(violation => `${violation.id} (${violation.impact}): ${violation.nodes.map(node => node.target.join(' ')).join(', ')}`)
        .join('\n')

    expect(results.violations, summary).toHaveLength(0)
})
