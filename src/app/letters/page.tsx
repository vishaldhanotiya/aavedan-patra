import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { lettersCategory } from "@/data/category/lettersCategory";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "त्यागपत्र, निमंत्रण, शिकायत पत्र – हिंदी प्रारूप व नमूने | आवेदन पत्र",
  description:
    "नौकरी त्यागपत्र, जन्मदिन निमंत्रण, शिकायत और अनुरोध पत्र के तैयार हिंदी प्रारूप डाउनलोड करें। स्कूल, ऑफिस सभी के लिए।",
  path: "/letters",
});
export default function Page() {
  return <DynamicCategoryPage category={lettersCategory} />;
}
