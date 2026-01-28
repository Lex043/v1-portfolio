import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useHeader } from "../hooks/useHeader";

export default function Navbar() {
    const { currentItem, theme, toggleTheme } = useHeader();

    return (
        <nav className="fixed top-0 left-0 z-40 w-full bg-transparent px-6 py-8">
            <section className="mx-auto flex max-w-4xl items-center justify-between md:px-14 lg:px-24">
                <div className="w-30 rounded-full border border-[#CBC3B9] bg-transparent px-6 py-2 backdrop-blur">
                    <div className="flex items-center justify-center text-nowrap transition duration-200">
                        {/* <h1 className="text-sm [color:var(--text-color)]">
                        {currentItem.title}
                    </h1> */}
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
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <a
                            className="under [color:var(--text-color)] italic"
                            href="/"
                        >
                            home
                        </a>
                    </div>
                    <div className="relative">
                        <a
                            className="under [color:var(--text-color)] italic"
                            href="/about"
                        >
                            about
                        </a>
                    </div>
                </div>
            </section>
        </nav>
    );
}
