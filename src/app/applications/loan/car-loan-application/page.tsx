import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { carLoanTemplate } from "@/data/loanTemplate/carLoanTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:  "कार लोन आवेदन – नई या पुरानी गाड़ी के लिए ऋण", 
  description:
  "नई या पुरानी कार खरीदने के लिए बैंक से वाहन ऋण मांगने का आवेदन प्रारूप। वाहन विवरण, कीमत और किश्त क्षमता दिखाएं।",
  path: "/applications/loan/car-loan-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={carLoanTemplate}  />
    </>
  );
}
