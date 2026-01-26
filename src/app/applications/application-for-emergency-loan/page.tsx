import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { emergencyLoanTemplate } from "@/data/loanTemplate/emergencyLoanTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "इमरजेंसी लोन के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "इमरजेंसी लोन के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर अचानक जरूरत या आपात स्थिति में बैंक या वित्तीय संस्था से इमरजेंसी लोन लेने के लिए सही आवेदन पत्र का प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे आप तुरंत और सही तरीके से आवेदन कर सकें।",
  path: "/applications/application-for-emergency-loan",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={emergencyLoanTemplate} />
    </>
  );
}
