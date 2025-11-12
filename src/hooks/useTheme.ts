import { useEffect, useState } from "react";

export function useTheme() {
    const getPreferredTheme = () => {
        if (typeof window === "undefined") return "light";
        const stored = localStorage.getItem("theme");
        if (stored) return stored as "light" | "dark";

        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    };

    const [theme, setTheme] = useState<"light" | "dark">(getPreferredTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return { theme, toggleTheme };
}
