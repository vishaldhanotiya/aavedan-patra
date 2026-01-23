import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { privateScholarshipTemplate } from "@/data/scholarshipTemplate/privateScholarshipTemplate";
export const metadata = {
  title: "प्राइवेट स्कॉलरशिप के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "प्राइवेट स्कॉलरशिप के लिए आवेदन करने हेतु प्रभावी लेखन प्रारूप के साथ नमूना आवेदन पत्र।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={privateScholarshipTemplate}
      />
    </>
  );
}
