import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { urgentLeaveApplicationPillar } from "@/data/urgentLeaveApplicationPillar";
export const metadata = {
  title: "Application for Urgent Leave | Aavedan Patra",
  description: "Urgent leave application letter format for emergencies or unexpected situations.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={urgentLeaveApplicationPillar}
      />
    </>
  );
}
