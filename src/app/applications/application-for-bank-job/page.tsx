
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { bankJobApplicationTemplate } from "@/data/jobTemplate/bankJobApplicationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "बैंकिंग नौकरी के लिए आवेदन पत्र | आवेदन कैसे लिखें",
  description:
    "बैंकिंग नौकरी के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ पाएँ। इस पेज पर बैंक में नौकरी के लिए आवेदन करने का सही प्रारूप, तैयार नमूना आवेदन पत्र, फ्रेशर और अनुभवी उम्मीदवारों के लिए अलग-अलग उदाहरण, जरूरी बातें और लिखने के आसान सुझाव दिए गए हैं, जिससे आप अपना आवेदन सही और प्रभावी तरीके से लिख सकें।",
  path: "/applications/application-for-bank-job",
});
export default function Page() {  
  return (
    <>
      <PillarTemplateDetailsPage
        data={bankJobApplicationTemplate}
      />
    </>
  );
}

