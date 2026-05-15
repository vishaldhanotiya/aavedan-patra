import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sponsorshipRequestTemplate } from "@/data/requestTemplate/sponsorshipRequestTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:  "स्पॉन्सरशिप अनुरोध पत्र – Sponsorship Request Letter Hindi | AavedanPatra",
  description:
    "कार्यक्रम, खेल या शिक्षा के लिए Sponsorship Request Letter। प्रभावी हिंदी प्रारूप, तैयार नमूना और स्पॉन्सर पाने की पूरी गाइड।",   
  path: "/letters/sponsorship-request-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={sponsorshipRequestTemplate} />
    </>
  );
}
