import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { managerHrOperationsSalesTemplate } from "@/data/jobTemplate/managerHrOperationsSalesTemplate";
export const metadata = {
  title: "मैनेजर पद के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "मैनेजर स्तर की नौकरी के लिए प्रोफेशनल आवेदन पत्र का सही प्रारूप यहाँ देखें।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={managerHrOperationsSalesTemplate}
      />
    </>
  );
}
