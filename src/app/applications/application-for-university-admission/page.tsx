import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { universityAdmissionTemplate } from "@/data/admissionTemplate/universityAdmissionTemplate";
export const metadata = {
  title: "विश्वविद्यालय में प्रवेश के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "विश्वविद्यालय प्रवेश के लिए औपचारिक आवेदन पत्र का नमूना प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={universityAdmissionTemplate}
      />
    </>
  );
}
