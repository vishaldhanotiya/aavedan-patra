import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { researchGrantTemplate } from "@/data/scholarshipTemplate/researchGrantTemplate";
export const metadata = {
  title: "रिसर्च ग्रांट के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "शैक्षणिक या वैज्ञानिक परियोजनाओं के लिए प्रोफेशनल रिसर्च ग्रांट आवेदन पत्र।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={researchGrantTemplate}
      />
    </>
  );
}
