import { AboutPage, ContactPage, HomePage, PortfolioPage } from "../pages";


export const routes = [
    {
        id: 1,
        path: "/",
        element: <HomePage />
    },
    {
        id: 2,
        path: "/about",
        element: <AboutPage />
    },
    {
        id: 3,
        path: "/portfolio",
        element: <PortfolioPage />
    },
    {
        id: 4,
        path: "/contact",
        element: <ContactPage />
    }
]