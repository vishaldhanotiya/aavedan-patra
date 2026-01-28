import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { professionalResignationTemplate } from "@/data/resignationTemplate/professionalResignationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "प्रोफेशनल त्यागपत्र | आवेदन पत्र",
  description:
    "प्रोफेशनल त्यागपत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर ऑफिस या कंपनी से नौकरी छोड़ने के लिए औपचारिक और प्रोफेशनल भाषा में लिखे गए त्यागपत्र के सही प्रारूप, तैयार नमूने, नोटिस पीरियड से जुड़ी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे आप सम्मानजनक और सही तरीके से त्यागपत्र दे सकें।",
  path: "/letters/professional-resignation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={professionalResignationTemplate} />
    </>
  );
}
