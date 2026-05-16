import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { schoolAdmission } from "@/data/admissionTemplate/schoolAdmission/schoolAdmission";
import {  } from "@/metadata/metadata";
export const metadata = ({
  title:
    "स्कूल प्रवेश आवेदन – प्रिंसिपल को पत्र",
  description:
    "बच्चे का स्कूल में दाखिला कराने के लिए प्रिंसिपल को लिखा जाने वाला आवेदन पत्र। विद्यार्थी विवरण, जन्म प्रमाण पत्र, ट्रांसफर सर्टिफिकेट की जानकारी।",
  path: "/applications/admission/school-admission-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={schoolAdmission} />
    </>
  );
}
