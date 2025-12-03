import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { personalLeaveApplicationPillar } from "@/data/personalLeaveApplicationPillar";
export const metadata = {
  title: "Application for personal leave | Aavedan Patra",
  description: "Learn more about our aavedan patra",
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
