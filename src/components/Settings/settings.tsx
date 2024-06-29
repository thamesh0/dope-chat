import ThemeColorPresets from "./ThemeColorPresets.tsx";
import ThemeContrast from "./ThemeContrast.tsx";
import ThemeLocalization from "./ThemeLocalization.tsx";
import ThemeRtlLayout from "./ThemeRtlLayout.tsx";
import { ReactNode } from "react";

// ----------------------------------------------------------------------

interface IThemeSettings {
    children: ReactNode;
}

export default function ThemeSettings({ children }: IThemeSettings) {
    return (
        <ThemeColorPresets>
            <ThemeContrast>
                <ThemeLocalization>
                    <ThemeRtlLayout>
                        {children}
                    </ThemeRtlLayout>
                </ThemeLocalization>
            </ThemeContrast>
        </ThemeColorPresets>
    );
}
