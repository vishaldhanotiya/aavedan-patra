import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { transferCertificateTemplate } from "@/data/certificateTemplate/transferCertificateTemplate";
export const metadata = {
  title: "Application for Transfer Certificate Request | Aavedan Patra",
  description: "Simple TC request letter format for school or college transfer.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={transferCertificateTemplate}
      />
    </>
  );
}
