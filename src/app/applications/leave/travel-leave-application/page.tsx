import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { casualTravelLeave } from "@/data/leaveTemplate/casualLeaveTravel";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "यात्रा के लिए छुट्टी का आवेदन पत्र | आवेदन कैसे लिखें",
  description:
    "यात्रा के लिए छुट्टी का आवेदन पत्र कैसे लिखा जाता है, इसकी पूरी जानकारी यहाँ दी गई है। इस पेज पर आपको ऑफिस या स्कूल से यात्रा पर जाने के लिए छुट्टी मांगने का सही प्रारूप, तैयार नमूना आवेदन पत्र, यात्रा की अवधि और कारण को प्रभावी तरीके से लिखने के सुझाव, तथा स्वीकृति मिलने की संभावना बढ़ाने के महत्वपूर्ण टिप्स मिलेंगे, जिससे आपका आवेदन स्पष्ट और पेशेवर तरीके से तैयार हो सके।",
  path: "/applications/leave/travel-leave-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={casualTravelLeave} />
    </>
  );
}
