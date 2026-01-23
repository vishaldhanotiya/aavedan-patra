import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { recommendationRequestTemplate } from "@/data/requestTemplate/recommendationRequestTemplate";
export const metadata = {
  title: "सिफारिश पत्र हेतु अनुरोध | आवेदन पत्र",
  description:
    "सिफारिश पत्र हेतु अनुरोध कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर शिक्षक, प्रबंधक या वरिष्ठ अधिकारी से विनम्र तरीके से सिफारिश पत्र माँगने के लिए सही आवेदन पत्र का प्रारूप, तैयार टेम्पलेट, उपयोगी उदाहरण और लिखने के आसान सुझाव दिए गए हैं, जिससे आपका अनुरोध सम्मानजनक और प्रभावी बने।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={recommendationRequestTemplate}
      />
    </>
  );
}
