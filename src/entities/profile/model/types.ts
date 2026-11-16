/** Публичные контакты владельца сайта. */
export type ProfileContactKind = 'email' | 'telegram' | 'github' | 'linkedin'

export type ProfileContact = {
    /** Стабильный ключ контакта для `v-for` */
    kind: ProfileContactKind
    label: string
    href: string
    /** Ссылка ведёт за пределы сайта */
    isExternal: boolean
}

export type ProfileProjectLink = {
    label: string
    href: string
}

export type ProfileExperience = {
    company: string
    role: string
    /** Период в человекочитаемом виде: «2021 — 2026» */
    period: string
    projects: ProfileProjectLink[]
    achievements: string[]
}

export type ProfileEducation = {
    degree: string
    institution: string
    period: string
}

export type ProfileLanguage = {
    language: string
    level: string
}

export type ProfileSkillGroup = {
    title: string
    items: string[]
}

/**
 * Публичные данные о владельце сайта.
 */
export type Profile = {
    fullName: string
    title: string
    headline: string
    summary: string
    location: string
    /** Полных лет опыта для витрины «7+ лет» */
    experienceYears: number
    contacts: ProfileContact[]
    experience: ProfileExperience[]
    education: ProfileEducation[]
    languages: ProfileLanguage[]
    skills: ProfileSkillGroup[]
    /** PDF резюме в `public/cv` */
    cvUrl: string
}
