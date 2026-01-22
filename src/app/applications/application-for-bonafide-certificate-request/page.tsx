import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { bonafideCertificateTemplate } from "@/data/certificateTemplate/bonafideCertificateTemplate";
// export const metadata = {
//   title: "Application for Bonafide Certificate | Aavedan Patra",
//   description: "A clear and simple application format for requesting a bonafide certificate from school, college, or office.",
// };
export const metadata = {
  title: "Bonafide Certificate Application | आवेदन पत्र कैसे लिखें",
  description:
    "Bonafide certificate के लिए application कैसे लिखें? School, college या office से bonafide certificate मांगने का सही format और आसान उदाहरण यहाँ देखें।",
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
