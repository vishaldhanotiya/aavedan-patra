import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import { formalLetters, informalLetters, requestLetters } from "@/data/subcategories";
import { PropsType } from "@/data/type/type";

export default async function Page(props: PropsType) {
  const { type } = await props.params;
  if (type === "formal") {
    return <UniversalSubcategoryPage data={formalLetters} />;
  } else if (type === "informal") {
    return <UniversalSubcategoryPage data={informalLetters} />;
  } else if (type === "request") {
    return <UniversalSubcategoryPage data={requestLetters} />;
  }
    return <UniversalSubcategoryPage data={formalLetters} />;
}
