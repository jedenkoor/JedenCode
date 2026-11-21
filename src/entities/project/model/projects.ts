import type { AppLocale } from '@/shared/constants'
import type { Project, ProjectSource } from './types'

const projectSources: ProjectSource[] = [
    {
        title: {
            en: 'Leadgid Money',
            ru: 'Leadgid Money'
        },
        description: {
            en: 'Financial marketplace: application architecture from scratch, caching, an admin panel with authentication and a catalog of loan offers.',
            ru: 'Финансовый маркетплейс: архитектура приложения с нуля, кеширование, админ-панель с авторизацией и каталог кредитных предложений.'
        },
        demo: 'https://money.leadgid.ru/',
        image: '/images/projects/leadgid-money.svg',
        stack: ['Nuxt 3', 'TypeScript', 'SSR'],
        type: 'web-service',
        year: 2026
    },
    {
        title: {
            en: 'Leadgid CPA',
            ru: 'Leadgid CPA'
        },
        description: {
            en: 'Financial affiliate network for banks and microfinance organizations: migration from Nuxt 2 to Nuxt 3, hybrid rendering and SEO — organic traffic grew by about 50%, PageSpeed 30 → 73 on mobile.',
            ru: 'Финансовая партнёрская сеть для банков и МФО: миграция с Nuxt 2 на Nuxt 3, гибридный рендеринг и SEO — органика выросла примерно на 50%, PageSpeed 30 → 73 на мобильных.'
        },
        demo: 'https://cpa.leadgid.ru/',
        image: '/images/projects/leadgid-cpa.svg',
        stack: ['Nuxt 3', 'TypeScript', 'SSR', 'SEO'],
        type: 'corporate',
        year: 2025
    },
    {
        title: {
            en: 'Diamond Place Dubai',
            ru: 'Diamond Place Dubai'
        },
        description: {
            en: 'Diamond store from the Dubai Diamond Exchange: a catalog of stones with filters and budget-based selection, with no middlemen.',
            ru: 'Магазин бриллиантов с Дубайской алмазной биржи: каталог камней с фильтрами и подбор под бюджет без посредников.'
        },
        demo: 'https://diamonds-dubai.com/en',
        image: '/images/projects/diamonds-dubai.svg',
        stack: ['Nuxt 2', 'Vue 2'],
        type: 'ecommerce',
        year: 2024
    },
    {
        title: {
            en: 'Levitacia',
            ru: 'Levitacia'
        },
        description: {
            en: 'Premium clothing online store: catalog, product pages and checkout.',
            ru: 'Интернет-магазин премиальной одежды: каталог, карточки товаров и оформление заказа.'
        },
        demo: 'https://levitacia.co/',
        repo: 'https://github.com/jedenkoor/Levitacia-2.0',
        image: '/images/projects/levitacia.webp',
        stack: ['Webpack', 'ES6'],
        type: 'ecommerce',
        year: 2021
    },
    {
        title: {
            en: 'Growth Point',
            ru: 'Growth Point'
        },
        description: {
            en: 'Web studio website built with Nuxt.js: services, case studies and team.',
            ru: 'Сайт веб-студии на Nuxt.js: услуги, кейсы и команда.'
        },
        demo: 'https://nuxtgrowthpoint.jedenkoor.ru/',
        repo: 'https://github.com/jedenkoor/Nuxt-Growth-Point',
        image: '/images/projects/growthpoint.svg',
        stack: ['Webpack', 'Nuxt'],
        type: 'corporate',
        year: 2021
    },
    {
        title: {
            en: 'Moire',
            ru: 'Moire'
        },
        description: {
            en: 'SkillBox graduation project built with Vue.js: an online store with a catalog and shopping cart.',
            ru: 'Дипломный проект SkillBox на Vue.js: интернет-магазин с каталогом и корзиной.'
        },
        demo: 'https://moire.jedenkoor.ru/',
        repo: 'https://github.com/jedenkoor/Moire',
        image: '/images/projects/moire.svg',
        stack: ['Webpack', 'Vue'],
        type: 'ecommerce',
        year: 2021
    },
    {
        title: {
            en: 'Torbey Mattresses',
            ru: 'Торбеевские матрасы'
        },
        description: {
            en: 'Mattress factory online store: catalog, size selection and checkout.',
            ru: 'Интернет-магазин фабрики матрасов: каталог, подбор размера и оформление заказа.'
        },
        demo: 'https://tmvo.ru/',
        repo: 'https://github.com/jedenkoor/Torbey',
        image: '/images/projects/torbey.svg',
        stack: ['Webpack', 'ES6'],
        type: 'ecommerce',
        year: 2021
    },
    {
        title: {
            en: 'Clevergrad',
            ru: 'Clevergrad'
        },
        description: {
            en: 'Country real estate in the Leningrad region: a catalog of settlements and plots, filters by district and utilities, and a map.',
            ru: 'Загородная недвижимость в Ленинградской области: каталог посёлков и участков, фильтры по району и коммуникациям, карта.'
        },
        demo: 'https://clevergrad.ru/',
        image: '/images/projects/clevergrad.png',
        stack: ['ModX', 'JavaScript', 'jQuery'],
        type: 'corporate',
        year: 2020
    },
    {
        title: {
            en: 'Finnkoti',
            ru: 'Finnkoti'
        },
        description: {
            en: 'House construction: services, projects and prices, a gallery of properties and request intake.',
            ru: 'Строительство домов: услуги, проекты и цены, галерея объектов и приём заявок.'
        },
        demo: 'https://finnkoti.ru/',
        image: '/images/projects/finnkoti.png',
        stack: ['ModX', 'JavaScript', 'jQuery'],
        type: 'corporate',
        year: 2019
    }
]

export const getProjects = (locale: AppLocale): Project[] =>
    projectSources.map(source => ({
        ...source,
        title: source.title[locale],
        description: source.description[locale]
    }))
