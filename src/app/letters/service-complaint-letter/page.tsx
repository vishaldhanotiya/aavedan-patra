import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { serviceComplaintTemplate } from "@/data/complaintTemplate/serviceComplaintTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={serviceComplaintTemplate}
      />
    </>
  );
}
