"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';
import en from "../messages/en.json";
import hi from "../messages/hi.json";

type Language =  'hi' | 'en' ;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (language: Language) => void;
  t: any; // translations object (by selected lang)
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('hi');
  const [mounted, setMounted] = useState(false);

  // Initialize language on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    const initialLanguage = savedLanguage || 'hi';
    
    setLanguageState(initialLanguage);
    setMounted(true);
  }, []);

  // Save language changes to localStorage
  useEffect(() => {
    if (!mounted) return;
    
    localStorage.setItem('language', language);
  }, [language, mounted]);

 const t = language === "hi" ? hi : en;

  const toggleLanguage = () => {
    setLanguageState((prevLanguage) => prevLanguage === 'en' ? 'hi' : 'en');
  };

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
  };

  const value: LanguageContextType = {
    language,
    toggleLanguage,
    setLanguage,
    t
  };

  // Prevent flash of unstyled content
  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
