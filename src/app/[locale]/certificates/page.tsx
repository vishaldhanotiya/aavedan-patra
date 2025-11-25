"use client"
import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { certificatesCategory } from "@/data/categoryData";

export default function Page() {
  return <DynamicCategoryPage category={certificatesCategory} />;
}
