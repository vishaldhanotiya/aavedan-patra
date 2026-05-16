import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { urgentLeaveApplicationTemplate } from "@/data/leaveTemplate/urgentLeaveApplicationTemplate";
import {  } from "@/metadata/metadata";
export const metadata = ({
  title: "अर्जेंट लीव आवेदन – आपात स्थिति के लिए",
  description:
    "अचानक आई आपात स्थिति (एक्सीडेंट, बीमारी, अप्रत्याशित कार्य) के लिए उसी दिन या एक दिन पहले छुट्टी मांगने का प्रारूप।",
  path: "/applications/leave/urgent-leave-application-formats",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={urgentLeaveApplicationTemplate} />
    </>
  );
}
