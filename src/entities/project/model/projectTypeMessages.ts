import type { ProjectType } from './types'

/** Типизированные ключи переводов для кодов типов проектов. */
export const PROJECT_TYPE_MESSAGE_KEYS: Record<ProjectType, string> = {
    ecommerce: 'projects.card.type.ecommerce',
    corporate: 'projects.card.type.corporate',
    landing: 'projects.card.type.landing',
    'web-service': 'projects.card.type.web-service'
}
