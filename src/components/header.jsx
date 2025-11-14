import "./components.css"

import Image from "../assets/tdesign--mode-dark.svg"
import Setting from "../assets/uil--setting.svg"
import Sun from "../assets/mingcute--sun-fill.svg"

const Header = () => {
    return <>
        <div className="light">
            <div className="dark_sun">
                <button><img src={Sun} alt="dark" /></button>
                <button><img src={Setting} alt="Setting" /></button>
            </div>
        </div>
    </>
}


export default Header;