import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { vacationLeaveApplicationTemplate } from "@/data/leaveTemplate/vacationLeaveApplicationTemplate";
export const metadata = {
  title: "वेकशन लीव के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "वेकशन लीव के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर ऑफिस या स्कूल में छुट्टियों के दौरान अवकाश लेने के लिए सही आवेदन पत्र का प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे आप अपना वेकेशन लीव आवेदन सही और आसानी से कर सकें।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={vacationLeaveApplicationTemplate}
      />
    </>
  );
}
