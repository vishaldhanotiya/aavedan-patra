import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { schoolTransferTemplate } from "@/data/admissionTemplate/schoolTransferTemplate";
export const metadata = {
  title: "Application for school transfer certificate | Aavedan Patra",
  description: "Learn more about our aavedan patra",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={schoolTransferTemplate}
      />
    </>
  );
}
