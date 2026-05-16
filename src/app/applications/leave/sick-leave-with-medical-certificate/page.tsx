import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sickLeaveMedicalCertificate } from "@/data/leaveTemplate/sickLeavewithMedical";
import {  } from "@/metadata/metadata";
export const metadata = ({
  title:
    "बीमारी छुट्टी आवेदन – मेडिकल सर्टिफिकेट के साथ",
  description:
    "मेडिकल सर्टिफिकेट संलग्न करने वाले बीमारी छुट्टी आवेदन पत्र का प्रारूप। लंबी बीमारी या अस्पताल में भर्ती होने पर उपयोगी।",
  path: "/applications/leave/sick-leave-with-medical-certificate",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={sickLeaveMedicalCertificate}
      />
    </>
  );
}
