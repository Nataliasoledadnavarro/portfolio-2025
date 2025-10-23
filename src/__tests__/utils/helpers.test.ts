import { formatDate, slugify, validateEmail, truncateText } from '@/utils/helpers'

describe('Utility Functions', () => {
  // ✅ Tests para formatDate
  describe('formatDate', () => {
    it('formats date correctly in Spanish locale', () => {
      const result = formatDate('2023-12-25')
      expect(result).toBe('25 de diciembre de 2023')
    })

    it('handles different date formats', () => {
      const result = formatDate('2023-01-01')
      expect(result).toBe('1 de enero de 2023')
    })
  })

  // ✅ Tests para slugify
  describe('slugify', () => {
    it('converts text to URL-friendly slug', () => {
      expect(slugify('Hola Mundo')).toBe('hola-mundo')
      expect(slugify('React & Next.js')).toBe('react-nextjs')
      expect(slugify('  Espacios   múltiples  ')).toBe('espacios-multiples')
    })

    it('handles special characters', () => {
      expect(slugify('¡Hola! ¿Cómo estás?')).toBe('hola-como-estas')
      expect(slugify('Test_underscore-dash')).toBe('test-underscore-dash')
    })

    it('returns empty string for empty input', () => {
      expect(slugify('')).toBe('')
      expect(slugify('   ')).toBe('')
    })
  })

  // ✅ Tests para validateEmail
  describe('validateEmail', () => {
    it('validates correct email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true)
      expect(validateEmail('user.name@domain.co.uk')).toBe(true)
      expect(validateEmail('name+tag@domain.org')).toBe(true)
    })

    it('rejects invalid email addresses', () => {
      expect(validateEmail('invalid-email')).toBe(false)
      expect(validateEmail('test@')).toBe(false)
      expect(validateEmail('@domain.com')).toBe(false)
      expect(validateEmail('test..test@domain.com')).toBe(false)
    })
  })

  // ✅ Tests para truncateText
  describe('truncateText', () => {
    const longText = 'Este es un texto muy largo que necesita ser truncado'

    it('truncates text when exceeds max length', () => {
      const result = truncateText(longText, 20)
      expect(result).toBe('Este es un texto muy...')
      expect(result.length).toBeLessThanOrEqual(23) // 20 + '...'
    })

    it('returns original text when under max length', () => {
      const shortText = 'Texto corto'
      const result = truncateText(shortText, 20)
      expect(result).toBe(shortText)
    })

    it('handles edge cases', () => {
      expect(truncateText('', 10)).toBe('')
      expect(truncateText('Test', 10)).toBe('Test')
      expect(truncateText('Exact', 5)).toBe('Exact')
    })
  })
})