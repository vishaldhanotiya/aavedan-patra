import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { businessLoanTemplate } from "@/data/loanTemplate/businessLoanTemplate";
export const metadata = {
  title: "Application for business loan | Aavedan Patra",
  description: "Learn more about our aavedan patra",
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
