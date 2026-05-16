import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { courseAdmissionTemplate } from "@/data/admissionTemplate/courseAdmissionTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title: "कोर्स प्रवेश आवेदन पत्र – Course Admission Application Hindi",
  description:
   "किसी भी कोर्स या प्रशिक्षण में एडमिशन के लिए हिंदी आवेदन पत्र। तैयार नमूना, सही फॉर्मेट और Course Admission Application लिखने की गाइड।",
  path: "/applications/application-for-course-admission",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={courseAdmissionTemplate} />
    </>
  );
}
