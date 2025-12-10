import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { schoolStudentLeaveApplicationTemplate } from "@/data/schoolStudentLeaveApplicationTemplate";
export const metadata = {
  title: "Application for School Leave | Aavedan Patra",
  description: "Simple school leave application format for students with sample letter.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={schoolStudentLeaveApplicationTemplate}
      />
    </>
  );
}
