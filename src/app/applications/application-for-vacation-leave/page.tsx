import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { vacationLeaveApplicationPillar } from "@/data/vacationLeaveApplicationPillar";
export const metadata = {
 title: "Application for Vacation Leave | Aavedan Patra",
  description: "Formal vacation leave request letter suitable for office or school.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={vacationLeaveApplicationPillar}
      />
    </>
  );
}
