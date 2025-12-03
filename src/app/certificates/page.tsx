import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { certificatesCategory } from "@/data/category/certificatesCategory";

export default function Page() {
  return <DynamicCategoryPage category={certificatesCategory}/>;
}
