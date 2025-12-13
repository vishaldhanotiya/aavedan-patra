import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Aavedan Patra – आवेदन पत्र | हिंदी में आवेदन पत्र के फ़ॉर्मेट",
  description:
    "हिंदी में 1000+ आवेदन पत्र के फॉर्मेट डाउनलोड करें। स्कूल, कॉलेज, ऑफिस, सरकारी कार्य और नौकरी के लिए तैयार आवेदन पत्र टेम्पलेट्स।",
  alternates: {
    canonical: "https://aavedanpatra.in",
    languages: {
      "hi-IN": "https://aavedanpatra.in",
      "x-default": "https://aavedanpatra.in",
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-33VXHQ194F" />
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
