import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { careerChangeResignationTemplate } from "@/data/resignationTemplate/careerChangeResignationTemplate";
export const metadata = {
  title: "करियर परिवर्तन हेतु इस्तीफा पत्र | आवेदन पत्र",
  description:
    "करियर परिवर्तन के लिए इस्तीफा पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर नई नौकरी या करियर बदलने के उद्देश्य से इस्तीफा देने के लिए विनम्र और प्रोफेशनल इस्तीफा पत्र का सही प्रारूप, तैयार नमूना पत्र और लिखने के आसान सुझाव दिए गए हैं, जिससे आप अच्छे संबंध बनाए रखते हुए सही तरीके से इस्तीफा दे सकें।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={careerChangeResignationTemplate}
      />
    </>
  );
}
