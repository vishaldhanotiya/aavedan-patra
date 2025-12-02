import { SubcategoryExample } from "@/components/SubcategoryExample";
import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import { complaintLetters, formalLetters, informalLetters, invitationLetters, requestLetters, resignationLetters } from "@/data/subcategories";


export default async function Page(props: any) {
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
  return <SubcategoryExample />;
}
