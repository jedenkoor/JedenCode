import type { AppLocale } from '@/shared/constants'

/** Код типа сайта: подпись берётся из i18n (`projects.card.type.*`). */
type ProjectType = 'ecommerce' | 'corporate' | 'landing' | 'web-service'

/** Текст, переведённый для каждой локали сайта. */
type LocalizedText = Record<AppLocale, string>

type ProjectSource = {
    title: LocalizedText
    description: LocalizedText
    /** Живое демо проекта */
    demo: string
    /** Публичный репозиторий с кодом */
    repo?: string
    image: string
    /** Технологии проекта */
    stack: string[]
    /** Тип сайта — отдельно от стека */
    type: ProjectType
    /** Год создания: по нему карточка показывает год и сортируется */
    year: number
}

/** Проект с текстами уже выбранной локали — форма для компонентов. */
type Project = Omit<ProjectSource, 'title' | 'description'> & {
    title: string
    description: string
}

export type { LocalizedText, Project, ProjectSource, ProjectType }
