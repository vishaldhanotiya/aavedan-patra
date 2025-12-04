import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { businessLoanTemplate } from "@/data/loanTemplate/businessLoanTemplate";
export const metadata = {
  title: "Application for Business Loan | Aavedan Patra",
  description: "Formal business loan application letter format with sample templates to request funding from banks or financial institutions.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={businessLoanTemplate}
      />
    </>
  );
}
