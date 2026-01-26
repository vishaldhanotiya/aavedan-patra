import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { serviceComplaintTemplate } from "@/data/complaintTemplate/serviceComplaintTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "सेवा शिकायत पत्र | आवेदन पत्र",
  description:
    "सेवा शिकायत पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर खराब या असंतोषजनक सेवा की शिकायत दर्ज करने और उचित कार्रवाई का अनुरोध करने के लिए प्रभावी शिकायत पत्र का सही प्रारूप, तैयार नमूने और लिखने के आसान सुझाव दिए गए हैं, जिससे आपकी शिकायत स्पष्ट और जल्दी हल हो सके।",
  path: "/letters/service-complaint-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={serviceComplaintTemplate} />
    </>
  );
}
