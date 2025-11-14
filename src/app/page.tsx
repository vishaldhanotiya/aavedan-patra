"use client"
import { BlogSection } from "@/components/BlogSection";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Newsletter } from "@/components/Newsletter";
import { QuickLinks } from "@/components/QuickLinks";
import { RecentlyAdded } from "@/components/RecentlyAdded";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TrendingTemplates } from "@/components/TrendingTemplates";
import Image from "next/image";

export default function Home() {
  return (
 <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 dark:from-slate-950 dark:via-blue-950 dark:to-violet-950">
      <ThemeToggle />
      <Hero />
      <CategoryGrid />
      <TrendingTemplates />
      <RecentlyAdded />
      <BlogSection />
      <FAQ />
      <QuickLinks />
      <Newsletter />
      <Footer />
    </div>
  );
}
