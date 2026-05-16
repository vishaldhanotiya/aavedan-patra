import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { businessLoanTemplate } from "@/data/loanTemplate/businessLoanTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "बिज़नेस लोन आवेदन पत्र – Business Loan Application Hindi",
  description:
    "बैंक से Business Loan के लिए हिंदी आवेदन पत्र। तैयार नमूना, ज़रूरी दस्तावेज़ सूची और व्यापार ऋण आवेदन लिखने की पूरी गाइड।",
  path: "/applications/application-for-business-loan",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={businessLoanTemplate} />
    </>
  );
}
