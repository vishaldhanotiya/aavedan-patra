import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { professionalResignationTemplate } from "@/data/resignationTemplate/professionalResignationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "प्रोफेशनल इस्तीफा पत्र – Professional Resignation Letter Hindi | AavedanPatra",
  description:
    "नोटिस पीरियड के साथ औपचारिक नौकरी छोड़ने का पत्र। Professional Resignation Letter – तैयार हिंदी नमूना, फॉर्मेट और लिखने की गाइड।",
  path: "/letters/resignation/professional-resignation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={professionalResignationTemplate}
      />
    </>
  );
}
