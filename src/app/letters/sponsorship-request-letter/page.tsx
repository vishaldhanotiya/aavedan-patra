import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sponsorshipRequestTemplate } from "@/data/requestTemplate/sponsorshipRequestTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "स्पॉन्सरशिप हेतु अनुरोध पत्र | आवेदन पत्र",
  description:
    "स्पॉन्सरशिप हेतु अनुरोध पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर कार्यक्रम, खेल, शिक्षा या सामाजिक कार्यों के लिए स्पॉन्सरशिप माँगने का सही आवेदन पत्र प्रारूप, तैयार नमूने, जरूरी जानकारी और लिखने के आसान व प्रभावी सुझाव दिए गए हैं, जिससे आपका अनुरोध भरोसेमंद और प्रभावी बने।",
  path: "/letters/sponsorship-request-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={sponsorshipRequestTemplate} />
    </>
  );
}
