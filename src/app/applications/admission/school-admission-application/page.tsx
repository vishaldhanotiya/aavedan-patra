import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { schoolAdmission } from "@/data/admissionTemplate/schoolAdmission/schoolAdmission";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "स्कूल प्रवेश आवेदन पत्र – School Admission Application Hindi",
  description:
    "बच्चे के स्कूल एडमिशन के लिए हिंदी आवेदन पत्र। नर्सरी से 12वीं तक के लिए तैयार नमूना, सही फॉर्मेट और प्रवेश आवेदन लिखने की गाइड।",
  path: "/applications/admission/school-admission-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={schoolAdmission} />
    </>
  );
}
