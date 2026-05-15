import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { courseAdmission } from "@/data/admissionTemplate/courseAdmission/courseAdmission";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "कोर्स प्रवेश आवेदन पत्र – Course Admission Application Hindi | AavedanPatra",
  description:
    "किसी भी कोर्स या प्रशिक्षण में एडमिशन के लिए हिंदी आवेदन पत्र। तैयार नमूना, सही फॉर्मेट और Course Admission Application लिखने की गाइड।",
  path: "/applications/admission/course-admission-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={courseAdmission} />
    </>
  );
}
