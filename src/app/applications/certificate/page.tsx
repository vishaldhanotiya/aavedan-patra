import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import { certificateRequest } from "@/data/subcategories/certificateRequest";
import { createMetadata } from "@/metadata/metadata";

export const metadata = createMetadata({
  title:
    "प्रमाणपत्र आवेदन – बोनाफाइड, कैरेक्टर, आय, एक्सपीरियंस - AavedanPatra",
  description:
    "बोनाफाइड, चरित्र, जाति, आय और ट्रांसफर सर्टिफिकेट के लिए हिंदी आवेदन पत्र। सही प्रारूप, तैयार नमूने – अभी डाउनलोड करें।",
  path: "/applications/job",
  type: "website",
});

export default async function Page() {
  return <UniversalSubcategoryPage data={certificateRequest} />;
}
