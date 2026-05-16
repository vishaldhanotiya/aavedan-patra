import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { viralInfectionLeave } from "@/data/leaveTemplate/viralInfectionLeave";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:
    "वायरल फीवर छुट्टी आवेदन – बुखार के लिए पत्र",
  description:"वायरल बुखार, डेंगू, मलेरिया या तेज बुखार के कारण 2-7 दिन की छुट्टी के लिए आवेदन प्रारूप। डॉक्टर पर्ची शामिल करें।",
  path: "/applications/leave/viral-fever-leave-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={viralInfectionLeave} />
    </>
  );
}
