import type { Project } from '@/entities/project'

type ProjectOverrides = Partial<Project>

export const makeProject = (overrides: ProjectOverrides = {}): Project => ({
    title: 'Project',
    description: 'Description',
    demo: 'https://example.com/',
    image: '/images/projects/example.svg',
    stack: ['Vue'],
    type: 'corporate',
    year: 2024,
    ...overrides
})
