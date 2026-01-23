import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { businessLoanTemplate } from "@/data/loanTemplate/businessLoanTemplate";
export const metadata = {
  title: "बिज़नेस लोन के लिए आवेदन पत्र | आवेदन कैसे लिखें",
  description:
    "बिज़नेस लोन के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ पाएँ। इस पेज पर बैंक या वित्तीय संस्था से बिज़नेस लोन लेने के लिए सही आवेदन पत्र का प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी दस्तावेज़ों की जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे आपका लोन आवेदन सही और प्रभावी बन सके।",
};

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={businessLoanTemplate}
      />
    </>
  );
}
