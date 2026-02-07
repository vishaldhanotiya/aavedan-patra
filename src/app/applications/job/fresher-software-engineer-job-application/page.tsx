import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { fresherSoftwareJobTemplate } from "@/data/jobTemplate/fresherSoftwareJobTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "सॉफ्टवेयर इंजीनियर नौकरी के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "सॉफ्टवेयर इंजीनियर नौकरी के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर सॉफ्टवेयर इंजीनियर पद के लिए आवेदन करने का सही प्रारूप, तैयार नमूना आवेदन पत्र, फ्रेशर और अनुभवी उम्मीदवारों के लिए उदाहरण और लिखने के आसान सुझाव दिए गए हैं, जिससे आप अपना आवेदन प्रोफेशनल तरीके से तैयार कर सकें।",
  path: "/applications/job/fresher-software-engineer-job-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={fresherSoftwareJobTemplate} />
    </>
  );
}
