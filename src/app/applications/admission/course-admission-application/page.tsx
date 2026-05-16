import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { courseAdmission } from "@/data/admissionTemplate/courseAdmission/courseAdmission";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "कोर्स एडमिशन आवेदन – डिप्लोमा, सर्टिफिकेट कोर्स",
  description:
    "किसी विशेष कोर्स (कंप्यूटर, लैंग्वेज, वोकेशनल) में प्रवेश के लिए संस्थान निदेशक को आवेदन प्रारूप। पात्रता और रुचि दिखाएं।",
  path: "/applications/admission/course-admission-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={courseAdmission} />
    </>
  );
}
