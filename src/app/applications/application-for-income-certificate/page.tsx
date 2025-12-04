import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { incomeCertificateTemplate } from "@/data/certificateTemplate/incomeCertificateTemplate";
export const metadata = {
  title: "Application for Income Certificate | Aavedan Patra",
  description: "Simple application format to request an income certificate from local authorities.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={incomeCertificateTemplate}
      />
    </>
  );
}
