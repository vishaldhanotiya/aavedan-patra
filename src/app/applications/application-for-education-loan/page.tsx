import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { educationLoanTemplate } from "@/data/loanTemplate/educationLoanTemplate";
export const metadata = {
  title: "Application for education loan | Aavedan Patra",
  description: "Learn more about our aavedan patra",
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
