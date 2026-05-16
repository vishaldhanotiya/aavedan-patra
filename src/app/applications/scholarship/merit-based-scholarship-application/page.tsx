import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { meritScholarshipTemplate } from "@/data/scholarshipTemplate/meritScholarshipTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "मेरिट छात्रवृत्ति आवेदन – उच्च अंक वाले छात्रों के लिए",
  description:
    "परीक्षा में उच्च अंक (प्रथम/द्वितीय स्थान) प्राप्त करने वाले छात्रों के लिए मेरिट छात्रवृत्ति आवेदन प्रारूप। अंक तालिका और प्रमाण पत्र संलग्न करें।",
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
