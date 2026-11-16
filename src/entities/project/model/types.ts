type ProjectType = 'Интернет-магазин' | 'Корпоративный сайт' | 'Сайт-визитка'

type Project = {
    title: string
    description: string
    /** Живое демо проекта */
    demo: string
    /** Публичный репозиторий с кодом */
    repo?: string
    image: string
    /** Технологии проекта */
    stack: string[]
    /** Тип сайта — отдельно от стека */
    type: ProjectType
    /** ISO-дата создания: '2021-04-15' */
    date: string
}

export type { Project, ProjectType }
