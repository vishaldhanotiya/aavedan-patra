import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { applicationsCategory } from "@/data/category/applicationsCategory";
export const metadata = {
  title: "Applications | Aavedan Patra",
  description: "Learn more about our aavedan patra",
};
export default function Page() {
  return <DynamicCategoryPage category={applicationsCategory}/>;
}
