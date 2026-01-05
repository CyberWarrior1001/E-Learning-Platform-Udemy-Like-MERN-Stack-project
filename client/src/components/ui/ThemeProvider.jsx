"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children, defaultTheme = "system" }) {
  const [theme, setTheme] = useState(defaultTheme)

  // Apply theme to <html>
  useEffect(() => {
    const root = window.document.documentElement
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    let appliedTheme = theme

    if (theme === "system") {
      appliedTheme = systemDark ? "dark" : "light"
    }

    root.classList.remove("light", "dark")
    root.classList.add(appliedTheme)

    // save in localStorage
    localStorage.setItem("theme", theme)
  }, [theme])

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved) setTheme(saved)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
