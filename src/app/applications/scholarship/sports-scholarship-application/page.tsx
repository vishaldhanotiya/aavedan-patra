import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sportsScholarshipTemplate } from "@/data/scholarshipTemplate/sportsScholarshipTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:
    "खेल छात्रवृत्ति आवेदन – राष्ट्रीय/राज्य स्तरीय खिलाड़ी",
  description:
    "राज्य या राष्ट्रीय स्तर पर पदक विजेता खिलाड़ियों के लिए खेल छात्रवृत्ति आवेदन प्रारूप। उपलब्धियों के प्रमाण पत्र संलग्न करें।",
  path: "/applications/scholarship/sports-scholarship-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={sportsScholarshipTemplate}
      />
    </>
  );
}
