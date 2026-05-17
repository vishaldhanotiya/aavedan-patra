"use client";

import { usePathname } from "next/navigation";

const BASE_URL = "https://aavedanpatra.in";

function toTitle(segment: string) {
  return decodeURIComponent(segment)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function GlobalBreadcrumbSchema() {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    ...segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join("/")}`;

      return {
        "@type": "ListItem",
        position: index + 2,
        name: toTitle(segment),
        item: `${BASE_URL}${path}`,
      };
    }),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement,
        }),
      }}
    />
  );
}
