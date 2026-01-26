import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { birthdayInvitationTemplate } from "@/data/invitationTemplate/birthdayInvitationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "जन्मदिन पार्टी निमंत्रण पत्र | आवेदन पत्र",
  description:
    "जन्मदिन पार्टी के लिए निमंत्रण पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर दोस्तों और परिवार के लिए सरल, प्यारे और मित्रवत जन्मदिन पार्टी निमंत्रण पत्र के तैयार नमूने, सही प्रारूप और लिखने के आसान तरीके दिए गए हैं, जिससे आप सुंदर और प्रभावी निमंत्रण पत्र बना सकें।",
  path: "/letters/birthday-party-invitation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={birthdayInvitationTemplate} />
    </>
  );
}
