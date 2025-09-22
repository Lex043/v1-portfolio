import { useState, useEffect } from "react";

export function useTime() {
    const [time, setTime] = useState<string | null>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString("en-US"));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return { time };
}
