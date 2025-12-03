
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { bankJobApplicationPillar } from "@/data/bankJobApplicationPillar";

export const metadata = {
  title: "Application for banking job | Aavedan Patra",
  description: "Learn more about our aavedan patra",
};

export default function Page() {
  
  return (
    <>
      <PillarTemplateDetailsPage
        data={bankJobApplicationPillar}
      />
    </>
  );
}
