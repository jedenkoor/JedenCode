import { readonly, ref } from 'vue'
import {
  THEME_COLOR_DARK,
  THEME_DARK_VALUE,
  THEME_LIGHT_CLASS,
  THEME_LIGHT_VALUE,
  THEME_STORAGE_KEY
} from '@/shared/constants'

// Состояние общее для всех вызовов composable: тема одна на документ.
const isLightTheme = ref<boolean>(false)
let isThemeSynced = false

const getThemeColor = (): string => {
  if (typeof window === 'undefined') return THEME_COLOR_DARK
  const mainBg = getComputedStyle(document.documentElement).getPropertyValue('--main-bg').trim()
  return mainBg || THEME_COLOR_DARK
}

const applyTheme = (isLight: boolean): void => {
  document.documentElement.classList.toggle(THEME_LIGHT_CLASS, isLight)
  document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute('content', getThemeColor())
}

/**
 * Тема сайта: начальное значение уже выставлено инлайн-скриптом в <head>
 * (см. app/config/theme.ts), здесь оно только читается из DOM.
 */
export function useTheme() {
  // import.meta.client: на сервере document отсутствует
  if (import.meta.client && !isThemeSynced) {
    isThemeSynced = true
    isLightTheme.value = document.documentElement.classList.contains(THEME_LIGHT_CLASS)
  }

  const toggleTheme = (): void => {
    isLightTheme.value = !isLightTheme.value
    applyTheme(isLightTheme.value)
    localStorage.setItem(THEME_STORAGE_KEY, isLightTheme.value ? THEME_LIGHT_VALUE : THEME_DARK_VALUE)
  }

  return { isLightTheme: readonly(isLightTheme), toggleTheme }
}
