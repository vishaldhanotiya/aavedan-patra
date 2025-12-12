import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { managerHrOperationsSalesTemplate } from "@/data/jobTemplate/managerHrOperationsSalesTemplate";
export const metadata = {
  title: "Application for Manager Position | Aavedan Patra",
  description: "Professional job application letter format for applying to manager-level positions.",
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
