// @mui
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Breakpoint } from "@mui/material";

// ----------------------------------------------------------------------

type TQuery = "up" | "down" | "between" | "only";
type TBreakpoint = number | Breakpoint;

export default function useResponsive(query: TQuery, key: TBreakpoint, start: TBreakpoint, end: TBreakpoint) {
    const theme = useTheme();

    const mediaUp = useMediaQuery(theme.breakpoints.up(key));

    const mediaDown = useMediaQuery(theme.breakpoints.down(key));

    const mediaBetween = useMediaQuery(theme.breakpoints.between(start as Breakpoint, end));

    const mediaOnly = useMediaQuery(theme.breakpoints.only(key as Breakpoint));

    if (query === "up") {
        return mediaUp;
    }

    if (query === "down") {
        return mediaDown;
    }

    if (query === "between") {
        return mediaBetween;
    }

    if (query === "only") {
        return mediaOnly;
    }
    return null;
}
