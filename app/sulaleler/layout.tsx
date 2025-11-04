import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sülaleler",
  description:
    "Karaçalılık Köyü sülaleleri ve aileleri. Acmuj, Basti, Bjaşö, Cuyeko, Hantuv ve diğer sülaleler hakkında bilgi edinin.",
  openGraph: {
    title: "Sülaleler | Karaçalılık Çerkes Derneği",
    description:
      "Karaçalılık Köyü sülaleleri ve aileleri hakkında bilgi edinin.",
  },
};

export default function SulalelerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

