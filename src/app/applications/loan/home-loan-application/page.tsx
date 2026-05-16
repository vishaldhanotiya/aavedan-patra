import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { homeLoanTemplate } from "@/data/loanTemplate/homeLoanTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "होम लोन आवेदन पत्र – Home Loan Application Hindi",
  description:
    "घर खरीदने/बनाने के लिए बैंक से Home Loan हेतु हिंदी आवेदन पत्र। तैयार नमूना, ज़रूरी दस्तावेज़ और Home Loan Application लिखने की गाइड।",
  path: "/applications/loan/home-loan-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={homeLoanTemplate} />
    </>
  );
}
