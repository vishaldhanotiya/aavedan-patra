import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { vacationLeaveApplicationTemplate } from "@/data/leaveTemplate/vacationLeaveApplicationTemplate";
import {  } from "@/metadata/metadata";
export const metadata = ({
  title:
    "वैकेशन लीव आवेदन – छुट्टियों/यात्रा के लिए",
  description:
    "प्लान की गई छुट्टियों (vacation) के लिए पहले से सूचना देने वाला आवेदन प्रारूप। 1-4 सप्ताह की लंबी छुट्टी के लिए उपयुक्त।",
  path: "/applications/leave/vacation-leave-application-formats",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={vacationLeaveApplicationTemplate} />
    </>
  );
}
