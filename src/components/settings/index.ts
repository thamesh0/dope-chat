import PropTypes from "prop-types";
//
import SettingsDrawer from "./drawer";
//

// ----------------------------------------------------------------------

ThemeSettings.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ThemeSettings({ children }) {
  return (
    <ThemeColorPresets>
      <ThemeContrast>
        <ThemeLocalization>
          <ThemeRtlLayout>
            {children}
            <SettingsDrawer />
          </ThemeRtlLayout>
        </ThemeLocalization>
      </ThemeContrast>
    </ThemeColorPresets>
  );
}
