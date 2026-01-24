import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { characterCertificateTemplate } from "@/data/certificateTemplate/characterCertificateTemplate";
export const metadata = {
  title: "कैरैक्टर सर्टिफिकेट के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "कैरैक्टर सर्टिफिकेट के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर स्कूल, कॉलेज या नियोक्ता से कैरैक्टर सर्टिफिकेट प्राप्त करने के लिए सही आवेदन पत्र का प्रारूप, तैयार नमूना पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे आप बिना किसी परेशानी के सही और प्रभावी आवेदन कर सकें।",
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
