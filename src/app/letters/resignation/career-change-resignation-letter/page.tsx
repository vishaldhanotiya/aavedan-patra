import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { careerChangeResignationTemplate } from "@/data/resignationTemplate/careerChangeResignationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "करियर चेंज इस्तीफा पत्र – Career Change Resignation Letter Hindi | AavedanPatra",
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
