import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { relocationResignationTemplate } from "@/data/resignationTemplate/relocationResignationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "रिलोकेशन इस्तीफा पत्र – Relocation Resignation Letter Hindi | AavedanPatra",
  description:
    "शहर/स्थान बदलने के कारण नौकरी छोड़ने का पत्र। Relocation Resignation Letter – तैयार हिंदी नमूना और प्रोफेशनल फॉर्मेट।",
  path: "/letters/resignation/relocation-resignation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={relocationResignationTemplate}
      />
    </>
  );
}
