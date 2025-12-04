import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { carLoanTemplate } from "@/data/loanTemplate/carLoanTemplate";
export const metadata = {
  title: "Application for Car Loan | Aavedan Patra",
  description: "Professional car loan request letter format with examples for applying to banks or finance companies.",
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
