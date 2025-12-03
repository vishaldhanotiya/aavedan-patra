import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { transferCertificateTemplate } from "@/data/certificateTemplate/transferCertificateTemplate";
export const metadata = {
  title: "Application for transfer certificate request | Aavedan Patra",
  description: "Learn more about our aavedan patra",
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
