import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { PillarTemplateSchemas } from "@/components/PillarTemplateSchemas";
import type { PillarSchemaInput } from "@/lib/pillarSchema";

interface PillarTemplatePageProps {
  data: Omit<PillarSchemaInput, "path"> & {
    variations: unknown[];
    editorVariations?: unknown[];
    relatedTemplates: unknown[];
    blogArticles: unknown[];
    category: { en: string; hi: string };
  };
  path: string;
  singleTemplate?: boolean;
}

export function PillarTemplatePage({
  data,
  path,
  singleTemplate = false,
}: PillarTemplatePageProps) {
  return (
    <>
      <PillarTemplateSchemas
        path={path}
        title={data.title}
        subtitle={data.subtitle}
        updatedDate={data.updatedDate}
        breadcrumb={data.breadcrumb}
        howToWrite={data.howToWrite}
        faqs={data.faqs}
      />
      <PillarTemplateDetailsPage
        data={data as Parameters<typeof PillarTemplateDetailsPage>[0]["data"]}
        singleTemplate={singleTemplate}
        suppressSchema
      />
    </>
  );
}
