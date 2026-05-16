import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { careerChangeResignationTemplate } from "@/data/resignationTemplate/careerChangeResignationTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:
    "करियर बदलने पर त्यागपत्र – नए क्षेत्र में जाने हेतु",
  description:
    "नई नौकरी या करियर बदलने के लिए विनम्र इस्तीफा पत्र। Career Change Resignation Letter – तैयार हिंदी नमूना और प्रोफेशनल गाइड।",
  path: "/letters/resignation/career-change-resignation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={careerChangeResignationTemplate}
      />
    </>
  );
}
