import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { readmissionTemplate } from "@/data/admissionTemplate/readmissionTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "पुनः प्रवेश आवेदन पत्र – Readmission Application Hindi | AavedanPatra",
  description:
    "स्कूल/कॉलेज में दोबारा एडमिशन के लिए Readmission Application। हिंदी प्रारूप – तैयार नमूना, सही फॉर्मेट और पुनः प्रवेश आवेदन गाइड।",
  path: "/applications/application-for-readmission",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={readmissionTemplate} />
    </>
  );
}
