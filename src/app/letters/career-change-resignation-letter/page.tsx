import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { careerChangeResignationTemplate } from "@/data/resignationTemplate/careerChangeResignationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "करियर परिवर्तन हेतु त्यागपत्र | आवेदन पत्र",
  description:
    "करियर परिवर्तन के लिए त्यागपत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर नई नौकरी या करियर बदलने के उद्देश्य से त्यागपत्र देने के लिए विनम्र और प्रोफेशनल त्यागपत्र पत्र का सही प्रारूप, तैयार नमूना पत्र और लिखने के आसान सुझाव दिए गए हैं, जिससे आप अच्छे संबंध बनाए रखते हुए सही तरीके से त्यागपत्र दे सकें।",
  path: "/letters/career-change-resignation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={careerChangeResignationTemplate} />
    </>
  );
}
