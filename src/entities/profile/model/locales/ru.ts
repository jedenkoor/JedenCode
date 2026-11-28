import { PROFILE_CONTACTS } from '../common'
import type { Profile } from '../types'

export const ru: Profile = {
    fullName: 'Daniil Kuzmin',
    title: 'Senior Frontend-разработчик (Vue / Nuxt)',
    headline: 'Vue/Nuxt и React, SSR и веб-производительность',
    summary:
        'Фронтенд-разработчик с опытом больше 7 лет. Делаю SPA и SSR-приложения на Vue, Nuxt, React и TypeScript. Мне нравится, когда интерфейс понятный и быстрый, а код можно спокойно поддерживать через год. Работаю в связке с продуктом, аналитиком, дизайном и бэкендом — от обсуждения задачи до релиза; провожу код-ревью и помогаю новым разработчикам освоиться. Хочу перейти в Product Engineer — отвечать за продукт, данные и результат, сохранив сильную фронтенд-базу.',
    location: 'Санкт-Петербург, Россия · удалённо (UTC+3)',
    experienceYears: 7,
    contacts: PROFILE_CONTACTS,
    experience: [
        {
            company: 'Elisoft',
            descriptor: 'Разработка ПО полного цикла',
            role: 'Frontend Developer (Senior)',
            period: '08/2026 — настоящее время',
            projects: [],
            achievements: [
                'Разрабатываю фронтенд на Vue 3 с архитектурой Feature-Sliced Design (FSD) и UI-компонентами в Storybook в команде из 8 фронтенд-разработчиков.'
            ]
        },
        {
            company: 'Leadgid',
            descriptor: 'Международная CPA-платформа, affiliate/performance marketing',
            role: 'Frontend Developer (Middle → Senior)',
            period: '09/2021 — 05/2026',
            projects: [
                { label: 'cpa.leadgid.ru', href: 'https://cpa.leadgid.ru/' },
                { label: 'money.leadgid.ru', href: 'https://money.leadgid.ru/' }
            ],
            achievements: [
                'Разработал SSR-приложение на Nuxt 3 + TypeScript с гибридным рендерингом и SEO (динамические sitemap, OpenGraph, Schema.org): органический трафик вырос примерно на 50%.',
                'Мигрировал крупное приложение с Nuxt 2 на Nuxt 3: Composition API, Pinia, Vite; PageSpeed 30 → 73 на мобильных и 99 на десктопе, улучшил Core Web Vitals и уменьшил бандл.',
                'Создал внутреннюю SPA/CRM на React + TypeScript: TanStack Query, React Hook Form, Zod, Zustand; авторизация, ролевая модель, дашборды на ECharts.',
                'Разработал money.leadgid.ru с нуля: модульный монорепозиторий, кеширование, админка с авторизацией и ролями.',
                'Наставлял джуна: онбординг, best practices, ревью с подробной обратной связью.',
                'Сделал интерактивный лендинг с Three.js: сцена, освещение, материалы, анимация по скроллу.'
            ]
        },
        {
            company: 'Growth Point',
            descriptor: 'Стартап, веб-студия',
            role: 'Frontend Developer (Middle)',
            period: '02/2021 — 08/2021',
            projects: [
                { label: 'levitacia.co', href: 'https://levitacia.co/' },
                { label: 'tmvo.ru', href: 'https://tmvo.ru/' }
            ],
            achievements: [
                'Разрабатывал и поддерживал 5+ SPA и SSR-приложений на Vue 2 и Nuxt 2 для коммерческих проектов.',
                'Реализовал 20+ пользовательских сценариев: формы, каталоги, дашборды и динамические интерфейсы поверх REST API.',
                'Упорядочил фронтенд-архитектуру: структура компонентов, переиспользуемые модули и общие UI-решения.',
                'Настраивал и поддерживал тулинг: Webpack, ESLint, Prettier, Git-процессы.'
            ]
        },
        {
            company: 'RA-Studio',
            descriptor: 'Digital-агентство',
            role: 'Frontend Developer (Junior)',
            period: '05/2018 — 01/2021',
            projects: [
                { label: 'clevergrad.ru', href: 'https://clevergrad.ru/' },
                { label: 'finnkoti.ru', href: 'https://finnkoti.ru/' }
            ],
            achievements: [
                'Разрабатывал и поддерживал 20+ коммерческих сайтов и веб-приложений: корпоративные сайты, интернет-магазины, клиентские сервисы.',
                'Сделал 30+ адаптивных страниц и UI-компонентов для современных браузеров и мобильных устройств.',
                'Интегрировал фронтенд с Bitrix и ModX: шаблоны, компоненты и динамические блоки.',
                'Работал на JavaScript, jQuery, HTML5, CSS3 и SCSS с кроссбраузерной поддержкой.'
            ]
        }
    ],
    education: [
        {
            degree: 'Бакалавр — Компьютерная безопасность',
            institution: 'СПбГЭТУ «ЛЭТИ»',
            period: '2014 — 2020'
        }
    ],
    languages: [
        { language: 'Русский', level: 'родной' },
        { language: 'Английский', level: 'B2 письменный / B1 разговорный' }
    ],
    skills: [
        {
            title: 'Frontend',
            items: ['Vue 2', 'Vue 3', 'Nuxt 2', 'Nuxt 3', 'React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS']
        },
        {
            title: 'Состояние и данные',
            items: ['Pinia', 'Vuex', 'Zustand', 'TanStack Query', 'React Hook Form', 'Zod', 'REST API']
        },
        {
            title: 'Архитектура и UI',
            items: ['Feature-Sliced Design', 'Storybook', 'адаптивная вёрстка', 'переиспользуемые UI-компоненты']
        },
        {
            title: 'Производительность и качество',
            items: ['SSR', 'SEO', 'Core Web Vitals', 'оптимизация бандла', 'ESLint', 'Prettier', 'код-ревью']
        },
        {
            title: 'Инструменты',
            items: [
                'Vite',
                'Webpack',
                'Gulp (basic)',
                'Git',
                'Docker (basic)',
                'Linux (basic)',
                'CI/CD (basic)',
                'Jira',
                'Confluence',
                'Figma',
                'Swagger/OpenAPI'
            ]
        },
        {
            title: 'Процессы',
            items: ['Agile/Scrum', 'код-ревью', 'менторство']
        },
        {
            title: 'AI-инструменты',
            items: ['Cursor', 'Claude', 'GitHub Copilot']
        },
        {
            title: 'Дополнительно',
            items: ['Three.js', 'ECharts', 'Next.js (basic)', 'Jest (basic)', 'Accessibility (basic)', 'Bitrix/ModX (legacy)']
        }
    ],
    cvUrl: '/cv/daniil-kuzmin-frontend-developer-ru.pdf'
}
