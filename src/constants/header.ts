import { useTime } from "../hooks/useTime";
const { time } = useTime();

export const header = [
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
