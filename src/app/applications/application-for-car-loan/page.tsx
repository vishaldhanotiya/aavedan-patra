import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { carLoanTemplate } from "@/data/loanTemplate/carLoanTemplate";
export const metadata = {
  title: "Application for car loan | Aavedan Patra",
  description: "Learn more about our aavedan patra",
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
