import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { casteCertificateTemplate } from "@/data/certificateTemplate/casteCertificateTemplate";
export const metadata = {
  title: "Caste Certificate Application | जाति प्रमाण पत्र हेतु आवेदन",
  description:
    "Office, school या personal use के लिए जाति प्रमाण पत्र का सरल और विनम्र आवेदन पत्र।",
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
