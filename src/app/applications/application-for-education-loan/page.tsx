import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { educationLoanTemplate } from "@/data/loanTemplate/educationLoanTemplate";
export const metadata = {
  title: "एजुकेशन लोन के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "बैंक या वित्तीय संस्था से एजुकेशन लोन के लिए छात्रों द्वारा दिया जाने वाला प्रोफेशनल आवेदन पत्र प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={educationLoanTemplate}
      />
    </>
  );
}
