import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { StructuredData } from "./components/home/StructuredData";

const montserrat = Montserrat({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Karaçalılık Çerkes Derneği",
    template: "%s | Karaçalılık Çerkes Derneği",
  },
  description:
    "Karaçalılık Çerkes Derneği resmi websitesi. Bandırma'da faaliyet gösteren derneğimiz hakkında bilgi alabilir, etkinliklerimizi takip edebilir ve iletişime geçebilirsiniz.",
  keywords: [
    "Karaçalılık",
    "Çerkes Derneği",
    "Bandırma",
    "Balıkesir",
    "Çerkes kültürü",
    "dernek",
  ],
  authors: [{ name: "Karaçalılık Çerkes Derneği" }],
  creator: "Karaçalılık Çerkes Derneği",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://karacalilikcerkesdernegi.com",
    siteName: "Karaçalılık Çerkes Derneği",
    title: "Karaçalılık Çerkes Derneği",
    description:
      "Karaçalılık Çerkes Derneği resmi websitesi. Bandırma'da faaliyet gösteren derneğimiz hakkında bilgi alabilir, etkinliklerimizi takip edebilir ve iletişime geçebilirsiniz.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karaçalılık Çerkes Derneği",
    description:
      "Karaçalılık Çerkes Derneği resmi websitesi. Bandırma'da faaliyet gösteren derneğimiz hakkında bilgi alabilir, etkinliklerimizi takip edebilir ve iletişime geçebilirsiniz.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: [
      {
        url: "/favicon.ico",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  verification: {
    // Google Search Console verification code eklenebilir
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full">
      <body className={`${montserrat.variable} antialiased flex flex-col min-h-screen`}>
        <StructuredData />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
