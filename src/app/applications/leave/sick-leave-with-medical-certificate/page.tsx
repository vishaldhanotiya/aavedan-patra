import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sickLeaveMedicalCertificate } from "@/data/leaveTemplate/sickLeavewithMedical";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "मेडिकल सर्टिफिकेट के साथ छुट्टी का आवेदन पत्र | आवेदन कैसे लिखें",
  description:
    "मेडिकल सर्टिफिकेट के साथ छुट्टी का आवेदन पत्र लिखने का सही तरीका यहाँ विस्तार से बताया गया है। इस पेज पर आपको ऑफिस या स्कूल में बीमारी के दौरान मेडिकल प्रमाण के साथ छुट्टी लेने के लिए उपयुक्त आवेदन प्रारूप, तैयार नमूना पत्र, किन परिस्थितियों में सर्टिफिकेट आवश्यक होता है और आवेदन लिखते समय ध्यान रखने योग्य महत्वपूर्ण बिंदु मिलेंगे, जिससे आपका आवेदन अधिक विश्वसनीय और प्रभावी बन सके।",
  path: "/applications/leave/sick-leave-with-medical-certificate",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={sickLeaveMedicalCertificate} />
    </>
  );
}
