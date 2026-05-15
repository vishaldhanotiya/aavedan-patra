import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { emergencyLoanTemplate } from "@/data/loanTemplate/emergencyLoanTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "इमरजेंसी लोन आवेदन पत्र – Emergency Loan Application Hindi | AavedanPatra",
  description:
     "आपात ज़रूरत के लिए बैंक से Emergency Loan हेतु हिंदी आवेदन पत्र। तुरंत उपयोग करें – तैयार नमूना, सही फॉर्मेट और लिखने की गाइड।",
  path: "/applications/application-for-emergency-loan",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={emergencyLoanTemplate} />
    </>
  );
}
