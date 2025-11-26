"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";
import {
  Languages,
} from "lucide-react";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <>
      <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end mb-4"
        >
          <div className="flex items-center gap-2 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-full px-4 py-2 shadow-lg shadow-cyan-500/10">
            <Languages className="w-4 h-4 text-slate-600 dark:text-white/60" />
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full text-sm transition-all ${
                lang === "en"
                  ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg"
                  : "text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang("hi")}
              className={`px-3 py-1 rounded-full text-sm transition-all ${
                lang === "hi"
                  ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg"
                  : "text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              हिंदी
            </button>
          </div>
        </motion.div>
    {/* <button
      onClick={() => setLang(lang === "hi" ? "en" : "hi")}
      style={{
        padding: "8px 12px",
        border: "1px solid #ccc",
        borderRadius: "6px"
      }}
    >
      {lang === "hi" ? "Switch to English" : "हिंदी में देखें"}
    </button> */}
    </>
  );
}
