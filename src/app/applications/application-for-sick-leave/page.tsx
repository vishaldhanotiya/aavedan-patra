import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sickLeaveApplicationTemplate } from "@/data/leaveTemplate/sickLeaveApplicationTemplate";
export const metadata = {
  title: "Application for Sick Leave | Aavedan Patra",
  description: "Proper sick leave application format with sample wording for students and employees.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={sickLeaveApplicationTemplate}
      />
    </>
  );
}
