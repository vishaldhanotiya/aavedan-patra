import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { informationRequestTemplate } from "@/data/requestTemplate/informationRequestTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={informationRequestTemplate}
      />
    </>
  );
}
