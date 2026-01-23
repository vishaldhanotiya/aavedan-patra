import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { experienceCertificateTemplate } from "@/data/certificateTemplate/experienceCertificateTemplate";
export const metadata = {
  title: "एक्सपीरियंस सर्टिफिकेट के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "एक्सपीरियंस सर्टिफिकेट के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर नियोक्ता या कंपनी से एक्सपीरियंस सर्टिफिकेट प्राप्त करने के लिए सही आवेदन पत्र का प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे आप बिना किसी परेशानी के सही आवेदन कर सकें।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={experienceCertificateTemplate}
      />
    </>
  );
}
