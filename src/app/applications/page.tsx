import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { applicationsCategory } from "@/data/category/applicationsCategory";
export const metadata = {
  title: "Applications | Aavedan Patra",
  description: "Explore all types of formal application letters with simple formats and ready-made examples.",
};
export default function Page() {
  return <DynamicCategoryPage category={applicationsCategory}/>;
}
