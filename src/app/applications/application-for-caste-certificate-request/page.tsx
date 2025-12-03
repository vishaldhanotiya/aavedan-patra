import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { casteCertificateTemplate } from "@/data/certificateTemplate/casteCertificateTemplate";
export const metadata = {
  title: "Application for caste certificate | Aavedan Patra",
  description: "Learn more about our aavedan patra",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={casteCertificateTemplate}
      />
    </>
  );
}
