const DATE_FORMATTER = new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'UTC'
})

/** ISO-дата '2021-04-15' → '15.04.2021' */
export const formatDate = (isoDate: string): string => DATE_FORMATTER.format(new Date(`${isoDate}T00:00:00Z`))
