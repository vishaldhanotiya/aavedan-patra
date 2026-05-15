import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { personalLoanTemplate1 } from "@/data/loanTemplate/personalLoanTemplate1";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "पर्सनल लोन आवेदन पत्र – Personal Loan Application Hindi | AavedanPatra",
  description:
    "बैंक से Personal Loan के लिए हिंदी आवेदन पत्र। तैयार नमूना, ज़रूरी दस्तावेज़ सूची और Personal Loan Application लिखने की पूरी गाइड।",
  path: "/applications/loan/personal-loan-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={personalLoanTemplate1} />
    </>
  );
}
