import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { bonafideCertificateTemplate } from "@/data/certificateTemplate/bonafideCertificateTemplate";
// export const metadata = {
//   title: "Application for Bonafide Certificate | Aavedan Patra",
//   description: "A clear and simple application format for requesting a bonafide certificate from school, college, or office.",
// };
export const metadata = {
  title: "बोनाफाइड प्रमाण पत्र के लिए आवेदन पत्र | आवेदन कैसे लिखें",
  description:
    "बोनाफाइड प्रमाण पत्र के लिए आवेदन पत्र कैसे लिखें? स्कूल, कॉलेज या कार्यालय से बोनाफाइड प्रमाण पत्र प्राप्त करने के लिए सही प्रारूप और आसान उदाहरण यहाँ देखें।",
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
