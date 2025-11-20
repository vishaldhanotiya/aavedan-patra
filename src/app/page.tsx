"use client";

import { BlogExample } from "@/components/BlogExample";
import { BlogSection } from "@/components/BlogSection";
import CategoryExample from "@/components/CategoryExample";
import { CategoryGrid } from "@/components/CategoryGrid";
import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Newsletter } from "@/components/Newsletter";
import { QuickLinks } from "@/components/QuickLinks";
import { RecentlyAdded } from "@/components/RecentlyAdded";
import { SubcategoryExample } from "@/components/SubcategoryExample";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TrendingTemplates } from "@/components/TrendingTemplates";
import { applicationsCategory, certificatesCategory, lettersCategory } from "@/data/categoryData";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 dark:from-slate-950 dark:via-blue-950 dark:to-violet-950">
      <ThemeToggle />
      {/* <BlogExample/> */}
      {/* <SubcategoryExample/> */}
                

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
