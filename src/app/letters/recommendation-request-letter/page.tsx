import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { recommendationRequestTemplate } from "@/data/requestTemplate/recommendationRequestTemplate";
export const metadata = {
  title: "Recommendation Request Letter | Aavedan Patra",
  description: "Request a recommendation politely with ready-to-use templates and examples.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={recommendationRequestTemplate}
      />
    </>
  );
}
