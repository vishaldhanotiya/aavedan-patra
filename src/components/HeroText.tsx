"use client";

import { Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { heroString } from "@/data/hero";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroText() {
  const { language } = useLanguage();

  return (
    <div className="sm:mt-8 sm:pt-8">
      <div className="sm:mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/20 mb-6">
        <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
        <span className="text-slate-700 dark:text-white/90 ">
          {heroString.professionalTemp[language]}
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl p-2 mb-6 bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent">
        {heroString.welcomeText[language]}
      </h1>

      <p className="text-xl text-slate-600 dark:text-white/80 mb-8 max-w-xl">
        {heroString.subHeading[language]}
      </p>

      <div className="flex flex-wrap gap-4">
        <Link href="#category-grid">
          <Button
            size="lg"
            className="bg-gradient-to-r from-sky-500 to-violet-600 hover:from-sky-600 hover:to-violet-700 text-white shadow-lg shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-500/60 transition-all duration-300"
          >
            {heroString.exploreTemp[language]}
          </Button>
        </Link>

        <Link href="#category-grid">
          <Button
            size="lg"
            variant="outline"
            className="border-slate-300 dark:border-white/30 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 backdrop-blur-md"
          >
            {heroString.viewCategories[language]}
          </Button>
        </Link>
      </div>
    </div>
  );
}
