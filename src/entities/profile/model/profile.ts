import type { AppLocale } from '@/shared/constants'
import type { Profile } from './types'
import { en } from './locales/en'
import { ru } from './locales/ru'

/**
 * Публичные данные профиля по локалям.
 * Источники для обновления — в локальной инструкции проекта (`AGENTS.md`).
 */
const PROFILES: Record<AppLocale, Profile> = { en, ru }

export const getProfile = (locale: AppLocale): Profile => PROFILES[locale]
