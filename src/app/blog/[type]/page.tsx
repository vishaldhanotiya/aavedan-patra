import { SubcategoryExample } from "@/components/SubcategoryExample";
import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import {
  formalLettersData,
  informalLettersData,
  requestLettersData,
} from "@/data/subcategories";

export default async function Page(props: any) {
  const { type } = await props.params;

  console.log("Sub category====", type);
  if (type === "formal") {
    return <UniversalSubcategoryPage data={formalLettersData} />;
  } else if (type === "informal") {
    return <UniversalSubcategoryPage data={informalLettersData} />;
  } else if (type === "request") {
    return <UniversalSubcategoryPage data={requestLettersData} />;
  }
  return <SubcategoryExample />;
}
