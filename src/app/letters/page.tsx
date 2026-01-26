import { DynamicCategoryPage } from "@/components/DynamicCategoryPage";
import { lettersCategory } from "@/data/category/lettersCategory";
export const metadata = {
  title: "विभिन्न प्रकार के पत्र | आवेदन पत्र",
  description:
    "विभिन्न प्रकार के पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर औपचारिक और अनौपचारिक पत्रों के सभी प्रकार, उनके सही प्रारूप, तैयार उदाहरण और लिखने के आसान तरीके दिए गए हैं, जिससे छात्र, अभिभावक और नौकरीपेशा लोग सही और प्रभावी पत्र लिख सकें।",
};
export default function Page() {
  return <DynamicCategoryPage category={lettersCategory} />;
}
