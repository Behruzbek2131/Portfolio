import MenuBar from "./menuBar";
import "./components.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";
import Header from "./header";
import { useTheme } from "../context/themeContext";

const AllComponents = () => {
    const { theme } = useTheme()

    return <>
        <div className={`wrap ${theme}`}>
            <div className="components">
                <MenuBar />
                <div className="content">
                    <Header />
                    <main>
                        <Suspense fallback={<div style={{ textAlign: "center", marginTop: "50px", color: "red", fontSize: "20px" }}>Loading...</div>}>
                            <Routes>
                                {routes.map((item, index) => (
                                    <Route key={index} path={item.path} element={item.element} />
                                ))}
                            </Routes>
                        </Suspense>
                    </main>
                </div>
            </div>
        </div>
    </>
};

export default AllComponents;
