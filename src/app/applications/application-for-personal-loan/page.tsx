import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { personalLoanTemplate } from "@/data/loanTemplate/personalLoanTemplate";
export const metadata = {
  title: "Application for personal loan | Aavedan Patra",
  description: "Learn more about our aavedan patra",
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
