import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { lettersCategory } from "@/data/category/lettersCategory";

export default function Page() {
   const {language}= useLanguage()
  
  return <DynamicCategoryPage category={lettersCategory} language={language} />;
}
