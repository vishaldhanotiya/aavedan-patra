import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { casualLeaveApplicationTemplate } from "@/data/leaveTemplate/casualLeaveApplicationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "कैजुअल लीव आवेदन पत्र फॉर्मेट | सही आवेदन पत्र",
  description:
    "कैजुअल लीव के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर ऑफिस, स्कूल या व्यक्तिगत कारणों से कैजुअल लीव लेने के लिए सही आवेदन पत्र का फॉर्मेट, तैयार नमूना आवेदन पत्र, एक दिन या कई दिनों की छुट्टी के उदाहरण और लिखने के आसान व विनम्र सुझाव दिए गए हैं, जिससे आपका आवेदन आसानी से स्वीकार हो सके।",
  path: "/applications/application-for-casual-leave",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={casualLeaveApplicationTemplate} />
    </>
  );
}
