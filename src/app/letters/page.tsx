import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { lettersCategory } from "@/data/category/lettersCategory";
export const metadata = {
  title: "Different Types of Letters | Aavedan Patra",
  description: "Explore various formal and informal letter types with simple examples and easy-to-follow formats.",

};
export default function Page() {
  
  return <DynamicCategoryPage category={lettersCategory}  />;
}
