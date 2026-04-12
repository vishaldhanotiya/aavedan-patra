import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { viralInfectionLeave } from "@/data/leaveTemplate/viralInfectionLeave";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "वायरल इन्फेक्शन के लिए छुट्टी का आवेदन पत्र | आवेदन कैसे लिखें",
  description: "वायरल इन्फेक्शन के कारण छुट्टी का आवेदन पत्र कैसे लिखा जाता है, इसकी पूरी जानकारी यहाँ दी गई है। इस पेज पर ऑफिस या स्कूल में बुखार, कमजोरी या संक्रमण के दौरान छुट्टी लेने के लिए सही आवेदन प्रारूप, तैयार नमूना पत्र, कितने दिनों की छुट्टी मांगनी चाहिए और आवेदन लिखते समय ध्यान रखने योग्य जरूरी बिंदु विस्तार से समझाए गए हैं, जिससे आपका आवेदन स्पष्ट, प्रभावी और आसानी से स्वीकार्य बन सके।",
  path: "/applications/leave/viral-infection-leave-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={viralInfectionLeave}  />
    </>
  );
}
