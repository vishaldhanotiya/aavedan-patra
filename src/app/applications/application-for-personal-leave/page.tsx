import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { personalLeaveApplicationPillar } from "@/data/personalLeaveApplicationPillar";
export const metadata = {
  title: "Application for Personal Leave | Aavedan Patra",
  description: "Formal personal leave request letter format suitable for office or school.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={personalLeaveApplicationPillar}
      />
    </>
  );
}
