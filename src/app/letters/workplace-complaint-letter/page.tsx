import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { workplaceComplaintTemplate } from "@/data/complaintTemplate/workplaceComplaintTemplate";
export const metadata = {
  title: "Workplace Complaint Letter | Aavedan Patra",
  description: "Learn more about our aavedan patra",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={workplaceComplaintTemplate}
      />
    </>
  );
}
