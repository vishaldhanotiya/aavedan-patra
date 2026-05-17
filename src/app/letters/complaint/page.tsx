import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import { complaintLetters } from "@/data/subcategories";
import { createMetadata } from "@/metadata/metadata";

export const metadata = createMetadata({
  title: "शिकायत पत्र – बैंक, ऑनलाइन शॉपिंग, सेवा प्रारूप",
  description:
    "बैंक, बिजली, ऑनलाइन शॉपिंग, पड़ोसी शिकायत पत्र के प्रभावी हिंदी प्रारूप व उदाहरण। तैयार नमूने डाउनलोड करें।",
  path: "/letters/complaint",
  type: "website",
});

export default async function Page() {
  return <UniversalSubcategoryPage data={complaintLetters} />;
}
