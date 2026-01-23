import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { birthdayInvitationTemplate } from "@/data/invitationTemplate/birthdayInvitationTemplate";
export const metadata = {
  title: "जन्मदिन पार्टी निमंत्रण पत्र | आवेदन पत्र",
  description:
    "दोस्तों और परिवार के लिए सरल और मित्रवत जन्मदिन पार्टी निमंत्रण पत्र के नमूने।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={birthdayInvitationTemplate}
      />
    </>
  );
}
