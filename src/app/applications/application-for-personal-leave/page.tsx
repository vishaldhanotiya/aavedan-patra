import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { personalLeaveApplicationTemplate } from "@/data/leaveTemplate/personalLeaveApplicationTemplate";
export const metadata = {
  title: "पर्सनल लीव के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "पर्सनल लीव के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर ऑफिस या स्कूल में व्यक्तिगत कारणों से अवकाश लेने के लिए सही आवेदन पत्र का प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे आप बिना किसी परेशानी के सही आवेदन कर सकें।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={personalLeaveApplicationTemplate}
      />
    </>
  );
}
