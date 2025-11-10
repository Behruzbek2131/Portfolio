import { lazy } from "react";

const HomePage = lazy(() => import("./Home/home"))
const AboutPage = lazy(() => import("./About/about"))
const PortfolioPage = lazy(() => import("./Portfolio/portfolio"))
const ContactPage = lazy(() => import("./Contact/contact"))

export{HomePage, AboutPage, PortfolioPage, ContactPage}