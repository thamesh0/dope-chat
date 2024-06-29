import { Box, BoxProps } from "@mui/material";
import { Icon } from "@iconify/react";

interface IconifyProps extends BoxProps {
    icon: string | object;
}

const Iconify = ({ icon, sx, ...other }: IconifyProps) => {
    return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
};

export default Iconify;
