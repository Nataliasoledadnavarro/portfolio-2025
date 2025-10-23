// Ejemplo de función utility que podrías tener
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString + 'T12:00:00') // Evitar problemas de timezone
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .normalize('NFD') // Normalizar caracteres acentuados
    .replace(/[\u0300-\u036f]/g, '') // Remover diacríticos
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const validateEmail = (email: string): boolean => {
  // Regex más estricto que rechaza casos edge como doble punto
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return emailRegex.test(email) && !email.includes('..')
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}