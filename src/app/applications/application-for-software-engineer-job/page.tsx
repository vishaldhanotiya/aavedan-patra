import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { softwareJobApplicationTemplate } from "@/data/jobTemplate/softwareJobApplicationTemplate";
export const metadata = {
  title: "सॉफ्टवेयर इंजीनियर नौकरी के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "सॉफ्टवेयर इंजीनियर पद के लिए प्रोफेशनल नौकरी आवेदन पत्र का प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={softwareJobApplicationTemplate}
      />
    </>
  );
}
