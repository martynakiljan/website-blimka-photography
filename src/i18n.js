import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./lang/en-translation.json";
import plTranslation from "./lang/pl-translation.json";

i18n.use(initReactI18next).init({
  lng: "pl",
  fallbackLng: "pl",
  resources: {
    en: {
      translation: enTranslation,
    },
    pl: {
      translation: plTranslation,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
