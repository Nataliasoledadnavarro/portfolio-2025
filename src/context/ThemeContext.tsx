"use client"
import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark") 

  const [mounted, setMounted] = useState(false)

  // Cambia el tema y actualiza el DOM + localStorage
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(newTheme)
  }

  // Alterna entre dark/light leyendo directamente del DOM
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark")
    const newTheme = isDark ? "light" : "dark"
    setTheme(newTheme)
  }

  // Inicializa el tema desde localStorage o sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null

    const initialTheme = savedTheme || "dark" // <-- CAMBIO CLAVE

    setTheme(initialTheme)
    setMounted(true)
  }, [])

  // Evita el flash del tema incorrecto
  if (!mounted) {
    return null
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
