import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { needBasedScholarshipTemplate } from "@/data/scholarshipTemplate/needBasedScholarshipTemplate";
export const metadata = {
  title: "आवश्यकता आधारित छात्रवृत्ति के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "आर्थिक सहायता या आवश्यकता आधारित छात्रवृत्ति के लिए छात्रों का आवेदन पत्र प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={needBasedScholarshipTemplate}
      />
    </>
  );
}
