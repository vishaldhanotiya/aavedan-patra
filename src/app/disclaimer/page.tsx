import { Disclaimer } from "@/components/Disclaimer";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "Disclaimer | Aavedan Patra",
  description:
    "Read the disclaimer for Aavedan Patra. The information provided on this website is for general guidance only and is not intended as legal, official, or professional advice.",
  path: "/disclaimer",
});
export default function Page() {
  return <Disclaimer />;
}
