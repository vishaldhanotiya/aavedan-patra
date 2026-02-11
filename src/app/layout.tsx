import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { generateMetadata } from "@/metadata/metadata";

export const metadata = generateMetadata({
  title:
    "आवेदन पत्र – नौकरी, स्कूल, बैंक, सरकारी योजनाओं के हिंदी प्रारूप व नमूने",
  description:
    "200+ हिंदी आवेदन पत्र के सही प्रारूप, नमूने और उदाहरण। नौकरी, स्कूल प्रवेश, बैंक ऋण, सरकारी योजना आवेदन पत्र कैसे लिखें – फ्री डाउनलोड।",
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
