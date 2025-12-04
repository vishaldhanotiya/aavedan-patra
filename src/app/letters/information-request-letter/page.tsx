import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { informationRequestTemplate } from "@/data/requestTemplate/informationRequestTemplate";
export const metadata = {
  title: "Information Request Letter | Aavedan Patra",
  description: "Polite information request letter samples for school, office, and official use.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={informationRequestTemplate}
      />
    </>
  );
}
