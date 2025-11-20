"use client"
import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { lettersCategory } from "@/data/categoryData";

export default async function Page() {
  return <DynamicCategoryPage category={lettersCategory} />;
}
