/** Shared JSON-LD builders for pillar / template detail pages (default Hindi for hi-IN site). */

export interface BilingualText {
  en: string;
  hi: string;
}

export interface PillarSchemaInput {
  title: BilingualText;
  subtitle: BilingualText;
  updatedDate: string;
  pageMetaData: {
    author: BilingualText;
    updatedAt: string;
    views: string;
    likes: string;
  };
  path: string;
  breadcrumb?: {
    category: BilingualText & { slug?: string };
    subcategory: BilingualText & { slug?: string };
    template: BilingualText & { slug?: string };
  };
  howToWrite: {
    title: BilingualText;
    tips: { text: BilingualText }[];
  };
  faqs: { question: BilingualText; answer: BilingualText }[];
  language?: "hi" | "en";
}

const lang = (input: PillarSchemaInput) => input.language ?? "hi";

export function buildFaqPageSchema(input: PillarSchemaInput) {
  const l = lang(input);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: input.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question[l],
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer[l],
      },
    })),
  };
}

export function buildArticleSchema(input: PillarSchemaInput, baseUrl: string) {
  const l = lang(input);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title[l],
    description: input.subtitle[l],
    dateModified: input.updatedDate,
    mainEntityOfPage: `${baseUrl}${input.path}`,
    author: {
      "@type": "Organization",
      name: "Aavedan Patra",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Aavedan Patra",
      url: baseUrl,
    },
  };
}

export function buildHowToSchema(input: PillarSchemaInput) {
  const l = lang(input);
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.howToWrite.title[l],
    description: input.subtitle[l],
    step: input.howToWrite.tips.map((tip, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `${index + 1}. ${tip.text[l].slice(0, 80)}${tip.text[l].length > 80 ? "…" : ""}`,
      text: tip.text[l],
    })),
  };
}

export function buildBreadcrumbListSchema(
  input: PillarSchemaInput,
  baseUrl: string,
) {
  const l = lang(input);
  const items = [
    { name: "Home", item: "/" },
    ...(input.breadcrumb
      ? [
          {
            name: input.breadcrumb.category[l],
            item: input.breadcrumb.category.slug || "/",
          },
          {
            name: input.breadcrumb.subcategory[l],
            item: input.breadcrumb.subcategory.slug || input.path,
          },
          {
            name: input.breadcrumb.template[l],
            item: input.breadcrumb.template.slug || input.path,
          },
        ]
      : [{ name: input.title[l], item: input.path }]),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.item === "/" ? "" : item.item}`,
    })),
  };
}

export function buildWebSiteSchema(baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aavedan Patra",
    alternateName: "AavedanPatra",
    url: baseUrl,
    inLanguage: "hi-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildOrganizationSchema(baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aavedan Patra",
    url: baseUrl,
    logo: `${baseUrl}/favicon.ico`,
  };
}
