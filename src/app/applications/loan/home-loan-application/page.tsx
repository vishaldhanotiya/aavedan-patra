import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { homeLoanTemplate } from "@/data/loanTemplate/homeLoanTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "होम लोन के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "होम लोन के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर बैंक या अन्य ऋणदाता से घर खरीदने या बनाने के लिए होम लोन लेने हेतु सही आवेदन पत्र का प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी दस्तावेज़ों की जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे आपका लोन आवेदन सही और प्रभावी बन सके।",
  path: "/applications/loan/home-loan-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={homeLoanTemplate} />
    </>
  );
}
