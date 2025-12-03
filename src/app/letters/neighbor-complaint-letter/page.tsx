import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { neighborComplaintTemplate } from "@/data/complaintTemplate/neighborComplaintTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={neighborComplaintTemplate}
      />
    </>
  );
}
