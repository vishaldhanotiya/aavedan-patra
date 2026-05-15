import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { emergencyLoanTemplate } from "@/data/loanTemplate/emergencyLoanTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:  "इमरजेंसी लोन आवेदन पत्र – Emergency Loan Application Hindi | AavedanPatra",
  description:
"आपातकालीन ज़रूरत के लिए बैंक से Emergency Loan हेतु हिंदी आवेदन पत्र। तुरंत उपयोग करें – तैयार नमूना और सही फॉर्मेट।",
  path: "/applications/loan/emergency-loan-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={emergencyLoanTemplate} />
    </>
  );
}
