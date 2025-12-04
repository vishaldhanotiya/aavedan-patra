import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { emergencyLoanTemplate } from "@/data/loanTemplate/emergencyLoanTemplate";
export const metadata = {
   title: "Application for Emergency Loan | Aavedan Patra",
  description: "Effective emergency loan application letter format for urgent financial support.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={emergencyLoanTemplate}
      />
    </>
  );
}
