import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import { jobCategory } from "@/data/category/jobCategory";
import { createMetadata } from "@/metadata/metadata";

export const metadata = createMetadata({
  title: "नौकरी आवेदन पत्र हिंदी में – Job Application Format – AavedanPatra",
  description:
    "सरकारी व प्राइवेट नौकरी के लिए तैयार हिंदी आवेदन पत्र। टीचर, बैंक, सॉफ्टवेयर, मैनेजर सहित 10+ पदों के प्रारूप और नमूने – अभी देखें।",
  path: "/applications/job",
  type: "website",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "नौकरी आवेदन में क्या शामिल करना चाहिए?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "नौकरी आवेदन में आपका नाम, पता, पद का नाम, अनुभव, शैक्षणिक योग्यता और संपर्क जानकारी शामिल होनी चाहिए।",
      },
    },
    {
      "@type": "Question",
      name: "नौकरी आवेदन कितना लंबा होना चाहिए?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "नौकरी आवेदन पत्र एक पृष्ठ से अधिक नहीं होना चाहिए — आमतौर पर 200 से 300 शब्द पर्याप्त हैं।",
      },
    },
    {
      "@type": "Question",
      name: "क्या मुझे आवेदन के साथ अपना रिज्यूमे संलग्न करना चाहिए?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "हाँ, रिज्यूमे संलग्न करना हमेशा अच्छा होता है। यह नियोक्ता को आपकी योग्यता और अनुभव की पूरी जानकारी देता है।",
      },
    },
  ],
};

export default async function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <UniversalSubcategoryPage data={jobCategory} />
    </>
  );
}
