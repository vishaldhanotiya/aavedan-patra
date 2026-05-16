import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { schoolAdmissionTemplate } from "@/data/admissionTemplate/schoolAdmissionTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title: "स्कूल प्रवेश आवेदन पत्र – School Admission Application Hindi",
  description:
    "बच्चे के School Admission के लिए हिंदी आवेदन पत्र। नर्सरी से 12वीं तक – तैयार नमूना, सही फॉर्मेट और स्कूल प्रवेश आवेदन लिखने की गाइड।",
  path: "/applications/application-for-school-admission",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={schoolAdmissionTemplate} />
    </>
  );
}
