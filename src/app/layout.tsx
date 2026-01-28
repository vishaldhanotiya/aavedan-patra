import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { generateMetadata } from "@/metadata/metadata";

export const metadata = generateMetadata({
  title: "आवेदन पत्र - Aavedan Patra | हिंदी आवेदन पत्र फ़ॉर्मेट",
  description:
    "हिंदी आवेदन पत्र टेम्पलेट देखें। 200+ आवेदन पत्र फ़ॉर्मेट स्कूल, कॉलेज, ऑफिस व सरकारी काम के लिए तैयार उदाहरण के अनुसार उपलब्ध।",
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
