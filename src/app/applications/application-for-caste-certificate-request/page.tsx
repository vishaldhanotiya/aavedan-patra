import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { casteCertificateTemplate } from "@/data/certificateTemplate/casteCertificateTemplate";
export const metadata = {
  title: "Caste Certificate Application | जाति प्रमाण पत्र हेतु आवेदन",
  description:
    "Caste certificate (जाति प्रमाण पत्र) के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर ऑफिस, स्कूल या व्यक्तिगत उपयोग के लिए जाति प्रमाण पत्र का सही आवेदन पत्र प्रारूप, तैयार नमूना, जरूरी दस्तावेज़ों की जानकारी और लिखने के आसान व विनम्र तरीके दिए गए हैं, जिससे आप बिना किसी गलती के सही आवेदन कर सकें।",
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
