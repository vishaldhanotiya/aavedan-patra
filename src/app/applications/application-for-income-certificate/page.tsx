import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { incomeCertificateTemplate } from "@/data/certificateTemplate/incomeCertificateTemplate";
export const metadata = {
  title: "आय प्रमाण पत्र के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "स्थानीय प्राधिकरण से आय प्रमाण पत्र प्राप्त करने के लिए सरल आवेदन पत्र का प्रारूप।",
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
