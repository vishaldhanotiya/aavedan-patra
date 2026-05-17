import {
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "@/lib/pillarSchema";

const BASE_URL = "https://aavedanpatra.in";

export function SiteSchemas() {
  const schemas = [buildWebSiteSchema(BASE_URL), buildOrganizationSchema(BASE_URL)];

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
