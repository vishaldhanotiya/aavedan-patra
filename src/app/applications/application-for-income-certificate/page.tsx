import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { incomeCertificateTemplate } from "@/data/certificateTemplate/incomeCertificateTemplate";
export const metadata = {
  title: "Application for income certificate | Aavedan Patra",
  description: "Learn more about our aavedan patra",
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
