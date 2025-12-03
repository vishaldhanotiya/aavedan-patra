import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { resumesCategory } from "@/data/category/resumesCategory";

export default function Page() {
   const {language}= useLanguage()
  
  return <DynamicCategoryPage category={resumesCategory} language={language}/> ;
}
