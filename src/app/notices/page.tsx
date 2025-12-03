import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { noticesCategory } from "@/data/category/noticesCategory";

export default function Page() {
   const {language}= useLanguage()
  
  return <DynamicCategoryPage category={noticesCategory}  language={language}/>;
}
