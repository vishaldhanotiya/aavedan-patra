import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { meetingRequestTemplate } from "@/data/requestTemplate/meetingRequestTemplate";
export const metadata = {
  title: "बैठक हेतु अनुरोध पत्र | आवेदन पत्र",
  description:
    "बैठक हेतु अनुरोध पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर अपॉइंटमेंट या चर्चा के लिए प्रोफेशनल तरीके से बैठक माँगने का सही पत्र प्रारूप, तैयार नमूने और लिखने के आसान सुझाव दिए गए हैं, जिससे आपका अनुरोध स्पष्ट, विनम्र और प्रभावी बने।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={meetingRequestTemplate}
      />
    </>
  );
}
