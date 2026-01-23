import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { readmissionTemplate } from "@/data/admissionTemplate/readmissionTemplate";
export const metadata = {
  title: "पुनः प्रवेश के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "स्कूल, कॉलेज या प्रशिक्षण कार्यक्रम में पुनः प्रवेश के लिए सरल आवेदन पत्र प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={readmissionTemplate}
      />
    </>
  );
}
