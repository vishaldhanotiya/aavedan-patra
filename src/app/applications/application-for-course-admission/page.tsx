import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { courseAdmissionTemplate } from "@/data/admissionTemplate/courseAdmissionTemplate";
// export const metadata = {
//   title: "Application for Course Admission | Aavedan Patra",
//   description: "Request letter format for seeking admission into any course or training program with sample wording.",
// };
export const metadata = {
  title: "कोर्स में प्रवेश के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "किसी भी कोर्स या प्रशिक्षण कार्यक्रम में प्रवेश के लिए आवेदन करने का सही प्रारूप और नमूना पत्र यहाँ देखें।",
};

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={courseAdmissionTemplate}
      />
    </>
  );
}
