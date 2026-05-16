import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { businessLoanTemplate } from "@/data/loanTemplate/businessLoanTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "बिज़नेस लोन आवेदन पत्र – Business Loan Application Hindi",
  description:
    "बिज़नेस लोन के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ पाएँ। इस पेज पर बैंक या वित्तीय संस्था से बिज़नेस लोन लेने के लिए सही आवेदन पत्र का प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी दस्तावेज़ों की जानकारी और लिखने के आसान सुझाव दिए गए हैं।",
  path: "/applications/loan/business-loan-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={businessLoanTemplate} />
    </>
  );
}
