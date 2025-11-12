import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useHeader } from "../hooks/useHeader";

export default function Navbar() {
    const { currentItem, theme, toggleTheme } = useHeader();

    return (
        <nav className="fixed top-0 left-0 z-40 w-full bg-transparent px-6 py-8">
            <div className="mx-auto max-w-60 rounded-full border border-[#CBC3B9] bg-transparent px-6 py-2 backdrop-blur">
                <div className="flex items-center justify-between text-nowrap transition duration-200">
                    <h1 className="text-sm [color:var(--text-color)]">
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
                        <p className="text-sm [color:var(--text-color)]">
                            {currentItem.subtitle}
                        </p>
                    )}
                </div>
            </div>
        </nav>
    );
}
