import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { meritScholarshipTemplate } from "@/data/scholarshipTemplate/meritScholarshipTemplate";
export const metadata = {
  title: "मेरिट आधारित छात्रवृत्ति के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "योग्यता के आधार पर छात्रवृत्ति के लिए आवेदन करने का स्पष्ट और प्रभावी प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={meritScholarshipTemplate}
      />
    </>
  );
}
