import { useState, useEffect } from "react";
import SunImg from "../assets/heroicons-solid--sun.svg";
import DarkImg from "../assets/tdesign--mode-dark.svg";

export default function Header() {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("site-theme");
        if (saved) return saved;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.setAttribute("data-theme", "dark");
        } else {
            root.removeAttribute("data-theme");
        }
        localStorage.setItem("site-theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => (prev === "dark" ? "light" : "dark"));

    return (
        <header>
            <div className="dark_sun" onClick={toggleTheme} style={{ cursor: "pointer" }}>
                <img
                    src={theme === "dark" ? DarkImg : SunImg}
                    alt={theme === "dark" ? "Moon Icon" : "Sun Icon"}
                    width={30}
                    height={30}
                />
            </div>
        </header>
    );
}
