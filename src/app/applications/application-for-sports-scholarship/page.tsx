import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sportsScholarshipTemplate } from "@/data/scholarshipTemplate/sportsScholarshipTemplate";
export const metadata = {
  title: "स्पोर्ट्स स्कॉलरशिप के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "खेल छात्रवृत्ति के लिए स्पष्ट और प्रभावी आवेदन पत्र लेखन प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={sportsScholarshipTemplate}
      />
    </>
  );
}
