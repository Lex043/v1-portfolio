import { useState, useEffect } from "react";
import { useTheme } from "./useTheme";

export function useHeader() {
    const [time, setTime] = useState<string | null>(null);
    const [index, setIndex] = useState(0);
    const { theme, toggleTheme } = useTheme();

    const header = [
        {
            id: 1,
            title: "My Local Time",
            subtitle: time,
        },
        {
            id: 2,
            title: "I'm Based In",
            subtitle: "NIG",
        },
        {
            id: 3,
            title: "Theme",
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
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % header.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [header.length]);

    const currentItem = header[index];

    return { currentItem, theme, toggleTheme };
}
