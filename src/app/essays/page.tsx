import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { essaysCategory } from "@/data/category/essaysCategory";

export default function Page() {
   const {language}= useLanguage()
  
  return <DynamicCategoryPage category={essaysCategory} language={language}/> ;
}
