// @mui
import { CssBaseline } from "@mui/material";
import { createTheme, StyledEngineProvider, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";

// ----------------------------------------------------------------------

interface IThemeProviderProps {
    children: React.ReactNode;
}

export default function ThemeProvider({ children }: IThemeProviderProps) {
    const theme = createTheme();

    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
}
