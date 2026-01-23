import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { collegeAdmissionTemplate } from "@/data/admissionTemplate/collegeAdmissionTemplate";
export const metadata = {
  title: "कॉलेज में प्रवेश के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "कॉलेज में प्रवेश के लिए औपचारिक आवेदन पत्र का प्रारूप, छात्रों के लिए नमूना लेखन और उपयोगी सुझाव यहाँ देखें।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={collegeAdmissionTemplate}
      />
    </>
  );
}
