import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { incomeCertificateTemplate } from "@/data/certificateTemplate/incomeCertificateTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "आय प्रमाण पत्र के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "आय प्रमाण पत्र के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर तहसील, पंचायत या अन्य स्थानीय प्राधिकरण से आय प्रमाण पत्र प्राप्त करने के लिए सही आवेदन पत्र का प्रारूप, तैयार नमूना आवेदन पत्र, जरूरी दस्तावेज़ों की जानकारी और लिखने के आसान सुझाव दिए गए हैं, जिससे आप बिना किसी परेशानी के सही आवेदन कर सकें।",
  path: "/applications/application-for-income-certificate",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={incomeCertificateTemplate} />
    </>
  );
}
