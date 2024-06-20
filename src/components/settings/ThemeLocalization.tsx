// @mui
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
// hooks
import useLocales from "../../hooks/useLocales";

// ----------------------------------------------------------------------

interface IThemeLocalizationProps {
  children: React.ReactNode;
}

export default function ThemeLocalization({
  children,
}: IThemeLocalizationProps) {
  const defaultTheme = useTheme();

  const { currentLang } = useLocales();

  const theme = createTheme(defaultTheme, currentLang.systemValue);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
