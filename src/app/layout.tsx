import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { generateMetadata } from "@/metadata/metadata";

export const metadata = generateMetadata({
  title:
    "हिंदी आवेदन पत्र – नौकरी, स्कूल, बैंक व सरकारी प्रारूप",
  description:
    "200+ हिंदी आवेदन पत्र, प्रारूप, नमूने और टेम्पलेट। नौकरी, स्कूल, बैंक, छुट्टी, सरकारी योजना व ऋण आवेदन पत्र PDF डाउनलोड करें।",
  path: "/",
  type: "website",
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
