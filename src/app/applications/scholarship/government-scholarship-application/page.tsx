import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { governmentScholarshipTemplate } from "@/data/scholarshipTemplate/governmentScholarshipTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "सरकारी छात्रवृत्ति आवेदन – Government Scholarship Application Hindi | AavedanPatra",
  description:
    "केंद्र/राज्य सरकार की Government Scholarship के लिए हिंदी आवेदन पत्र। तैयार नमूना, ज़रूरी दस्तावेज़ सूची और सरकारी छात्रवृत्ति आवेदन गाइड।",
  path: "/applications/scholarship/government-scholarship-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={governmentScholarshipTemplate}
      />
    </>
  );
}
