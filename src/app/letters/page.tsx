"use client"
import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { lettersCategory } from "@/data/category/lettersCategory";

export default function Page() {
  return <DynamicCategoryPage category={lettersCategory} />;
}
