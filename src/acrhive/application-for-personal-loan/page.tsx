import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { personalLoanTemplate } from "@/data/loanTemplate/personalLoanTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:  "पर्सनल लोन आवेदन पत्र – Personal Loan Application Hindi | AavedanPatra",
  description:
     "बैंक से Personal Loan के लिए हिंदी आवेदन पत्र। तैयार नमूना, ज़रूरी दस्तावेज़ सूची और Personal Loan Application लिखने की पूरी गाइड।",
  path: "/applications/application-for-personal-loan",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={personalLoanTemplate} />
    </>
  );
}
