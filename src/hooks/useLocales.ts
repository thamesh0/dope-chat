import { useTranslation } from "react-i18next";
// config
import { allLangs } from "../config";

// ----------------------------------------------------------------------

// interface ILang {
//     label: string;
//     value: string;
//     direction: string;
// }

export default function useLocales() {
    const { i18n, t: translate } = useTranslation();

    // const { onChangeDirectionByLang } = useSettings();

    // const langStorage = localStorage.getItem("i18nextLng");

    // const currentLang: Lang = allLangs.find((_lang: Lang) => _lang.value === langStorage) || defaultLang;

    const handleChangeLanguage = (newLang: string) => {
        i18n.changeLanguage(newLang);
        // onChangeDirectionByLang(newLang);
    };

    return {
        onChangeLang: handleChangeLanguage,
        translate: (text: string, options?: any) => translate(text, options),
        // currentLang,
        allLangs,
    };
}
