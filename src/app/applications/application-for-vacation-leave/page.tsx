import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { vacationLeaveApplicationPillar } from "@/data/vacationLeaveApplicationPillar";
export const metadata = {
  title: "Application for vacation leave | Aavedan Patra",
  description: "Learn more about our aavedan patra",
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
