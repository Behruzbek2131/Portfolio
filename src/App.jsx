import AllComponents from "./components/AllComponents"
import { ThemeProvider } from "./context/themeContext"

const App = () => {
    return <>
        <ThemeProvider>
            <AllComponents />
        </ThemeProvider>
    </>
}

export default App