import MenuBar from "./menuBar";
import "./components.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";
import Header from "./header";

const AllComponents = () => {
    return <>
        <div className="wrap">
            <div className="components">
                <MenuBar />
                <div className="content">
                    <Header />
                    <main>
                        <Suspense>
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
