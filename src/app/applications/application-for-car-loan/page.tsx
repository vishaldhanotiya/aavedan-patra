import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { carLoanTemplate } from "@/data/loanTemplate/carLoanTemplate";
export const metadata = {
  title: "कार लोन के लिए आवेदन पत्र | आवेदन कैसे लिखें",
  description:
    "कार लोन के लिए आवेदन पत्र कैसे लिखें? बैंक या वित्तीय संस्था से कार लोन लेने के लिए सही प्रारूप और आसान उदाहरण यहाँ देखें।",
};

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={carLoanTemplate}
      />
    </>
  );
}
