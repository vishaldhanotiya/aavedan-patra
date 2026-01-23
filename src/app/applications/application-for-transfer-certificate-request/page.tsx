import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { transferCertificateTemplate } from "@/data/certificateTemplate/transferCertificateTemplate";
export const metadata = {
  title: "ट्रांसफर सर्टिफिकेट के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "ट्रांसफर सर्टिफिकेट के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर स्कूल या कॉलेज से ट्रांसफर सर्टिफिकेट प्राप्त करने के लिए सही आवेदन पत्र का प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे छात्र या अभिभावक बिना किसी परेशानी के सही तरीके से आवेदन कर सकें।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={transferCertificateTemplate}
      />
    </>
  );
}
