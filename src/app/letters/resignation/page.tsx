import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import { resignationLetters } from "@/data/subcategories";
import { createMetadata } from "@/metadata/metadata";

export const metadata = createMetadata({
  title: "त्यागपत्र – नौकरी, स्कूल छोड़ने के हिंदी प्रारूप",
  description:
    "टीचर, क्लर्क, मैनेजर त्यागपत्र के सही हिंदी प्रारूप। 2 सप्ताह नोटिस, तत्काल रिजाइनेशन सभी नमूने।",
  path: `/letters/resignation`,
});

export default async function Page() {
  return <UniversalSubcategoryPage data={resignationLetters} />;
}
