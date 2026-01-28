import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { generateMetadata } from "@/metadata/metadata";

export const metadata = generateMetadata({
  title: "Aavedan Patra – आवेदन पत्र | हिंदी में आवेदन पत्र के फ़ॉर्मेट",
  description:
    "हिंदी में 200+ आवेदन पत्र के फॉर्मेट डाउनलोड करें। इस वेबसाइट पर स्कूल, कॉलेज, ऑफिस, सरकारी कार्य, नौकरी, छुट्टी, प्रमाण पत्र, लोन, एडमिशन और छात्रवृत्ति से जुड़े सभी आवेदन पत्रों के आसान फॉर्मेट, तैयार उदाहरण और सही लिखने का तरीका एक ही जगह मिलेगा।",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      {process.env.NODE_ENV !== "development" && (
        <GoogleAnalytics gaId="G-33VXHQ194F" />
      )}
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <LanguageSwitcher />
            <ThemeToggle />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
