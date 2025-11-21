"use client"
import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { applicationsCategory } from "@/data/categoryData";

export default async function Page() {
  return <DynamicCategoryPage category={applicationsCategory} />;
}
