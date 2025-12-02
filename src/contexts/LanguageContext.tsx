"use client";

import { createContext, useContext, useEffect, useState } from "react";
import en from "../messages/en.json";
import hi from "../messages/hi.json";

type Lang = "en" | "hi";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: any; // translations object (by selected lang)
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  // Read from cookie on first load
  useEffect(() => {
    const cookieLang = document.cookie
      .split("; ")
      .find((c) => c.startsWith("lang="))
      ?.split("=")[1] as Lang;

    if (cookieLang) setLang(cookieLang);
  }, []);

  // Save language to cookie
  useEffect(() => {
    document.cookie = `lang=${lang}; path=/; max-age=31536000`;
  }, [lang]);

  const t = lang === "hi" ? hi : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext)!;


// "use client";

// import { createContext, useContext, useEffect, useState } from "react";
// import en from "../messages/en.json";
// import hi from "../messages/hi.json";

// type Lang = "en" | "hi";

// const translations: Record<Lang, any> = { en, hi };

// interface LanguageContextType {
//   lang: Lang;
//   t: (key: string) => string;
//   setLang: (lang: Lang) => void;
// }

// const LanguageContext = createContext<LanguageContextType | null>(null);

// export function LanguageProvider({ children }: { children: React.ReactNode }) {
//   const [lang, setLang] = useState<Lang>("hi");

//   // Load from cookie
//   useEffect(() => {
//     const cookieLang = document.cookie
//       .split("; ")
//       .find((c) => c.startsWith("lang="))
//       ?.split("=")[1] as Lang;

//     if (cookieLang) setLang(cookieLang);
//   }, []);

//   // Save to cookie
//   useEffect(() => {
//     document.cookie = `lang=${lang}; path=/; max-age=31536000`;
//   }, [lang]);

//   const t = (key: string) => translations[lang][key] || key;

//   return (
//     <LanguageContext.Provider value={{ lang, setLang, t }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export const useLanguage = () => useContext(LanguageContext)!;
