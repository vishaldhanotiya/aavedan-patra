import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { urgentLeaveApplicationTemplate } from "@/data/leaveTemplate/urgentLeaveApplicationTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title: "तत्काल अवकाश पत्र  – Urgent Leave Application Hindi - आवेदन पत्र",
  description:
    "आपात/तत्काल परिस्थिति में Urgent Leave Application। ऑफिस/स्कूल के लिए हिंदी प्रारूप – तैयार नमूना और जल्दी स्वीकृति पाने की गाइड।",
  path: "/applications/application-for-urgent-leave",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={urgentLeaveApplicationTemplate} />
    </>
  );
}
