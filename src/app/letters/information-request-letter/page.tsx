import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { informationRequestTemplate } from "@/data/requestTemplate/informationRequestTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "जानकारी हेतु अनुरोध पत्र | आवेदन पत्र",
  description:
    "जानकारी हेतु अनुरोध पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर स्कूल, कार्यालय और अन्य आधिकारिक कार्यों के लिए विनम्र तरीके से जानकारी माँगने का सही पत्र प्रारूप, तैयार नमूने और लिखने के आसान सुझाव दिए गए हैं, जिससे आपका अनुरोध स्पष्ट और प्रभावी बने।",
  path: "/letters/information-request-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={informationRequestTemplate} />
    </>
  );
}
