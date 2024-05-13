
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        title: 'Multi-language app',
        hi:'hello',
      },
    },
    es: {
      translation: {
        title: 'Aplicación en varios idiomas',
        hi:'hola',
      },
    },
  },
});

export default i18n;