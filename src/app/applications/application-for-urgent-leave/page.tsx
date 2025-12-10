import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { urgentLeaveApplicationTemplate } from "@/data/urgentLeaveApplicationTemplate";
export const metadata = {
  title: "Application for Urgent Leave | Aavedan Patra",
  description: "Urgent leave application letter format for emergencies or unexpected situations.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={urgentLeaveApplicationTemplate}
      />
    </>
  );
}
