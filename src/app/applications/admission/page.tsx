import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import { admissionApplications } from "@/data/subcategories";
import { createMetadata } from "@/metadata/metadata";

export const metadata = createMetadata({
  title: "प्रवेश आवेदन पत्र – स्कूल, कॉलेज, कोर्स में दाखिला - AavedanPatra",
  description:
    "स्कूल, कॉलेज और कोर्स प्रवेश के लिए तैयार हिंदी आवेदन पत्र। सही फॉर्मेट, नमूने और एडमिशन लेटर लिखने की पूरी गाइड।",
  path: "/applications/admission",
  type: "website",
});

export default async function Page() {
  return <UniversalSubcategoryPage data={admissionApplications} />;
}
