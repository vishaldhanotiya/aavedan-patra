// src/utils/metadata.ts
export function generateMetadata({
  title,
  description,
  path,
  locale = "hi-IN",
}: {
  title: string;
  description: string;
  path: string;
  locale?: string;
}) {
  const baseUrl = "https://aavedanpatra.in";
  const canonicalUrl = `${baseUrl}${path}`;
  
  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "hi-IN": canonicalUrl,
        "en-US": canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Aavedan Patra",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
};