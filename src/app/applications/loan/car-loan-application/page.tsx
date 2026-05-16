import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { carLoanTemplate } from "@/data/loanTemplate/carLoanTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:  "कार लोन आवेदन पत्र – Car Loan Application Hindi", 
  description:
  "नई या पुरानी कार के लिए बैंक को Car Loan Application। हिंदी में तैयार नमूना, ज़रूरी दस्तावेज़ और कार लोन आवेदन लिखने की गाइड।",
  path: "/applications/loan/car-loan-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={carLoanTemplate}  />
    </>
  );
}
