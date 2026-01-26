import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { applicationsCategory } from "@/data/category/applicationsCategory";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "आवेदन पत्र (Applications) | आवेदन पत्र",
  description:
    "नौकरी, अवकाश, ऋण, प्रवेश और अन्य सभी प्रकार के औपचारिक आवेदन पत्रों के सरल प्रारूप और उदाहरण देखें।",
  path: "/applications",
});
export default function Page() {
  return <DynamicCategoryPage category={applicationsCategory} />;
}
