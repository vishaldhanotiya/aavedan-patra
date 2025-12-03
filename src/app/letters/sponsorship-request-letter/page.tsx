import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sponsorshipRequestTemplate } from "@/data/requestTemplate/sponsorshipRequestTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={sponsorshipRequestTemplate}
      />
    </>
  );
}
