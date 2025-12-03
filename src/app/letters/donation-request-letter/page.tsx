import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { donationRequestTemplate } from "@/data/requestTemplate/donationRequestTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={donationRequestTemplate}
      />
    </>
  );
}
