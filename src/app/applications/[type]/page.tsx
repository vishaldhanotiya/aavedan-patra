
import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import { jobCategory } from "@/data/category/jobCategory";
import { leaveCategory } from "@/data/category/leaveCategory";
import { admissionApplications } from "@/data/subcategories/admissionApplications";
import { certificateRequest } from "@/data/subcategories/certificateRequest";
import { loanApplications } from "@/data/subcategories/loanApplications";
import { scholarshipApplications } from "@/data/subcategories/scholarshipApplications";
import { PropsType } from "@/data/type/type";
export const metadata = {
  title: "नौकरी के लिए आवेदन पत्र | आवेदन पत्र",
   description: "इस पेज पर नौकरी के लिए आवेदन पत्र के सभी जरूरी फॉर्मेट और उदाहरण उपलब्ध हैं। यहाँ सरकारी और प्राइवेट नौकरी आवेदन, छुट्टी आवेदन, प्रमाण पत्र अनुरोध, लोन आवेदन, एडमिशन आवेदन, छात्रवृत्ति आवेदन और अन्य सभी प्रकार के आवेदन पत्र सरल भाषा में दिए गए हैं। हर आवेदन पत्र के साथ सही तरीका, तैयार नमूने और लिखने के आसान सुझाव भी मिलेंगे।",
};
export default async function Page({ params }: PropsType) {
  const { type } =  await params; // ❗ No await needed
  if (type === "job") {
    return <UniversalSubcategoryPage data={jobCategory} />;
  } else if (type === "leave") {
    return <UniversalSubcategoryPage data={leaveCategory} />;
  } else if (type === "certificate-request") {
    return <UniversalSubcategoryPage data={certificateRequest} />;
  } else if (type === "loan") {
    return <UniversalSubcategoryPage data={loanApplications} />;
  } else if (type === "admission") {
    return <UniversalSubcategoryPage data={admissionApplications} />;
  } else if (type === "scholarship") {
    return <UniversalSubcategoryPage data={scholarshipApplications} />;
  }

  return <UniversalSubcategoryPage data={jobCategory} />;
}
