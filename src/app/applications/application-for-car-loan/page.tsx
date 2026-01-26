import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { carLoanTemplate } from "@/data/loanTemplate/carLoanTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "कार लोन के लिए आवेदन पत्र | आवेदन कैसे लिखें",
  description:
    "कार लोन के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर बैंक या वित्तीय संस्था से नई या पुरानी कार के लिए लोन लेने हेतु सही आवेदन पत्र का प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे आपका कार लोन आवेदन सही और प्रभावी तरीके से तैयार हो सके।",
  path: "/applications/application-for-car-loan",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={carLoanTemplate} />
    </>
  );
}
