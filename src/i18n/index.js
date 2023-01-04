import i18n from "i18next";
import zh_CN from './locale/zh_CN.json'
import en_CN from './locale/en_CN.json'
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        lng: "en",
        fallbackLng: "en",
        debug: false,
        resources: {
            "zh": {
                translation: zh_CN,
            },
            "en": {
                translation: en_CN
            },
        },
        interpolation: {
            escapeValue: false, // 避免将特殊字符转译成xss的安全码
        },
    });

export default i18n;