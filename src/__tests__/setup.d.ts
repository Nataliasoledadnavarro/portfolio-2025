import '@testing-library/jest-dom'

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R
      toHaveClass(className: string): R
      toHaveAttribute(attr: string, value?: string): R
      toBeVisible(): R
      toHaveAccessibleName(name: string): R
      toHaveTextContent(text: string): R
      toBeChecked(): R
      toBeDisabled(): R
      toBeEnabled(): R
      toHaveFocus(): R
      toHaveValue(value: string | number): R
    }
  }
}