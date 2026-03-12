import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslations from './locales/es/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: esTranslations,
      },
    },
    lng: 'es', // Idioma por defecto: español
    fallbackLng: 'es', // Idioma de respaldo: español
    interpolation: {
      escapeValue: false, // React ya escapa los valores
    },
  });

export default i18n;
