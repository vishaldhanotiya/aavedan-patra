import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { homeLoanTemplate } from "@/data/loanTemplate/homeLoanTemplate";
export const metadata = {
  title: "Application for home loan | Aavedan Patra",
  description: "Learn more about our aavedan patra",
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
