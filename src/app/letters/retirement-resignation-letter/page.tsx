import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { retirementResignationTemplate } from "@/data/resignationTemplate/retirementResignationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "सेवानिवृत्ति त्यागपत्र | आवेदन पत्र",
  description:
    "स्थानांतरण हेतु अनुरोध पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर ऑफिस या कंपनी में ट्रांसफर या रीलोकेशन के लिए अनुरोध करने का सही आवेदन पत्र प्रारूप, तैयार नमूने, जरूरी जानकारी और लिखने के प्रोफेशनल सुझाव दिए गए हैं, जिससे आपका स्थानांतरण अनुरोध स्पष्ट और प्रभावी बने।",
  path: "/letters/retirement-resignation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={retirementResignationTemplate} />
    </>
  );
}
