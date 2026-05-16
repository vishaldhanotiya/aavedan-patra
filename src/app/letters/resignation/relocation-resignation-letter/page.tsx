import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { relocationResignationTemplate } from "@/data/resignationTemplate/relocationResignationTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:
    "स्थानांतरण त्यागपत्र – दूसरे शहर जाने पर",
  description:
    "दूसरे शहर/देश स्थानांतरण के कारण नौकरी छोड़ने पर त्यागपत्र प्रारूप। नए पते और तारीख का उल्लेख करें।",
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
