import { Link, useLocation } from "react-router-dom";
import { MenuData } from "../constants/menuData";
import "./components.css";

const MenuBar = () => {
    const location = useLocation();

    return <>
        <section className="menuBar">
            <h1>B<span  className="nameImg">ehruzbek</span></h1>
            <div className="navBar">
                {MenuData.map((item) => (
                    <Link
                        key={item.key}
                        to={item.path}
                        className={location.pathname === item.path ? "link active" : "link"}>
                        {item.icon}
                        <p>{item.label}</p>
                    </Link>
                ))}
            </div>
        </section>
    </>
};

export default MenuBar;
