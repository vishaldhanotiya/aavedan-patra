import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { immediateResignationTemplate } from "@/data/resignationTemplate/immediateResignationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "तत्काल त्यागपत्र | आवेदन पत्र",
  description:
    "तत्काल त्यागपत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर अचानक या आपात स्थिति में तुरंत नौकरी छोड़ने के लिए सरल, स्पष्ट और प्रोफेशनल त्यागपत्र का सही प्रारूप, तैयार नमूना पत्र और लिखने के आसान सुझाव दिए गए हैं, जिससे आप बिना किसी भ्रम के सही तरीके से त्यागपत्र दे सकें।",
  path: "/letters/immediate-resignation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={immediateResignationTemplate} />
    </>
  );
}
