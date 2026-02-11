import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { donationRequestTemplate } from "@/data/requestTemplate/donationRequestTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "दान अनुरोध पत्र हिंदी में | चैरिटी और एनजीओ फंडरेजिंग प्रारूप",
  description:
    "दान मांगने के लिए प्रभावी अनुरोध पत्र कैसे लिखें? चैरिटी, एनजीओ, स्कूल, अस्पताल या सामाजिक कार्यों के लिए विनम्र और प्रोफेशनल दान अनुरोध पत्र का पूरा हिंदी प्रारूप, तैयार नमूने और आसान टिप्स इस पेज पर दिए गए हैं। आपका अनुरोध ज्यादा सफल और भरोसेमंद बने।",
  path: "/letters/donation-request-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={donationRequestTemplate} />
    </>
  );
}
