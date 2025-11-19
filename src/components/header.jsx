import "./components.css"

import Image from "../assets/line-md--moon-filled.svg"
import Setting from "../assets/uil--setting.svg"
import Sun from "../assets/mingcute--sun-fill.svg"
import { useTheme } from "../context/themeContext"
// import { useState } from "react"

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return <>
        <div className="light">
            <div className="dark_sun">
                <button onClick={toggleTheme}><img src={theme === "light" ? Image : Sun} alt={theme === "light" ? "dark" : "light"} /></button>
                <button><img src={Setting} alt="Setting" /></button>
            </div>
        </div>
    </>
}


export default Header;