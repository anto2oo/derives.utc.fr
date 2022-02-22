import i18n from "i18next"
import Backend from "i18next-xhr-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import enLocales from "../locales/en.json"
import frLocales from "../locales/fr.json"

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        // have a common namespace used around the full app
        interpolation: {
            escapeValue: false, // not needed for react!!
        },
        react: {
            wait: true,
            useSuspense: false
        },
        resources: {
            en: {translation: enLocales},
            fr: {translation: frLocales}
        }
    })
export default i18n