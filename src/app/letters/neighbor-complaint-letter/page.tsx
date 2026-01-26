import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { neighborComplaintTemplate } from "@/data/complaintTemplate/neighborComplaintTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "पड़ोसी शिकायत पत्र | आवेदन पत्र",
  description:
    "पड़ोसी शिकायत पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर शोर, गंदगी या अन्य असुविधा संबंधी समस्याओं के लिए विनम्र और स्पष्ट तरीके से शिकायत करने का सही पत्र प्रारूप, तैयार नमूने और लिखने के आसान सुझाव दिए गए हैं, जिससे समस्या शांति से सुलझाई जा सके।",
  path: "/letters/neighbor-complaint-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={neighborComplaintTemplate} />
    </>
  );
}
