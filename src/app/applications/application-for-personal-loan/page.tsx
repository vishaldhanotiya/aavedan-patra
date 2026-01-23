import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { personalLoanTemplate } from "@/data/loanTemplate/personalLoanTemplate";
export const metadata = {
  title: "पर्सनल लोन के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "पर्सनल लोन के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर बैंक या अन्य ऋणदाता से पर्सनल लोन लेने के लिए सही आवेदन पत्र का प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे आप अपना लोन आवेदन सही और प्रभावी तरीके से कर सकें।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={personalLoanTemplate}
      />
    </>
  );
}
