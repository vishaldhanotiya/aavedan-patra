import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { shortNoticeResignationTemplate } from "@/data/resignationTemplate/shortNoticeResignationTemplate";
export const metadata = {
  title: "शॉर्ट नोटिस इस्तीफा पत्र | आवेदन पत्र",
  description:
    "शॉर्ट नोटिस इस्तीफा पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर अचानक या विशेष परिस्थितियों में कम नोटिस अवधि के साथ नौकरी छोड़ने के लिए प्रोफेशनल शॉर्ट नोटिस इस्तीफा पत्र का सही प्रारूप, तैयार उदाहरण और लिखने के आसान सुझाव दिए गए हैं, जिससे आप सम्मानजनक तरीके से इस्तीफा दे सकें।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={shortNoticeResignationTemplate}
      />
    </>
  );
}
