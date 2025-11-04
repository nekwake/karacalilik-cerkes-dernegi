import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Karaçalılık Köyü'nün tarihi, Çerkes sürgünü ve Bandırma'ya yerleşim hikayesi. Köyümüzün 1880'li yıllardan beri sürdürdüğü varlığı hakkında bilgi edinin.",
  openGraph: {
    title: "Hakkımızda | Karaçalılık Çerkes Derneği",
    description:
      "Karaçalılık Köyü'nün tarihi, Çerkes sürgünü ve Bandırma'ya yerleşim hikayesi.",
  },
};

export default function HakkimizdaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

