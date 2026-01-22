
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { bankJobApplicationTemplate } from "@/data/jobTemplate/bankJobApplicationTemplate";

// export const metadata = {
//   title: "Application for Banking Job | Aavedan Patra",
//   description: "Write a professional banking job application with correct format, sample letter, and tips for freshers and experienced candidates.",
// };

export const metadata = {
  title: "Banking Job Application | आवेदन पत्र कैसे लिखें",
  description:
    "Banking job के लिए application कैसे लिखें? यहाँ सही format, sample आवेदन पत्र और freshers व experienced candidates के लिए tips दिए गए हैं।",
};

export default function Page() {
  
  return (
    <>
      <PillarTemplateDetailsPage
        data={bankJobApplicationTemplate}
      />
    </>
  );
}
