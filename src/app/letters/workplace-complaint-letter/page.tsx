import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { workplaceComplaintTemplate } from "@/data/complaintTemplate/workplaceComplaintTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "कार्यस्थल शिकायत पत्र | आवेदन पत्र",
  description:
    "कार्यस्थल शिकायत पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर ऑफिस या कंपनी में काम से जुड़ी समस्याओं, व्यवहार, सुविधा या अन्य मुद्दों के लिए शिकायत दर्ज करने का सही आवेदन पत्र प्रारूप, तैयार नमूने और लिखने के आसान व विनम्र सुझाव दिए गए हैं, जिससे आपकी शिकायत स्पष्ट और प्रभावी तरीके से रखी जा सके।",
  path: "/letters/workplace-complaint-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={workplaceComplaintTemplate} />
    </>
  );
}
