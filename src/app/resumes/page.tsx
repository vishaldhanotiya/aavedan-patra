"use client"
import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { resumesCategory } from "@/data/categoryData";

export default function Page() {
  return <DynamicCategoryPage category={resumesCategory} /> ;
}
