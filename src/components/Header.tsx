import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useHeader } from "../hooks/useHeader";

export default function Header() {
    const { currentItem, theme, toggleTheme } = useHeader();

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
