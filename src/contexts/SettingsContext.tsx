import React, { createContext, useEffect } from "react";
import { defaultSettings } from "../config";
import useLocalStorage from "../hooks/useLocalStorage";

interface SettingsContextType {
    themeMode: string;
    themeLayout: string;
    themeStretch: boolean;
    themeContrast: string;
    themeDirection: string;
    themeColorPresets: any; // Replace with actual type if available
    onToggleMode: () => void;
    onChangeMode: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onToggleDirection: () => void;
    onChangeDirection: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeDirectionByLang: (lang: string) => void;
    onToggleLayout: () => void;
    onChangeLayout: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onToggleContrast: () => void;
    onChangeContrast: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeColor: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onToggleStretch: () => void;
    onResetSetting: () => void;
}

const initialState: SettingsContextType = {
  ...defaultSettings,
  onToggleMode: () => {},
  onChangeMode: () => {},
  onToggleDirection: () => {},
  onChangeDirection: () => {},
  onChangeDirectionByLang: () => {},
  onToggleLayout: () => {},
  onChangeLayout: () => {},
  onToggleContrast: () => {},
  onChangeContrast: () => {},
  onChangeColor: () => {},
  onToggleStretch: () => {},
  onResetSetting: () => {},
};

export const SettingsContext = createContext<SettingsContextType>(initialState);

const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useLocalStorage("settings", {
    themeMode: initialState.themeMode,
    themeLayout: initialState.themeLayout,
    themeStretch: initialState.themeStretch,
    themeContrast: initialState.themeContrast,
    themeDirection: initialState.themeDirection,
    themeColorPresets: initialState.themeColorPresets,
  });

  const isArabic = localStorage.getItem("i18nextLng") === "ar";

  useEffect(() => {
    if (isArabic) {
      onChangeDirectionByLang("ar");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isArabic]);

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
    });
  };

  const onChangeMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeMode: event.target.value,
    });
  };

  const onToggleDirection = () => {
    setSettings({
      ...settings,
      themeDirection: settings.themeDirection === "rtl" ? "ltr" : "rtl",
    });
  };

  const onChangeDirection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeDirection: event.target.value,
    });
  };

  const onChangeDirectionByLang = (lang: string) => {
    setSettings({
      ...settings,
      themeDirection: lang === "ar" ? "rtl" : "ltr",
    });
  };

  const onToggleLayout = () => {
    setSettings({
      ...settings,
      themeLayout: settings.themeLayout === "vertical" ? "horizontal" : "vertical",
    });
  };

  const onChangeLayout = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeLayout: event.target.value,
    });
  };

  const onToggleContrast = () => {
    setSettings({
      ...settings,
      themeContrast: settings.themeContrast === "default" ? "bold" : "default",
    });
  };

  const onChangeContrast = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeContrast: event.target.value,
    });
  };

  const onChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeColorPresets: event.target.value,
    });
  };

  const onToggleStretch = () => {
    setSettings({
      ...settings,
      themeStretch: !settings.themeStretch,
    });
  };

  const onResetSetting = () => {
    setSettings({
      themeMode: initialState.themeMode,
      themeLayout: initialState.themeLayout,
      themeStretch: initialState.themeStretch,
      themeContrast: initialState.themeContrast,
      themeDirection: initialState.themeDirection,
      themeColorPresets: initialState.themeColorPresets,
    });
  };

  return (
      <SettingsContext.Provider
          value={{
            ...settings,
            onToggleMode,
            onChangeMode,
            onToggleDirection,
            onChangeDirection,
            onChangeDirectionByLang,
            onToggleLayout,
            onChangeLayout,
            onToggleContrast,
            onChangeContrast,
            onChangeColor,
            onToggleStretch,
            onResetSetting,
          }}
      >
        {children}
      </SettingsContext.Provider>
  );
};

export default SettingsProvider;
