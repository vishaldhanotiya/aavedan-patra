import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { governmentScholarshipTemplate } from "@/data/scholarshipTemplate/governmentScholarshipTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title: "सरकारी छात्रवृत्ति आवेदन – Government Scholarship Application Hindi",
  description:
    "सरकारी छात्रवृत्ति योजनाओं के लिए हिंदी आवेदन पत्र। Government Scholarship Application – तैयार नमूना, दस्तावेज़ सूची और लिखने की गाइड।",
  path: "/applications/application-for-government-scholarship",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={governmentScholarshipTemplate} />
    </>
  );
}
