import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { businessLoanTemplate } from "@/data/loanTemplate/businessLoanTemplate";
export const metadata = {
  title: "बिज़नेस लोन के लिए आवेदन पत्र | आवेदन कैसे लिखें",
  description:
    "बिज़नेस लोन के लिए आवेदन पत्र कैसे लिखें? बैंक या वित्तीय संस्था से लोन के लिए अनुरोध करने का सही प्रारूप और नमूना आवेदन पत्र यहाँ उपलब्ध है।",
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
