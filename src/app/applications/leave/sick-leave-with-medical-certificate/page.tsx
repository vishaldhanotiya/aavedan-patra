import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sickLeaveMedicalCertificate } from "@/data/leaveTemplate/sickLeavewithMedical";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "मेडिकल सर्टिफिकेट सहित छुट्टी आवेदन – Sick Leave with Medical Certificate Hindi",
  description:
    "मेडिकल सर्टिफिकेट के साथ बीमारी छुट्टी आवेदन पत्र। ऑफिस और स्कूल दोनों के लिए तैयार हिंदी नमूना, सही फॉर्मेट और लिखने की गाइड।",
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
