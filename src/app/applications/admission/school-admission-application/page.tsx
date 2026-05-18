import { PillarTemplatePage } from "@/components/PillarTemplatePage";
import { schoolAdmission } from "@/data/admissionTemplate/schoolAdmission/schoolAdmission";
import { createMetadata } from "@/metadata/metadata";
const path = "/applications/admission/school-admission-application";
export const metadata = createMetadata ({
  title:
    "स्कूल प्रवेश आवेदन – प्रिंसिपल को पत्र",
  description:
    "बच्चे का स्कूल में दाखिला कराने के लिए प्रिंसिपल को लिखा जाने वाला आवेदन पत्र। विद्यार्थी विवरण, जन्म प्रमाण पत्र, ट्रांसफर सर्टिफिकेट की जानकारी।",
  path,
});
export default function Page() {
  return <PillarTemplatePage path={path} data={schoolAdmission} singleTemplate />;
}
