import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { meritScholarshipTemplate } from "@/data/scholarshipTemplate/meritScholarshipTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:  "मेरिट छात्रवृत्ति आवेदन – Merit Scholarship Application Hindi",
  description:
   "शैक्षणिक उत्कृष्टता पर आधारित Merit Scholarship Application। हिंदी आवेदन पत्र – तैयार नमूना, दस्तावेज़ सूची और मेरिट स्कॉलरशिप लिखने की गाइड।", 
  path: "/applications/application-for-merit-scholarship",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={meritScholarshipTemplate} />
    </>
  );
}
