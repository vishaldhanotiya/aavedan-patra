import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import { jobCategory } from "@/data/category/jobCategory";
import { createMetadata} from "@/metadata/metadata";

export const metadata = createMetadata({
 title: "नौकरी आवेदन पत्र हिंदी में – Job Application Format - AavedanPatra",
    description:
      "सरकारी व प्राइवेट नौकरी के लिए तैयार हिंदी आवेदन पत्र। टीचर, बैंक, सॉफ्टवेयर, मैनेजर सहित 10+ पदों के प्रारूप और नमूने – अभी देखें।",
  
  path: "/applications/job",
  type: "website",
});

export default async function Page() {
  return <UniversalSubcategoryPage data={jobCategory} />;
}
