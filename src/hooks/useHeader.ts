import { useState, useEffect } from "react";
import { useTheme } from "./useTheme";

export function useHeader() {
    const [time, setTime] = useState<string | null>(null);
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const header = [
        {
            id: 1,
            title: "",
            subtitle: time,
        },
        {
            id: 2,
            title: "",
            subtitle: "NIG",
        },
        {
            id: 3,
            title: "",
            subtitle: theme,
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString("en-US"));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % header.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isPaused, header.length]);

    const handleThemeToggle = () => {
        setIndex(2);
        setIsPaused(true);
        toggleTheme();
    };

    const currentItem = header[index];

    return { currentItem, theme, toggleTheme: handleThemeToggle };
}
