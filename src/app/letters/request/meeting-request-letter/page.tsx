import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { meetingRequestTemplate } from "@/data/requestTemplate/meetingRequestTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "मीटिंग अनुरोध पत्र – Meeting Request Letter Hindi",
  description:
    "अपॉइंटमेंट या चर्चा के लिए Meeting Request Letter। प्रोफेशनल हिंदी प्रारूप, तैयार नमूने और विनम्र तरीके से मीटिंग माँगने की गाइड।",
  path: "/letters/request/meeting-request-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={meetingRequestTemplate} />
    </>
  );
}
