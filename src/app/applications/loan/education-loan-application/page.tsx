import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { educationLoanTemplate } from "@/data/loanTemplate/educationLoanTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "एजुकेशन लोन के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "एजुकेशन लोन के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर बैंक या वित्तीय संस्था से पढ़ाई के लिए एजुकेशन लोन लेने हेतु सही आवेदन पत्र का प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी दस्तावेज़ों की जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे छात्र अपना लोन आवेदन सही और प्रभावी तरीके से तैयार कर सकें।",
  path: "/applications/loan/education-loan-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={educationLoanTemplate} />
    </>
  );
}
