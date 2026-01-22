import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { carLoanTemplate } from "@/data/loanTemplate/carLoanTemplate";
export const metadata = {
  title: "Business Loan Application | आवेदन पत्र कैसे लिखें",
  description:
    "Business loan ke liye application kaise likhein? Bank ya financial institution se loan request karne ka sahi format aur sample application yahan milega.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={carLoanTemplate}
      />
    </>
  );
}
