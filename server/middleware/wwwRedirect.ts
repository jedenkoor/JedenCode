import { defineEventHandler, getRequestHost, getRequestURL, sendRedirect } from 'h3'
import { SITE_URL } from '@/app/config/site'

const CANONICAL_HOST = new URL(SITE_URL).host
const WWW_HOST = `www.${CANONICAL_HOST}`

/**
 * Склеиваем `www` с каноническим доменом: один адрес для поисковиков и canonical.
 * Редирект 301 сохраняет путь и query.
 */
export default defineEventHandler(event => {
    if (getRequestHost(event) !== WWW_HOST) return

    const url = getRequestURL(event)

    return sendRedirect(event, `https://${CANONICAL_HOST}${url.pathname}${url.search}`, 301)
})
