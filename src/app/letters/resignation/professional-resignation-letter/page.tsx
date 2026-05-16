import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { professionalResignationTemplate } from "@/data/resignationTemplate/professionalResignationTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:
    "पेशेवर त्यागपत्र – मानक नोटिस पीरियड के साथ",
  description:
    "2 सप्ताह/1 महीने के नोटिस के साथ नौकरी छोड़ने के लिए मानक, पेशेवर त्यागपत्र प्रारूप। सभी कार्यस्थलों के लिए उपयुक्त।",
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
