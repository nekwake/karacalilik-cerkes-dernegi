import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Karaçalılık Çerkes Derneği iletişim bilgileri. Adres: Karaçalılık Mahallesi, Bandırma, Balıkesir. Telefon ve e-posta bilgileri.",
  openGraph: {
    title: "İletişim | Karaçalılık Çerkes Derneği",
    description:
      "Karaçalılık Çerkes Derneği iletişim bilgileri ve adres.",
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

