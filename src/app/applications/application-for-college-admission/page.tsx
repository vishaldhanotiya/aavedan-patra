import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { collegeAdmissionTemplate } from "@/data/admissionTemplate/collegeAdmissionTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "कॉलेज एडमिशन आवेदन पत्र – College Admission Application Hindi | AavedanPatra",
  description:
   "ग्रेजुएशन/पोस्टग्रेजुएशन College Admission के लिए हिंदी आवेदन पत्र। तैयार नमूना, सही फॉर्मेट और कॉलेज प्रवेश आवेदन लिखने की पूरी गाइड।",
  path: "/applications/application-for-college-admission",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={collegeAdmissionTemplate} />
    </>
  );
}
