import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { emergencyLoanTemplate } from "@/data/loanTemplate/emergencyLoanTemplate";
export const metadata = {
  title: "Application for emergency loan | Aavedan Patra",
  description: "Learn more about our aavedan patra",
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
