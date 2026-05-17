import type { Metadata } from "next";

const SITE_NAME = "Aavedan Patra";
const BASE_URL = "https://aavedanpatra.in";

const defaultOgImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} – Hindi application letter templates`,
};

export function createMetadata({
  title,
  description,
  path,
  locale = "hi-IN",
  type = "article",
}: {
  title: string;
  description: string;
  path: string;
  locale?: string;
  /** Use "website" for homepage/listing pages; "article" for template/content pages */
  type?: "website" | "article";
}): Metadata {
  const normalizedPath = path.replace(/\/+$/, "") || "/";
  const canonicalUrl = `${BASE_URL}${normalizedPath}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: { absolute: title },
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "hi-IN": canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale,
      type,
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage.url],
    },
    other: {
      "ai-content-declaration": "human-authored",
      "llm-content": "allowed",
    },
  };
}
