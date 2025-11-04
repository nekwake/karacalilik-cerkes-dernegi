import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Karaçalılık Çerkes Derneği etkinliklerinden ve ziyaretlerinden fotoğraflar. Derneğimizin faaliyetlerini ve anılarını buradan görebilirsiniz.",
  openGraph: {
    title: "Galeri | Karaçalılık Çerkes Derneği",
    description:
      "Karaçalılık Çerkes Derneği etkinliklerinden ve ziyaretlerinden fotoğraflar.",
    type: "website",
  },
};

export default function GaleriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <React.Fragment>{children}</React.Fragment>;
}

