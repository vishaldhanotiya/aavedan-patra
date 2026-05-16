import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { donationRequestTemplate } from "@/data/requestTemplate/donationRequestTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "दान अनुरोध पत्र – Donation Request Letter Hindi | AavedanPatra",
  description:
    "NGO, स्कूल, सामाजिक कार्यों के लिए Donation Request Letter। विनम्र और प्रभावशाली हिंदी प्रारूप, तैयार नमूने और लिखने की गाइड।",
  path: "/letters/request/donation-request-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={donationRequestTemplate}
      />
    </>
  );
}
