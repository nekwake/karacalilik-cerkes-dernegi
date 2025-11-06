import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getEtkinlikBySlug, getAllEtkinlikler } from "../../data/etkinlikler";
import { EtkinlikDetayContent } from "../../components/etkinlik/EtkinlikDetayContent";

function ArticleStructuredData({ etkinlik }: { etkinlik: any }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: etkinlik.title,
    description: etkinlik.text.substring(0, 160),
    image: `https://karacalilikcerkesdernegi.com${etkinlik.img}`,
    datePublished: etkinlik.date,
    author: {
      "@type": "Organization",
      name: "Karaçalılık Çerkes Derneği",
    },
    publisher: {
      "@type": "Organization",
      name: "Karaçalılık Çerkes Derneği",
      logo: {
        "@type": "ImageObject",
        url: "https://karacalilikcerkesdernegi.com/images/logo-yazisiz-yesil.png",
      },
    },
    keywords: etkinlik.keywords?.join(", ") || "",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const etkinlikler = getAllEtkinlikler();
  return etkinlikler.map((etkinlik) => ({
    slug: etkinlik.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const etkinlik = getEtkinlikBySlug(slug);

  if (!etkinlik) {
    return {
      title: "Etkinlik Bulunamadı",
    };
  }

  return {
    title: `${etkinlik.title} | Karaçalılık Çerkes Derneği`,
    description: etkinlik.text.substring(0, 160) + "...",
    openGraph: {
      title: `${etkinlik.title} | Karaçalılık Çerkes Derneği`,
      description: etkinlik.text.substring(0, 160) + "...",
      images: [etkinlik.img],
      type: "article",
      publishedTime: etkinlik.date,
    },
    keywords: etkinlik.keywords || [],
  };
}

export default async function EtkinlikDetay({ params }: PageProps) {
  const { slug } = await params;
  const etkinlik = getEtkinlikBySlug(slug);

  if (!etkinlik) {
    notFound();
  }

  // Diğer etkinlikleri getir (mevcut etkinlik hariç, son 3)
  const tumEtkinlikler = getAllEtkinlikler();
  const digerEtkinlikler = tumEtkinlikler
    .filter((e) => e.id !== etkinlik.id)
    .slice(0, 3);

  return (
    <>
      <ArticleStructuredData etkinlik={etkinlik} />
      <EtkinlikDetayContent etkinlik={etkinlik} digerEtkinlikler={digerEtkinlikler} />
    </>
  );
}

