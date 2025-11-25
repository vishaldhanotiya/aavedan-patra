"use client"
import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { essaysCategory } from "@/data/categoryData";

export default function Page() {
  return <DynamicCategoryPage category={essaysCategory} /> ;
}
