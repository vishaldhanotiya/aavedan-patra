import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { urgentLeaveApplicationTemplate } from "@/data/leaveTemplate/urgentLeaveApplicationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "तत्काल अवकाश के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "तत्काल अवकाश के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर आपातकालीन या अचानक परिस्थितियों में ऑफिस या स्कूल से तुरंत छुट्टी लेने के लिए सही आवेदन पत्र का प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे आपका आवेदन जल्दी और सही तरीके से स्वीकार हो सके।",
  path: "/applications/application-for-urgent-leave",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={urgentLeaveApplicationTemplate} />
    </>
  );
}
