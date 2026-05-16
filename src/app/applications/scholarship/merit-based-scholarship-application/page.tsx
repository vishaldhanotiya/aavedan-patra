import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { meritScholarshipTemplate } from "@/data/scholarshipTemplate/meritScholarshipTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "मेरिट छात्रवृत्ति आवेदन – Merit Scholarship Hindi",
  description:
    "उच्च अंक और शैक्षणिक प्रदर्शन पर मेरिट स्कॉलरशिप हेतु हिंदी आवेदन। मार्कशीट, सिफारिश पत्र सूची और तैयार नमूना – आवेदन गाइड सहित।",
  path: "/applications/scholarship/merit-based-scholarship-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={meritScholarshipTemplate}
      />
    </>
  );
}
