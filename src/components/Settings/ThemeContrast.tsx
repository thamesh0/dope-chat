import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// ----------------------------------------------------------------------

interface IThemeContrastProps {
    children: React.ReactNode;
}

export default function ThemeContrast({ children }: IThemeContrastProps) {
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
