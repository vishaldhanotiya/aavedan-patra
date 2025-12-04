import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { schoolTransferTemplate } from "@/data/admissionTemplate/schoolTransferTemplate";
export const metadata = {
  title: "Application for School Transfer Certificate | Aavedan Patra",
  description: "Application letter format for requesting a school transfer certificate (TC).",
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
