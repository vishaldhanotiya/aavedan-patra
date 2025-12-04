import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { neighborComplaintTemplate } from "@/data/complaintTemplate/neighborComplaintTemplate";
export const metadata = {
  title: "Neighbor Complaint Letter | Aavedan Patra",
  description: "Polite and clear neighbor complaint letter formats for noise or disturbance issues.",
};
export default function Page() {
  
  return (
    <>
      <PillarTemplateDetailsPage
        data={neighborComplaintTemplate}
      />
    </>
  );
}
