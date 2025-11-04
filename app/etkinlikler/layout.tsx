import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Etkinlikler",
  description:
    "Karaçalılık Çerkes Derneği etkinlikleri, ziyaretler ve faaliyetler. Derneğimizin düzenlediği etkinliklerden ve önemli ziyaretlerden haberdar olun.",
  openGraph: {
    title: "Etkinlikler | Karaçalılık Çerkes Derneği",
    description:
      "Karaçalılık Çerkes Derneği etkinlikleri, ziyaretler ve faaliyetler.",
  },
};

export default function EtkinliklerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

