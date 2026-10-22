"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

type Language = "en" | "tr";
const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({ language: "en", setLanguage: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    (onChange) => {
      window.addEventListener("storage", onChange);
      window.addEventListener("portfolio-language-change", onChange);
      return () => {
        window.removeEventListener("storage", onChange);
        window.removeEventListener("portfolio-language-change", onChange);
      };
    },
    () => {
      const saved = window.localStorage.getItem("portfolio-language");
      return saved === "tr" ? "tr" : "en";
    },
    () => "en" as Language,
  );
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  const selectLanguage = (next: Language) => {
    window.localStorage.setItem("portfolio-language", next);
    window.dispatchEvent(new Event("portfolio-language-change"));
  };
  return <LanguageContext.Provider value={{ language, setLanguage: selectLanguage }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
