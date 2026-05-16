import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { retirementResignationTemplate } from "@/data/resignationTemplate/retirementResignationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "सेवानिवृत्ति इस्तीफा पत्र – Retirement Resignation Letter Hindi",
  description:
    "सेवानिवृत्ति पर नौकरी छोड़ने का औपचारिक पत्र। Retirement Resignation Letter – तैयार हिंदी नमूना, सही फॉर्मेट और लिखने की गाइड।",
  path: "/letters/resignation/retirement-resignation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={retirementResignationTemplate}
      />
    </>
  );
}
