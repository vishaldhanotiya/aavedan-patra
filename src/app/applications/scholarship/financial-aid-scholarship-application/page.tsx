import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { needBasedScholarshipTemplate } from "@/data/scholarshipTemplate/needBasedScholarshipTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "वित्तीय सहायता छात्रवृत्ति – आय प्रमाण पत्र संलग्न करें",
  description:
    "आर्थिक रूप से कमजोर वर्ग के छात्रों के लिए छात्रवृत्ति आवेदन प्रारूप। पारिवारिक आय और ट्यूशन फीस विवरण सहित।",
  path: "/applications/scholarship/financial-aid-scholarship-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={needBasedScholarshipTemplate}
      />
    </>
  );
}
