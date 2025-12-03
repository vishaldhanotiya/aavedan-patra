import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { bonafideCertificateTemplate } from "@/data/certificateTemplate/bonafideCertificateTemplate";
export const metadata = {
  title: "Application for bonafide certificate | Aavedan Patra",
  description: "Learn more about our aavedan patra",
};
export default function Page() {

  return (
    <>
      <PillarTemplateDetailsPage
        data={bonafideCertificateTemplate}
      />
    </>
  );
}
