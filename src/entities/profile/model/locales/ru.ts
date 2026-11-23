import { PROFILE_CONTACTS, PROFILE_CV_URL } from '../common'
import type { Profile } from '../types'

export const ru: Profile = {
    fullName: 'Daniil Kuzmin',
    title: 'Senior Frontend Developer',
    headline: 'Vue/Nuxt и React, SSR и веб-производительность',
    summary:
        '7+ лет разрабатываю SPA и SSR-приложения на Vue, Nuxt, React и TypeScript. Отвечаю за архитектуру фронтенда, производительность и качество продукта; работаю в связке с бэкендом, дизайном и продуктом.',
    location: 'Санкт-Петербург, Россия',
    experienceYears: 7,
    contacts: PROFILE_CONTACTS,
    experience: [
        {
            company: 'Elisoft',
            role: 'Senior Frontend Developer (Vue)',
            period: '08/2026 — настоящее время',
            projects: [],
            achievements: [
                'Разрабатываю фронтенд на Vue с архитектурой Feature-Sliced Design (FSD) и UI-компонентами в Storybook.'
            ]
        },
        {
            company: 'Leadgid',
            role: 'Frontend Developer',
            period: '2021 — 2026',
            projects: [
                { label: 'cpa.leadgid.ru', href: 'https://cpa.leadgid.ru/' },
                { label: 'money.leadgid.ru', href: 'https://money.leadgid.ru/' }
            ],
            achievements: [
                'Разработал SSR-приложение на Nuxt 3 + TypeScript с гибридным рендерингом и SEO-оптимизацией: органический трафик вырос примерно на 50%.',
                'Мигрировал крупное приложение с Nuxt 2 на Nuxt 3: улучшил Core Web Vitals и уменьшил размер бандла, Google PageSpeed 30 → 73 на мобильных и 99 на десктопе.',
                'Разработал внутреннее SPA на React + TypeScript: TanStack Query, React Hook Form, Zod, Zustand.',
                'Делал интерактивные интерфейсы на Three.js.'
            ]
        },
        {
            company: 'Growth Point',
            role: 'Frontend Developer',
            period: '2021',
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
            role: 'Frontend Developer',
            period: '2018 — 2021',
            projects: [
                { label: 'clevergrad.ru', href: 'https://clevergrad.ru/' },
                { label: 'parusa-group.ru', href: 'https://parusa-group.ru/' },
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
            items: ['Vue 2', 'Vue 3', 'Nuxt 2', 'Nuxt 3', 'React', 'Next.js', 'TypeScript', 'HTML5', 'CSS3', 'SCSS']
        },
        {
            title: 'Состояние и данные',
            items: ['Pinia', 'Vuex', 'Zustand', 'TanStack Query', 'React Hook Form', 'Zod', 'REST API']
        },
        {
            title: 'Производительность и качество',
            items: ['SSR', 'SEO', 'Core Web Vitals', 'оптимизация бандла', 'ESLint', 'Prettier']
        },
        {
            title: 'Инструменты',
            items: ['Vite', 'Webpack', 'Gulp', 'Docker', 'Git', 'Linux', 'CI/CD']
        },
        {
            title: 'Архитектура и UI',
            items: ['Feature-Sliced Design', 'Storybook']
        },
        {
            title: 'AI-инструменты',
            items: ['Cursor', 'Claude', 'GitHub Copilot']
        }
    ],
    cvUrl: PROFILE_CV_URL
}
