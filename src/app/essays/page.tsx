import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { essaysCategory } from "@/data/category/essaysCategory";

export default function Page() {
  
  return <DynamicCategoryPage category={essaysCategory} /> ;
}
