import ThemeSettings from "./components/Settings/settings.tsx";
import ThemeProvider from "./theme/ThemeProvider.tsx";
import Router from "./routes/router.tsx";

function App() {
    return (
        <ThemeProvider>
            <ThemeSettings>
                <div className="px-12">{"Hello World"}</div>
                <Router />
            </ThemeSettings>
        </ThemeProvider>
    );
}

export default App;
