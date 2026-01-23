import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { governmentScholarshipTemplate } from "@/data/scholarshipTemplate/governmentScholarshipTemplate";
export const metadata = {
  title: "सरकारी छात्रवृत्ति के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "सरकारी छात्रवृत्ति के लिए औपचारिक आवेदन पत्र का प्रारूप और छात्रों के लिए उपयोगी लेखन सुझाव।",
};

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={governmentScholarshipTemplate}
      />
    </>
  );
}
