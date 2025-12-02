import { SubcategoryExample } from "@/components/SubcategoryExample";
import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import { formalLetters, informalLetters, requestLetters } from "@/data/subcategories";

export default async function Page(props: any) {
  const { type } = await props.params;

  console.log("Sub category====", type);
  if (type === "formal") {
    return <UniversalSubcategoryPage data={formalLetters} />;
  } else if (type === "informal") {
    return <UniversalSubcategoryPage data={informalLetters} />;
  } else if (type === "request") {
    return <UniversalSubcategoryPage data={requestLetters} />;
  }
  return <SubcategoryExample />;
}
