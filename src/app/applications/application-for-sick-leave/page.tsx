import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sickLeaveApplicationPillar } from "@/data/sickLeaveApplicationPillar";
  export const metadata = {
  title: "Application for sick leave | Aavedan Patra",
  description: "Learn more about our aavedan patra",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={sickLeaveApplicationPillar}
      />
    </>
  );
}
