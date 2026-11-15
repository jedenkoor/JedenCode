/** '2019.03.25' → '25.03.2019' */
export const formatDate = (date: string): string => date.split('.').reverse().join('.')
