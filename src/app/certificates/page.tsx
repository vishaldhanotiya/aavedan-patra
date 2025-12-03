import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { certificatesCategory } from "@/data/category/certificatesCategory";

export default function Page() {
 const {language}= useLanguage()
  return <DynamicCategoryPage category={certificatesCategory} language={language}/>;
}
