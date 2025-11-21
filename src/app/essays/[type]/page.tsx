import { SubcategoryExample } from "@/components/SubcategoryExample";
import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import {
  essays100WordsData,
  essays200WordsData,
  essays500WordsData,
  moralStoriesData,
  paragraphsData,
  speechesData,
} from "@/data/subcategories";
export const runtime = "edge";

export default async function Page(props: any) {
  const { type } = await props.params;

  if (type === "100-words") {
    return <UniversalSubcategoryPage data={essays100WordsData} />;
  } else if (type === "200-words") {
    return <UniversalSubcategoryPage data={essays200WordsData} />;
  } else if (type === "500-words") {
    return <UniversalSubcategoryPage data={essays500WordsData} />;
  } else if (type === "speeches") {
    return <UniversalSubcategoryPage data={speechesData} />;
  } else if (type === "stories") {
    return <UniversalSubcategoryPage data={moralStoriesData} />;
  } else if (type === "paragraphs") {
    return <UniversalSubcategoryPage data={paragraphsData} />;
  }
  return <SubcategoryExample />;
}
