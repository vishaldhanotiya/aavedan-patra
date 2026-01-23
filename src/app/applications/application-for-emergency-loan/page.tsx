import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { emergencyLoanTemplate } from "@/data/loanTemplate/emergencyLoanTemplate";
export const metadata = {
  title: "इमरजेंसी लोन के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "तत्काल आर्थिक सहायता के लिए इमरजेंसी लोन आवेदन पत्र का प्रभावी और सही प्रारूप यहाँ देखें।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={emergencyLoanTemplate}
      />
    </>
  );
}
