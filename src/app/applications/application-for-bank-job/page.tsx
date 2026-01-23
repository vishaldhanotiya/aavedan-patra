
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { bankJobApplicationTemplate } from "@/data/jobTemplate/bankJobApplicationTemplate";

// export const metadata = {
//   title: "Application for Banking Job | Aavedan Patra",
//   description: "Write a professional banking job application with correct format, sample letter, and tips for freshers and experienced candidates.",
// };

export const metadata = {
  title: "बैंकिंग नौकरी के लिए आवेदन पत्र | आवेदन कैसे लिखें",
  description:
    "बैंकिंग नौकरी के लिए आवेदन पत्र कैसे लिखें? यहाँ सही प्रारूप, नमूना आवेदन पत्र और नए व अनुभवी उम्मीदवारों के लिए उपयोगी सुझाव दिए गए हैं।",
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
