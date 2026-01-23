import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { lettersCategory } from "@/data/category/lettersCategory";
export const metadata = {
  title: "विभिन्न प्रकार के पत्र | आवेदन पत्र",
  description:
    "औपचारिक और अनौपचारिक पत्रों के विभिन्न प्रकार यहाँ देखें, सरल उदाहरणों और आसान प्रारूप के साथ।",
};

export default function Page() {
  
  return <DynamicCategoryPage category={lettersCategory}  />;
}
