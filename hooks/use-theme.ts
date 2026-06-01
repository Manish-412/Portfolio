import { useEffect, useState } from "react";

const storageKey = "portfolio-theme";

export type ThemeMode = "dark" | "light";

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeMode>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey) as ThemeMode | null;
    const next = stored ?? "dark";
    setThemeState(next);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(next);
  }, []);

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(mode);
    window.localStorage.setItem(storageKey, mode);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, setTheme, toggleTheme };
}
