import * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark" | "system"
type Context = { theme: Theme; setTheme: (t: Theme) => void }

const ThemeContext = createContext<Context | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("vite-ui-theme") as Theme) || "system"
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    const apply = (t: Theme) => {
      if (t === "system") {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        root.classList.add(isDark ? "dark" : "light")
      } else {
        root.classList.add(t)
      }
    }

    apply(theme)
  }, [theme])

  const value = { theme, setTheme }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme deve ser usado dentro de ThemeProvider")
  return ctx
}
