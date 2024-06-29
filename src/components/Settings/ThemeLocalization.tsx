import React from "react";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

interface IThemeLocalizationProps {
    children: React.ReactNode;
}

export default function ThemeLocalization({ children }: IThemeLocalizationProps) {
    const defaultTheme = useTheme();

    const theme = createTheme(defaultTheme);

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
