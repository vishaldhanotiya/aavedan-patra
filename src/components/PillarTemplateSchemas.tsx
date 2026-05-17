import {
  buildArticleSchema,
  buildFaqPageSchema,
  buildHowToSchema,
  type PillarSchemaInput,
} from "@/lib/pillarSchema";

const BASE_URL = "https://aavedanpatra.in";

interface PillarTemplateSchemasProps extends PillarSchemaInput {
  includeHowTo?: boolean;
}

/** Server-rendered JSON-LD for crawlers (FAQ, Article, optional HowTo). */
export function PillarTemplateSchemas({
  includeHowTo = true,
  ...input
}: PillarTemplateSchemasProps) {
  const schemas = [
    buildFaqPageSchema(input),
    buildArticleSchema(input, BASE_URL),
    ...(includeHowTo && input.howToWrite.tips.length > 0
      ? [buildHowToSchema(input)]
      : []),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`${schema["@type"]}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
