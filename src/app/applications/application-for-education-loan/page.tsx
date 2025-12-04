import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { educationLoanTemplate } from "@/data/loanTemplate/educationLoanTemplate";
export const metadata = {
  title: "Application for Education Loan | Aavedan Patra",
  description: "Professional education loan request letter for students applying to banks or financial institutions.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={educationLoanTemplate}
      />
    </>
  );
}
