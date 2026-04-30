
import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '@/lib/i18n/translations.js';

const LanguageContext = createContext();

export const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
];

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('cbt_language');
    return saved && languages.some(l => l.code === saved) ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('cbt_language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      if (value === undefined) break;
      value = value[k];
    }
    // Fallback to English if translation is missing
    if (value === undefined && language !== 'en') {
      let fallback = translations['en'];
      for (const k of keys) {
        if (fallback === undefined) break;
        fallback = fallback[k];
      }
      return fallback || key;
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
