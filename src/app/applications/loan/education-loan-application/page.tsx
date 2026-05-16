import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { educationLoanTemplate } from "@/data/loanTemplate/educationLoanTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "एजुकेशन लोन आवेदन – पढ़ाई के लिए ऋण पत्र",
  description:
    "भारत या विदेश में उच्च शिक्षा के लिए बैंक से शिक्षा ऋण मांगने का आवेदन प्रारूप। कोर्स, कॉलेज और फीस विवरण शामिल करें।",
  path: "/applications/loan/education-loan-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={educationLoanTemplate} />
    </>
  );
}
