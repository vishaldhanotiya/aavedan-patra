import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { professionalResignationTemplate } from "@/data/resignationTemplate/professionalResignationTemplate";
export const metadata = {
  title: "प्रोफेशनल इस्तीफा पत्र | आवेदन पत्र",
  description:
    "प्रोफेशनल इस्तीफा पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर ऑफिस या कंपनी से नौकरी छोड़ने के लिए औपचारिक और प्रोफेशनल भाषा में लिखे गए इस्तीफा पत्र के सही प्रारूप, तैयार नमूने, नोटिस पीरियड से जुड़ी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे आप सम्मानजनक और सही तरीके से इस्तीफा दे सकें।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={professionalResignationTemplate}
      />
    </>
  );
}
