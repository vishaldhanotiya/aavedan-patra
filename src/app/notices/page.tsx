"use client";
import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { noticesCategory } from "@/data/categoryData";

export default async function Page() {
  return <DynamicCategoryPage category={noticesCategory} />;
}
