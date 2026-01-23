import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { schoolAdmissionTemplate } from "@/data/admissionTemplate/schoolAdmissionTemplate";
export const metadata = {
  title: "स्कूल में प्रवेश के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "अभिभावकों और छात्रों के लिए स्कूल प्रवेश हेतु औपचारिक आवेदन पत्र का नमूना।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={schoolAdmissionTemplate}
      />
    </>
  );
}
