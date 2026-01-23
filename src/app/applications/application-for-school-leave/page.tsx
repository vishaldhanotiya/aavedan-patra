import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { schoolStudentLeaveApplicationTemplate } from "@/data/leaveTemplate/schoolStudentLeaveApplicationTemplate";
export const metadata = {
  title: "स्कूल अवकाश के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "स्कूल अवकाश के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर छात्रों के लिए स्कूल में छुट्टी लेने हेतु सही आवेदन पत्र का प्रारूप, तैयार नमूना आवेदन पत्र, एक दिन या कई दिनों की छुट्टी के उदाहरण और लिखने के आसान सुझाव दिए गए हैं, जिससे आवेदन सही और आसानी से स्वीकार हो सके।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={schoolStudentLeaveApplicationTemplate}
      />
    </>
  );
}
