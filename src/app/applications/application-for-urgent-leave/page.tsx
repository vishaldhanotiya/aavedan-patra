import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { urgentLeaveApplicationPillar } from "@/data/urgentLeaveApplicationPillar";
export const metadata = {
  title: "Application for urgent leave | Aavedan Patra",
  description: "Learn more about our aavedan patra",
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
