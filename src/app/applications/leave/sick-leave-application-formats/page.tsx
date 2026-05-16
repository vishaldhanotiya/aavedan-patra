import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sickLeaveApplicationTemplate } from "@/data/leaveTemplate/sickLeaveApplicationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "सिक लीव आवेदन – 5+ प्रारूप (बिना/साथ मेडिकल सर्टिफिकेट)",
  description:
  "बिना डॉक्टर प्रमाणपत्र (1-2 दिन) और साथ मेडिकल सर्टिफिकेट (लंबी बीमारी) के लिए अलग-अलग सिक लीव आवेदन प्रारूप।",
  path: "/applications/leave/sick-leave-application-formats",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={sickLeaveApplicationTemplate} />
    </>
  );
}
