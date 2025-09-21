import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export default function Header() {
    const [time, setTime] = useState<string | null>(null);
    const [index, setIndex] = useState(0);
    const [theme, setTheme] = useState<"light" | "dark">("dark");

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

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const currentItem = header[index];

    return (
        <div className="fixed top-0 left-0 z-40 w-full border-b border-dashed border-[#36383B] bg-transparent px-6 py-8">
            <div className="mx-auto max-w-56 rounded-full border border-[#CBC3B9] bg-transparent px-6 py-2 backdrop-blur">
                <div className="flex items-center justify-between">
                    <h1 className="text-sm text-[#A8A29E]">
                        {currentItem.title}
                    </h1>
                    {currentItem.id === 3 ? (
                        <button
                            onClick={toggleTheme}
                            className="cursor-pointer"
                        >
                            {theme === "light" ? (
                                <SunIcon className="h-5 w-5 text-yellow-400" />
                            ) : (
                                <MoonIcon className="h-5 w-5 text-gray-300" />
                            )}
                        </button>
                    ) : (
                        <p className="text-sm text-gray-300">
                            {currentItem.subtitle}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
