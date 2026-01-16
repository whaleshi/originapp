export type ThemeName = "dark" | "light";

export type ThemeColors = {
    background: string;
    surface: string;
    surfaceAlt: string;
    surfaceAlt2: string;
    border: string;
    borderStrong: string;
    text: string;
    textSecondary: string;
    textMuted: string;
    textSubtle: string;
    accent: string;
    accentText: string;
    buttonPrimaryBg: string;
    buttonPrimaryText: string;
    buttonSecondaryBg: string;
    buttonSecondaryBorder: string;
    buttonSecondaryText: string;
    inputBg: string;
    inputBorder: string;
    inputPlaceholder: string;
    chipBg: string;
    chipBorder: string;
    overlay: string;
};

export const themeColors: Record<ThemeName, ThemeColors> = {
    dark: {
        background: "#0D0F13",
        surface: "#191B1F",
        surfaceAlt: "#111318",
        surfaceAlt2: "#1A1C20",
        border: "#25262A",
        borderStrong: "#303135",
        text: "#FFFFFF",
        textSecondary: "#B8BBC1",
        textMuted: "#868789",
        textSubtle: "#4A4B4E",
        accent: "#FD7438",
        accentText: "#0D0F13",
        buttonPrimaryBg: "#FFFFFF",
        buttonPrimaryText: "#0D0F13",
        buttonSecondaryBg: "transparent",
        buttonSecondaryBorder: "#FD7438",
        buttonSecondaryText: "#FD7438",
        inputBg: "#191B1F",
        inputBorder: "#25262A",
        inputPlaceholder: "#4A4B4E",
        chipBg: "#191B1F",
        chipBorder: "#303135",
        overlay: "rgba(0,0,0,0.5)",
    },
    light: {
        background: "#F6F7FB",
        surface: "#FFFFFF",
        surfaceAlt: "#F3F4F6",
        surfaceAlt2: "#FFFFFF",
        border: "#E5E7EB",
        borderStrong: "#D1D5DB",
        text: "#111827",
        textSecondary: "#4B5563",
        textMuted: "#6B7280",
        textSubtle: "#9CA3AF",
        accent: "#FD7438",
        accentText: "#FFFFFF",
        buttonPrimaryBg: "#111827",
        buttonPrimaryText: "#FFFFFF",
        buttonSecondaryBg: "#FFFFFF",
        buttonSecondaryBorder: "#FD7438",
        buttonSecondaryText: "#FD7438",
        inputBg: "#FFFFFF",
        inputBorder: "#D1D5DB",
        inputPlaceholder: "#9CA3AF",
        chipBg: "#F3F4F6",
        chipBorder: "#D1D5DB",
        overlay: "rgba(15,23,42,0.35)",
    },
};
