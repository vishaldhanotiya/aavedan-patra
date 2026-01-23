import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { personalLoanTemplate } from "@/data/loanTemplate/personalLoanTemplate";
export const metadata = {
  title: "पर्सनल लोन के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "बैंक या ऋणदाता से पर्सनल लोन के लिए आवेदन करने का सही प्रारूप और नमूना शब्दावली।",
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
