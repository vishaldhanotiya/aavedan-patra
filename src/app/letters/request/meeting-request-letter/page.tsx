import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { meetingRequestTemplate } from "@/data/requestTemplate/meetingRequestTemplate";
import {  } from "@/metadata/metadata";
export const metadata = ({
  title: "मीटिंग अनुरोध पत्र – Meeting Request Letter Hindi",
  description:
    "अपने वरिष्ठ, ग्राहक, या प्रोफेसर के साथ बैठक (चर्चा, प्रेजेंटेशन, सलाह) का समय मांगने के लिए पत्र।",
  path: "/letters/request/meeting-request-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={meetingRequestTemplate} />
    </>
  );
}
