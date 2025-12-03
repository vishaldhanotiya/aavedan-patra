import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { managerHrOperationsSalesTemplate } from "@/data/managerHrOperationsSalesTemplate";
export const metadata = {
  title: "Application for manager position job | Aavedan Patra",
  description: "Learn more about our aavedan patra",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={managerHrOperationsSalesTemplate}
      />
    </>
  );
}
