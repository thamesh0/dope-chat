import { Box, IconButton, Stack } from "@mui/material";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import { useTheme } from "@mui/material/styles";
import { useSearchParams } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

// interface Action {
//     color: string;
//     icon: React.ReactNode;
//     y: number;
//     title: string;
// }

// const Actions: Action[] = [
//     {
//         color: "#4da5fe",
//         icon: <Image size={24} />,
//         y: 102,
//         title: "Photo/Video",
//     },
//     {
//         color: "#1b8cfe",
//         icon: <Sticker size={24} />,
//         y: 172,
//         title: "Stickers",
//     },
//     {
//         color: "#0172e4",
//         icon: <Camera size={24} />,
//         y: 242,
//         title: "Image",
//     },
//     {
//         color: "#0159b2",
//         icon: <File size={24} />,
//         y: 312,
//         title: "Document",
//     },
//     {
//         color: "#013f7f",
//         icon: <User size={24} />,
//         y: 382,
//         title: "Contact",
//     },
// ];

const ChatInput = () => {
    return <input />;
};

const Footer = () => {
    const theme = useTheme();

    const isMobile = useResponsive("between", "md", "xs", "sm");

    const [searchParams] = useSearchParams();

    return (
        <Box
            sx={{
                position: "relative",
                backgroundColor: "transparent !important",
            }}
        >
            <Box
                p={isMobile ? 1 : 2}
                width={"100%"}
                sx={{
                    backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.default,
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                }}
            >
                <Stack direction="row" alignItems={"center"} spacing={isMobile ? 1 : 3}>
                    <Stack sx={{ width: "100%" }}>
                        <Box
                            style={{
                                zIndex: 10,
                                position: "fixed",
                                display: "inline",
                                bottom: 81,
                                right: isMobile ? 20 : searchParams.get("open") === "true" ? 420 : 100,
                            }}
                        >
                            <Picker theme={theme.palette.mode} data={data} onEmojiSelect={console.log} />
                        </Box>
                        {/* Chat Input */}
                        <ChatInput />
                    </Stack>
                    <Box
                        sx={{
                            height: 48,
                            width: 48,
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: 1.5,
                        }}
                    >
                        <Stack sx={{ height: "100%" }} alignItems={"center"} justifyContent="center">
                            <IconButton>
                                <PaperPlaneTilt color="#ffffff" />
                            </IconButton>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

export default Footer;
