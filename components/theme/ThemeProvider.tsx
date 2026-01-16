import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { themeColors, type ThemeColors, type ThemeName } from "@/constants/theme";

type ThemeContextValue = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  colors: ThemeColors;
  isDark: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const THEME_STORAGE_KEY = "app_theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>("dark");
  const colors = useMemo(() => themeColors[theme], [theme]);

  useEffect(() => {
    let isActive = true;
    const loadTheme = async () => {
      try {
        const stored = await SecureStore.getItemAsync(THEME_STORAGE_KEY);
        if (!isActive || !stored) return;
        if (stored === "dark" || stored === "light") {
          setTheme(stored);
        }
      } catch {
        // Ignore load errors; fall back to default theme.
      }
    };
    loadTheme();
    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    const saveTheme = async () => {
      try {
        await SecureStore.setItemAsync(THEME_STORAGE_KEY, theme);
      } catch {
        // Ignore save errors; theme changes should still apply in memory.
      }
    };
    saveTheme();
  }, [theme]);
  const value = useMemo(
    () => ({
      theme,
      setTheme,
      colors,
      isDark: theme === "dark",
    }),
    [theme, colors]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useAppTheme must be used within ThemeProvider");
  }
  return context;
}
