
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { bankJobApplicationTemplate } from "@/data/bankJobApplicationTemplate";

export const metadata = {
  title: "Application for Banking Job | Aavedan Patra",
  description: "Write a professional banking job application with correct format, sample letter, and tips for freshers and experienced candidates.",
};

export default function Page() {
  
  return (
    <>
      <PillarTemplateDetailsPage
        data={bankJobApplicationTemplate}
      />
    </>
  );
}
