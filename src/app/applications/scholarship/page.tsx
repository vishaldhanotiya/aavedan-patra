import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import { certificateRequest } from "@/data/subcategories/certificateRequest";
import { createMetadata } from "@/metadata/metadata";

export const metadata = createMetadata({
  title:
    "छात्रवृत्ति आवेदन पत्र – मेरिट, सरकारी, खेल छात्रवृत्ति - AavedanPatra",
  description:
    "सरकारी, मेरिट, ज़रूरत-आधारित और खेल छात्रवृत्ति के लिए हिंदी आवेदन पत्र। तैयार नमूने, दस्तावेज़ सूची और लिखने के टिप्स।",
  path: "/applications/job",
  type: "website",
});

export default async function Page() {
  return <UniversalSubcategoryPage data={certificateRequest} />;
}
