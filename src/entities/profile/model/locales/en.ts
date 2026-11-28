import { PROFILE_CONTACTS } from '../common'
import type { Profile } from '../types'

export const en: Profile = {
    fullName: 'Daniil Kuzmin',
    title: 'Senior Frontend Developer (Vue / Nuxt)',
    headline: 'Vue/Nuxt and React, SSR and web performance',
    summary:
        'Frontend developer with 7+ years of experience. I build SPA and SSR applications with Vue, Nuxt, React and TypeScript. I like clear, fast interfaces and code that is still easy to maintain a year later. I work closely with product, analysts, design and backend — from task discussion to release; I also review code and help new developers settle in. I want to move into a Product Engineer role — owning the product, its data and outcomes, while keeping a strong frontend background.',
    location: 'Saint Petersburg, Russia · Remote (UTC+3)',
    experienceYears: 7,
    contacts: PROFILE_CONTACTS,
    experience: [
        {
            company: 'Elisoft',
            descriptor: 'Full-cycle software development',
            role: 'Frontend Developer (Senior)',
            period: '08/2026 — present',
            projects: [],
            achievements: [
                'Building the frontend with Vue 3, Feature-Sliced Design (FSD) architecture and Storybook UI components in an 8-person frontend team.'
            ]
        },
        {
            company: 'Leadgid',
            descriptor: 'International CPA platform, affiliate/performance marketing',
            role: 'Frontend Developer (Middle → Senior)',
            period: '09/2021 — 05/2026',
            projects: [
                { label: 'cpa.leadgid.ru', href: 'https://cpa.leadgid.ru/' },
                { label: 'money.leadgid.ru', href: 'https://money.leadgid.ru/' }
            ],
            achievements: [
                'Built an SSR application with Nuxt 3 + TypeScript, hybrid rendering and SEO (dynamic sitemap, OpenGraph, Schema.org): organic traffic grew by about 50%.',
                'Migrated a large application from Nuxt 2 to Nuxt 3: Composition API, Pinia, Vite; PageSpeed 30 → 73 on mobile and 99 on desktop, improved Core Web Vitals and reduced bundle size.',
                'Built an internal SPA/CRM with React + TypeScript: TanStack Query, React Hook Form, Zod, Zustand; authentication, role-based access and ECharts dashboards.',
                'Built money.leadgid.ru from scratch: modular monorepo, caching, admin panel with authentication and roles.',
                'Mentored a junior developer: onboarding, best practices and detailed code reviews.',
                'Built an interactive landing page with Three.js: scene, lighting, materials and scroll-driven animation.'
            ]
        },
        {
            company: 'Growth Point',
            descriptor: 'Startup web studio',
            role: 'Frontend Developer (Middle)',
            period: '02/2021 — 08/2021',
            projects: [
                { label: 'levitacia.co', href: 'https://levitacia.co/' },
                { label: 'tmvo.ru', href: 'https://tmvo.ru/' }
            ],
            achievements: [
                'Developed and maintained 5+ SPA and SSR applications with Vue 2 and Nuxt 2 for commercial projects.',
                'Delivered 20+ user scenarios: forms, catalogs, dashboards and dynamic interfaces on top of REST APIs.',
                'Streamlined frontend architecture: component structure, reusable modules and shared UI solutions.',
                'Set up and maintained tooling: Webpack, ESLint, Prettier, Git workflows.'
            ]
        },
        {
            company: 'RA-Studio',
            descriptor: 'Digital agency',
            role: 'Frontend Developer (Junior)',
            period: '05/2018 — 01/2021',
            projects: [
                { label: 'clevergrad.ru', href: 'https://clevergrad.ru/' },
                { label: 'finnkoti.ru', href: 'https://finnkoti.ru/' }
            ],
            achievements: [
                'Developed and maintained 20+ commercial websites and web applications: corporate sites, online stores, client services.',
                'Built 30+ responsive pages and UI components for modern browsers and mobile devices.',
                'Integrated the frontend with Bitrix and ModX: templates, components and dynamic blocks.',
                'Worked with JavaScript, jQuery, HTML5, CSS3 and SCSS with cross-browser support.'
            ]
        }
    ],
    education: [
        {
            degree: 'Bachelor — Computer Security',
            institution: 'Saint Petersburg Electrotechnical University «LETI»',
            period: '2014 — 2020'
        }
    ],
    languages: [
        { language: 'Russian', level: 'native' },
        { language: 'English', level: 'B2 written / B1 spoken' }
    ],
    skills: [
        {
            title: 'Frontend',
            items: ['Vue 2', 'Vue 3', 'Nuxt 2', 'Nuxt 3', 'React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS']
        },
        {
            title: 'State and data',
            items: ['Pinia', 'Vuex', 'Zustand', 'TanStack Query', 'React Hook Form', 'Zod', 'REST API']
        },
        {
            title: 'Architecture and UI',
            items: ['Feature-Sliced Design', 'Storybook', 'responsive layout', 'reusable UI components']
        },
        {
            title: 'Performance and quality',
            items: ['SSR', 'SEO', 'Core Web Vitals', 'bundle optimization', 'ESLint', 'Prettier', 'code review']
        },
        {
            title: 'Tools',
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
            title: 'Process',
            items: ['Agile/Scrum', 'code review', 'mentoring']
        },
        {
            title: 'AI tools',
            items: ['Cursor', 'Claude', 'GitHub Copilot']
        },
        {
            title: 'Also',
            items: ['Three.js', 'ECharts', 'Next.js (basic)', 'Jest (basic)', 'Accessibility (basic)', 'Bitrix/ModX (legacy)']
        }
    ],
    cvUrl: '/cv/daniil-kuzmin-frontend-developer-en.pdf'
}
