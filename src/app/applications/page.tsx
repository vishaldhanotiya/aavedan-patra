import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { applicationsCategory } from "@/data/category/applicationsCategory";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "आवेदन पत्र के सभी प्रकार – नौकरी, लोन, प्रवेश, छुट्टी | AavedanPatra",
  description:
    "नौकरी, छुट्टी, लोन, एडमिशन, स्कॉलरशिप और प्रमाण पत्र हेतु 100+ तैयार हिंदी आवेदन पत्र प्रारूप। सभी प्रकार के नमूने एक जगह – अभी देखें।",
  path: "/applications",
});
export default function Page() {
  return <DynamicCategoryPage category={applicationsCategory} />;
}
