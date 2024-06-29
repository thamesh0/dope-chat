import { styled } from "@mui/material/styles";
import { Box, BoxProps } from "@mui/material";
import { ReactNode } from "react";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(() => ({
    flexGrow: 1,
    height: "100%",
    overflow: "scroll",
}));

// ----------------------------------------------------------------------

interface IScrollbarProps extends BoxProps {
    children: ReactNode;
}

export default function Scrollbar({ children, sx, ...other }: IScrollbarProps) {
    const userAgent = typeof navigator === "undefined" ? "SSR" : navigator.userAgent;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (isMobile) {
        return (
            <Box sx={{ overflowX: "auto", ...sx }} {...other}>
                {children}
            </Box>
        );
    }

    return (
        <RootStyle>
            {"Scroll Bar"}
            {children}
        </RootStyle>
    );
}
