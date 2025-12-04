import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { homeLoanTemplate } from "@/data/loanTemplate/homeLoanTemplate";
export const metadata = {
  title: "Application for Home Loan | Aavedan Patra",
  description: "Home loan request letter format with examples for applying to banks and lenders.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={homeLoanTemplate}
      />
    </>
  );
}
