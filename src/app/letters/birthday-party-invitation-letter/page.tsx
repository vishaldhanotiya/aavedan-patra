import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { birthdayInvitationTemplate } from "@/data/invitationTemplate/birthdayInvitationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "जन्मदिन निमंत्रण पत्र – दोस्तों व परिवार के लिए हिंदी प्रारूप",
  description:
    "जन्मदिन पार्टी निमंत्रण पत्र के तैयार हिंदी प्रारूप व सुंदर नमूने। दोस्तों, रिश्तेदारों के लिए सरल, आकर्षक निमंत्रण पत्र फ्री डाउनलोड करें।",
  path: "/letters/birthday-party-invitation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={birthdayInvitationTemplate} />
    </>
  );
}
