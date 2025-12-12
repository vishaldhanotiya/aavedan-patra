import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { vacationLeaveApplicationTemplate } from "@/data/leaveTemplate/vacationLeaveApplicationTemplate";
export const metadata = {
 title: "Application for Vacation Leave | Aavedan Patra",
  description: "Formal vacation leave request letter suitable for office or school.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={vacationLeaveApplicationTemplate}
      />
    </>
  );
}
