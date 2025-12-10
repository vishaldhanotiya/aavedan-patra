import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { casualLeaveApplicationTemplate } from "@/data/casualLeaveApplicationTemplate";
export const metadata = {
  title: "Application for casual leave | Aavedan Patra",
  description: "Learn more about our aavedan patra",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={casualLeaveApplicationTemplate}
      />
    </>
  );
}
