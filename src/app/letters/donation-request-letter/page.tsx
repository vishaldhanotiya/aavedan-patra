import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { donationRequestTemplate } from "@/data/requestTemplate/donationRequestTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "दान हेतु अनुरोध पत्र | आवेदन पत्र",
  description:
    "दान हेतु अनुरोध पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर चैरिटी, एनजीओ, सामाजिक कार्य और फंडरेज़िंग के लिए दान माँगने का सही पत्र प्रारूप, तैयार नमूने और लिखने के आसान व विनम्र सुझाव दिए गए हैं, जिससे आपका अनुरोध प्रभावी और भरोसेमंद बने।",
  path: "/letters/donation-request-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={donationRequestTemplate} />
    </>
  );
}
