import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { educationLoanTemplate } from "@/data/loanTemplate/educationLoanTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "शिक्षा ऋण आवेदन पत्र – Education Loan Application Hindi",
  description:
    "पढ़ाई के लिए बैंक से Education Loan हेतु हिंदी आवेदन पत्र। तैयार नमूना, ज़रूरी दस्तावेज़ सूची और छात्रों के लिए Education Loan Application गाइड।",
  path: "/applications/application-for-education-loan",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={educationLoanTemplate} />
    </>
  );
}
