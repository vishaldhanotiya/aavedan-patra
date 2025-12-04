import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { serviceComplaintTemplate } from "@/data/complaintTemplate/serviceComplaintTemplate";
export const metadata = {
  title: "Service Complaint Letter | Aavedan Patra",
  description: "Effective complaint letter formats to report poor service and request action.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={serviceComplaintTemplate}
      />
    </>
  );
}
