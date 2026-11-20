import type { Project } from './types'

export const projects: Project[] = [
    {
        title: 'Leadgid Money',
        description:
            'Финансовый маркетплейс: архитектура приложения с нуля, кеширование, админ-панель с авторизацией и каталог кредитных предложений.',
        demo: 'https://money.leadgid.ru/',
        image: '/images/projects/leadgid-money.svg',
        stack: ['Nuxt 3', 'TypeScript', 'SSR'],
        type: 'Веб-сервис',
        year: 2026
    },
    {
        title: 'Leadgid CPA',
        description:
            'Финансовая партнёрская сеть для банков и МФО: миграция с Nuxt 2 на Nuxt 3, гибридный рендеринг и SEO — органика выросла примерно на 50%, PageSpeed 30 → 73 на мобильных.',
        demo: 'https://cpa.leadgid.ru/',
        image: '/images/projects/leadgid-cpa.svg',
        stack: ['Nuxt 3', 'TypeScript', 'SSR', 'SEO'],
        type: 'Корпоративный сайт',
        year: 2025
    },
    {
        title: 'Diamond Place Dubai',
        description:
            'Магазин бриллиантов с Дубайской алмазной биржи: каталог камней с фильтрами и подбор под бюджет без посредников.',
        demo: 'https://diamonds-dubai.com/en',
        image: '/images/projects/diamonds-dubai.svg',
        stack: ['Nuxt 2', 'Vue 2'],
        type: 'Интернет-магазин',
        year: 2024
    },
    {
        title: 'Levitacia',
        description: 'Интернет-магазин премиальной одежды: каталог, карточки товаров и оформление заказа.',
        demo: 'https://levitacia.co/',
        repo: 'https://github.com/jedenkoor/Levitacia-2.0',
        image: '/images/projects/levitacia.webp',
        stack: ['Webpack', 'ES6'],
        type: 'Интернет-магазин',
        year: 2021
    },
    {
        title: 'Growth Point',
        description: 'Сайт веб-студии на Nuxt.js: услуги, кейсы и команда.',
        demo: 'https://nuxtgrowthpoint.jedenkoor.ru/',
        repo: 'https://github.com/jedenkoor/Nuxt-Growth-Point',
        image: '/images/projects/growthpoint.svg',
        stack: ['Webpack', 'Nuxt'],
        type: 'Корпоративный сайт',
        year: 2021
    },
    {
        title: 'Moire',
        description: 'Дипломный проект SkillBox на Vue.js: интернет-магазин с каталогом и корзиной.',
        demo: 'https://moire.jedenkoor.ru/',
        repo: 'https://github.com/jedenkoor/Moire',
        image: '/images/projects/moire.svg',
        stack: ['Webpack', 'Vue'],
        type: 'Интернет-магазин',
        year: 2021
    },
    {
        title: 'Торбеевские матрасы',
        description: 'Интернет-магазин фабрики матрасов: каталог, подбор размера и оформление заказа.',
        demo: 'https://tmvo.ru/',
        repo: 'https://github.com/jedenkoor/Torbey',
        image: '/images/projects/torbey.svg',
        stack: ['Webpack', 'ES6'],
        type: 'Интернет-магазин',
        year: 2021
    },
    {
        title: 'Clevergrad',
        description:
            'Загородная недвижимость в Ленинградской области: каталог посёлков и участков, фильтры по району и коммуникациям, карта.',
        demo: 'https://clevergrad.ru/',
        image: '/images/projects/clevergrad.png',
        stack: ['ModX', 'JavaScript', 'jQuery'],
        type: 'Корпоративный сайт',
        year: 2020
    },
    {
        title: 'Finnkoti',
        description: 'Строительство домов: услуги, проекты и цены, галерея объектов и приём заявок.',
        demo: 'https://finnkoti.ru/',
        image: '/images/projects/finnkoti.png',
        stack: ['ModX', 'JavaScript', 'jQuery'],
        type: 'Корпоративный сайт',
        year: 2019
    }
]
