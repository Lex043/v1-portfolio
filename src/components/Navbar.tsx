import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useHeader } from "../hooks/useHeader";

type NavbarProps = {
    pathname: string;
};

export default function Navbar({ pathname }: NavbarProps) {
    const { currentItem, theme, toggleTheme } = useHeader();

    return (
        <nav className="fixed top-0 left-0 z-40 w-full bg-transparent px-6 py-8">
            <section className="mx-auto flex max-w-4xl items-center justify-between md:px-14 lg:px-24">
                <div className="flex h-10 w-30 items-center justify-center rounded-full border border-[#CBC3B9] bg-transparent px-6 backdrop-blur">
                    <div className="flex items-center justify-center text-nowrap transition duration-200">
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
                            href="/"
                            className={`under [color:var(--text-color)] italic ${
                                pathname === "/"
                                    ? "font-semibold opacity-100"
                                    : "opacity-60"
                            }`}
                        >
                            home
                        </a>
                    </div>
                    <div className="relative">
                        <a
                            href="/about"
                            className={`under [color:var(--text-color)] italic ${
                                pathname === "/about"
                                    ? "font-semibold opacity-100"
                                    : "opacity-60"
                            }`}
                        >
                            about
                        </a>
                    </div>
                </div>
            </section>
        </nav>
    );
}
