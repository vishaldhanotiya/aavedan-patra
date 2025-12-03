import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { recommendationRequestTemplate } from "@/data/requestTemplate/recommendationRequestTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={recommendationRequestTemplate}
      />
    </>
  );
}
