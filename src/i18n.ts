import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ru from './locales/ru.json';
import en from './locales/en.json';
import tr from './locales/tr.json';

const resources = {
  RU: { translation: ru },
  EN: { translation: en },
  TR: { translation: tr }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'RU', // default language
    fallbackLng: 'EN',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
