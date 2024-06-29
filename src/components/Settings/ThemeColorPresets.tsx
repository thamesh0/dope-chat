import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

// ----------------------------------------------------------------------

interface IThemeColorPresets {
    children: ReactNode;
}

export default function ThemeColorPresets({ children }: IThemeColorPresets) {
    const theme = createTheme();

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
