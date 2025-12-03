import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import { complaintLetters, formalLetters, informalLetters, invitationLetters, requestLetters, resignationLetters } from "@/data/subcategories";
import { PropsType } from "@/data/type/type";
export const metadata = {
  title: "Letters | Aavedan Patra",
  description: "Learn more about our aavedan patra",
};

export default async function Page(props: PropsType) {
  const { type } = await props.params;
  if (type === "formal") {
    return <UniversalSubcategoryPage data={formalLetters} />;
  } else if (type === "informal") {
    return <UniversalSubcategoryPage data={informalLetters} />;
  } else if (type === "request") {
    return <UniversalSubcategoryPage data={requestLetters} />;
  } else if (type === "complaint") {
    return <UniversalSubcategoryPage data={complaintLetters} />;
  } else if (type === "resignation") {
    return <UniversalSubcategoryPage data={resignationLetters} />;
  } else if (type === "invitation") {
    return <UniversalSubcategoryPage data={invitationLetters} />;
  }
  return  <UniversalSubcategoryPage data={formalLetters} />;
}
