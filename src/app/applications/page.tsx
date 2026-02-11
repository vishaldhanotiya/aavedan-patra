import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { applicationsCategory } from "@/data/category/applicationsCategory";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "नौकरी, अवकाश, ऋण और प्रवेश हेतु आवेदन पत्र के नमूने | आवेदन पत्र",
  description:
    "नौकरी, अवकाश, ऋण, स्कूल प्रवेश, बैंक और सरकारी कार्यों के लिए सभी प्रकार के आवेदन पत्रों के सही प्रारूप, नमूने, उदाहरण और लिखने का तरीका यहाँ देखें।",
  path: "/applications",
});
export default function Page() {
  return <DynamicCategoryPage category={applicationsCategory} />;
}
