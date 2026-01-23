import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { officeAssistantApplicationTemplate } from "@/data/jobTemplate/officeAssistantApplicationTemplate";
export const metadata = {
  title: "ऑफिस असिस्टेंट नौकरी के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "ऑफिस असिस्टेंट पद के लिए सरल और प्रोफेशनल आवेदन पत्र का प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={officeAssistantApplicationTemplate}
      />
    </>
  );
}
