import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { personalLoanTemplate } from "@/data/loanTemplate/personalLoanTemplate";
export const metadata = {
  title: "Application for Personal Loan | Aavedan Patra",
  description: "Personal loan application letter format with sample wording for banks and lenders.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={personalLoanTemplate}
      />
    </>
  );
}
