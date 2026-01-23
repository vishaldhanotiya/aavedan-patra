
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { teacherJobApplicationTemplate } from "@/data/jobTemplate/teacherJobApplicationTemplate";

export const metadata = {
  title: "शिक्षक नौकरी के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "स्कूल शिक्षक पद के लिए औपचारिक आवेदन पत्र प्रारूप और उदाहरण।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={teacherJobApplicationTemplate}
      />
    </>
  );
}
