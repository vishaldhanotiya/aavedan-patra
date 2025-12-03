import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { schoolStudentLeaveApplicationPillar } from "@/data/schoolStudentLeaveApplicationPillar";
export const metadata = {
  title: "Application for leave from school | Aavedan Patra",
  description: "Learn more about our aavedan patra",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={schoolStudentLeaveApplicationPillar}
      />
    </>
  );
}
