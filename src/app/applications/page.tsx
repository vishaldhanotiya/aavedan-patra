"use client";
import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { applicationsCategory } from "@/data/category/applicationsCategory";

export default function Page() {
  return <DynamicCategoryPage category={applicationsCategory} />;
}
