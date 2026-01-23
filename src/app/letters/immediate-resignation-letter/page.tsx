import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { immediateResignationTemplate } from "@/data/resignationTemplate/immediateResignationTemplate";
export const metadata = {
  title: "तत्काल इस्तीफा पत्र | आवेदन पत्र",
  description:
    "तत्काल इस्तीफा पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर अचानक या आपात स्थिति में तुरंत नौकरी छोड़ने के लिए सरल, स्पष्ट और प्रोफेशनल इस्तीफा पत्र का सही प्रारूप, तैयार नमूना पत्र और लिखने के आसान सुझाव दिए गए हैं, जिससे आप बिना किसी भ्रम के सही तरीके से इस्तीफा दे सकें।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={immediateResignationTemplate}
      />
    </>
  );
}
