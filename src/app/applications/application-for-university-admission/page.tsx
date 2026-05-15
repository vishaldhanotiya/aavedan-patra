import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { universityAdmissionTemplate } from "@/data/admissionTemplate/universityAdmissionTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:  "विश्वविद्यालय प्रवेश आवेदन – University Admission Application Hindi | AavedanPatra",    
  description:
    "University Admission के लिए हिंदी आवेदन पत्र। स्नातक/परास्नातक हेतु तैयार नमूना, सही फॉर्मेट और विश्वविद्यालय प्रवेश आवेदन",
  path: "/applications/application-for-university-admission",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={universityAdmissionTemplate} />
    </>
  );
}
