import type { Profile } from '../types'

export const en: Profile = {
    fullName: 'Daniil Kuzmin',
    title: 'Senior Frontend Developer',
    headline: 'Vue/Nuxt and React, SSR and web performance',
    summary:
        '7+ years building SPA and SSR applications with Vue, Nuxt, React and TypeScript. I own frontend architecture, performance and product quality, working closely with backend, design and product teams.',
    location: 'Saint Petersburg, Russia',
    experienceYears: 7,
    contacts: [
        {
            kind: 'email',
            label: 'kuzmin.daniil.alexandrovich@gmail.com',
            href: 'mailto:kuzmin.daniil.alexandrovich@gmail.com',
            isExternal: false
        },
        {
            kind: 'telegram',
            label: 'Telegram',
            href: 'https://t.me/Jedenkoor',
            isExternal: true
        },
        {
            kind: 'github',
            label: 'GitHub',
            href: 'https://github.com/jedenkoor',
            isExternal: true
        },
        {
            kind: 'linkedin',
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/daniil-kuzmin-7476b1231',
            isExternal: true
        }
    ],
    experience: [
        {
            company: 'Elisoft',
            role: 'Senior Frontend Developer (Vue)',
            period: '08/2026 — present',
            projects: [],
            achievements: [
                'Building the frontend with Vue, Feature-Sliced Design (FSD) architecture and UI components in Storybook.'
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
                'Built an SSR application with Nuxt 3 + TypeScript, hybrid rendering and SEO optimization: organic traffic grew by about 50%.',
                'Migrated a large application from Nuxt 2 to Nuxt 3: improved Core Web Vitals and reduced bundle size, Google PageSpeed 30 → 73 on mobile and 99 on desktop.',
                'Built an internal SPA with React + TypeScript: TanStack Query, React Hook Form, Zod, Zustand.',
                'Created interactive interfaces with Three.js.'
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
                'Developed and maintained 5+ SPA and SSR applications with Vue 2 and Nuxt 2 for commercial projects.',
                'Delivered 20+ user scenarios: forms, catalogs, dashboards and dynamic interfaces on top of REST APIs.',
                'Streamlined frontend architecture: component structure, reusable modules and shared UI solutions.',
                'Set up and maintained tooling: Webpack, ESLint, Prettier, Git workflows.'
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
            items: ['Vue 2', 'Vue 3', 'Nuxt 2', 'Nuxt 3', 'React', 'Next.js', 'TypeScript', 'HTML5', 'CSS3', 'SCSS']
        },
        {
            title: 'State and data',
            items: ['Pinia', 'Vuex', 'Zustand', 'TanStack Query', 'React Hook Form', 'Zod', 'REST API']
        },
        {
            title: 'Performance and quality',
            items: ['SSR', 'SEO', 'Core Web Vitals', 'bundle optimization', 'ESLint', 'Prettier']
        },
        {
            title: 'Tools',
            items: ['Vite', 'Webpack', 'Gulp', 'Docker', 'Git', 'Linux', 'CI/CD']
        },
        {
            title: 'Architecture and UI',
            items: ['Feature-Sliced Design', 'Storybook']
        },
        {
            title: 'AI tools',
            items: ['Cursor', 'Claude', 'GitHub Copilot']
        }
    ],
    cvUrl: '/cv/daniil-kuzmin-frontend-developer.pdf'
}
