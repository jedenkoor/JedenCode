import { THEME_LIGHT_CLASS, THEME_LIGHT_VALUE, THEME_STORAGE_KEY } from '../../shared/constants/theme'

/**
 * Инлайн-скрипт в <head>: применяет тему до первой отрисовки, чтобы не было
 * вспышки тёмной темы при светлой. Тема по умолчанию — системная.
 */
export const THEME_INIT_SCRIPT =
    `(function(){try{` +
    `var stored=localStorage.getItem('${THEME_STORAGE_KEY}');` +
    `var isSystemLight=window.matchMedia('(prefers-color-scheme: light)').matches;` +
    `if(stored==='${THEME_LIGHT_VALUE}'||(stored===null&&isSystemLight)){` +
    `document.documentElement.classList.add('${THEME_LIGHT_CLASS}')` +
    `}}catch(e){}})()`
