import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import { requestLetters } from "@/data/subcategories";
import { createMetadata } from "@/metadata/metadata";

export const metadata = createMetadata({
  title: "अनुरोध पत्र – स्कूल, ऑफिस, सरकारी कार्य प्रारूप",
  description:
    "छुट्टी, प्रमाणपत्र, स्थानांतरण के लिए अनुरोध पत्र के प्रोफेशनल हिंदी प्रारूप। स्कूल-ऑफिस सभी नमूने।",
  path: "/letters/request",
  type: "website",
});

export default async function Page() {
  return <UniversalSubcategoryPage data={requestLetters} />;
}
