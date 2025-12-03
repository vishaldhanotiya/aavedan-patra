import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { workplaceComplaintTemplate } from "@/data/complaintTemplate/workplaceComplaintTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={workplaceComplaintTemplate}
      />
    </>
  );
}
