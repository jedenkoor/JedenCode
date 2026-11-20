type ProjectType = 'Интернет-магазин' | 'Корпоративный сайт' | 'Сайт-визитка' | 'Веб-сервис'

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
    /** Год создания: по нему карточка показывает год и сортируется */
    year: number
}

export type { Project, ProjectType }
