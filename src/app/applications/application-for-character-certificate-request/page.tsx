import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { characterCertificateTemplate } from "@/data/certificateTemplate/characterCertificateTemplate";
export const metadata = {
  title: "कैरैक्टर सर्टिफिकेट के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "स्कूल, कॉलेज या नियोक्ता से कैरैक्टर सर्टिफिकेट के लिए आवेदन करने का आसान प्रारूप और नमूना पत्र यहाँ देखें।",
};

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={characterCertificateTemplate}
      />
    </>
  );
}
