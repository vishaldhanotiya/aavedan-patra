import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { noticesCategory } from "@/data/category/noticesCategory";

export default function Page() {
  
  return <DynamicCategoryPage category={noticesCategory} />;
}
