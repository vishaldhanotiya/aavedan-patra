import { PillarTemplatePage } from "@/components/PillarTemplatePage";
import { sickLeaveApplicationTemplate } from "@/data/leaveTemplate/sickLeaveApplicationTemplate";
import { createMetadata } from "@/metadata/metadata";
const path = "/applications/leave/sick-leave-application-formats";
export const metadata = createMetadata({
  title: "सिक लीव आवेदन – 5+ प्रारूप (बिना/साथ मेडिकल सर्टिफिकेट)",
  description:
  "बिना डॉक्टर प्रमाणपत्र (1-2 दिन) और साथ मेडिकल सर्टिफिकेट (लंबी बीमारी) के लिए अलग-अलग सिक लीव आवेदन प्रारूप।",
  path,
});
export default function Page() {
  return <PillarTemplatePage path={path} data={sickLeaveApplicationTemplate} />;
}
