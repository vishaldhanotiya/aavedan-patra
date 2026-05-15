import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { collegeAdmission } from "@/data/admissionTemplate/collegeAdmission/collegeAdmission";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "कॉलेज एडमिशन आवेदन पत्र – College Admission Application Hindi | AavedanPatra",
  description:
    "ग्रेजुएशन/पोस्टग्रेजुएशन College Admission के लिए हिंदी आवेदन पत्र। तैयार नमूना, सही फॉर्मेट और कॉलेज प्रवेश आवेदन लिखने की पूरी गाइड।",
  path: "/applications/admission/college-admission-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={collegeAdmission} />
    </>
  );
}
