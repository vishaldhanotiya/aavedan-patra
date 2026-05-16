/** Shared JSON-LD builders for pillar / template detail pages (default Hindi for hi-IN site). */

export interface BilingualText {
  en: string;
  hi: string;
}

export interface PillarSchemaInput {
  title: BilingualText;
  subtitle: BilingualText;
  updatedDate: string;
  path: string;
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
