import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "../../components/common/Container";
import { getEtkinlikBySlug, getAllEtkinlikler } from "../../data/etkinlikler";

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
    <article className="etkinlik-detay py-8 md:py-10">
      <ArticleStructuredData etkinlik={etkinlik} />
      <Container>
        <Link
          href="/etkinlikler"
          className="text-[var(--krcgreen)] hover:underline mb-4 inline-block"
        >
          ← Etkinliklere Dön
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Sol Kolon - Ana İçerik */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-krc overflow-hidden">
              <div className="relative w-full h-[400px] md:h-[500px]">
                <Image
                  src={etkinlik.img}
                  alt={etkinlik.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 md:p-10">
                <h1 className="text-xl md:text-2xl font-bold text-[var(--krcgreen)] mb-4">
                  {etkinlik.title}
                </h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  {etkinlik.keywords?.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[var(--krcgreen)] text-white text-xs rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                <div className="prose max-w-none mb-6">
                  <p className="text-base leading-relaxed">{etkinlik.text}</p>
                </div>
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                  <time className="text-gray-500" dateTime={etkinlik.date}>
                    {etkinlik.date}
                  </time>
                  <Link
                    href="/etkinlikler"
                    className="text-[var(--krcgreen)] hover:underline"
                  >
                    Tüm Etkinlikler →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Kolon - Diğer Etkinlikler */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-krc p-6 sticky top-4">
              <h2 className="text-xl font-bold text-[var(--krcgreen)] mb-6">
                Diğer Etkinliklerimiz
              </h2>
              <div className="space-y-4">
                {digerEtkinlikler.map((digerEtkinlik) => (
                  <Link
                    key={digerEtkinlik.id}
                    href={`/etkinlikler/${digerEtkinlik.slug}`}
                    className="block group hover:opacity-90 transition-opacity"
                  >
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={digerEtkinlik.img}
                          alt={digerEtkinlik.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                          sizes="96px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-[var(--krcgreen)] mb-1 line-clamp-2 group-hover:underline">
                          {digerEtkinlik.title}
                        </h3>
                        <time className="text-xs text-gray-500" dateTime={digerEtkinlik.date}>
                          {digerEtkinlik.date}
                        </time>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href="/etkinlikler"
                className="mt-6 block text-center text-sm text-[var(--krcgreen)] hover:underline font-medium"
              >
                Tüm Etkinlikleri Gör →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}

