"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../common/Container";
import { ImageLightbox } from "../gallery/ImageLightbox";
import { Etkinlik } from "../../data/etkinlikler";

interface EtkinlikDetayContentProps {
  etkinlik: Etkinlik;
  digerEtkinlikler: Etkinlik[];
}

export const EtkinlikDetayContent: React.FC<EtkinlikDetayContentProps> = ({
  etkinlik,
  digerEtkinlikler,
}) => {
  // Tüm görselleri birleştir (ana fotoğraf + ek fotoğraflar)
  const allImages = useMemo(() => {
    const images = [etkinlik.img];
    if (etkinlik.additionalImages && etkinlik.additionalImages.length > 0) {
      images.push(...etkinlik.additionalImages);
    }
    return images;
  }, [etkinlik]);

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < allImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const currentImage =
    selectedImageIndex !== null ? allImages[selectedImageIndex] : null;

  return (
    <>
      <article className="etkinlik-detay py-8 md:py-10">
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
                {/* Ana Fotoğraf - Tıklanabilir */}
                <div
                  className="relative w-full h-[400px] md:h-[500px] cursor-pointer group"
                  onClick={() => openLightbox(0)}
                >
                  <Image
                    src={etkinlik.img}
                    alt={etkinlik.title}
                    fill
                    className="object-cover group-hover:opacity-90 transition-opacity"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-lg font-semibold">
                      Görüntülemek için tıklayın
                    </div>
                  </div>
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
                  
                  {/* Ek Fotoğraflar */}
                  {etkinlik.additionalImages && etkinlik.additionalImages.length > 0 && (
                    <div className="mt-8 mb-6">
                      <h2 className="text-lg font-semibold text-[var(--krcgreen)] mb-4">
                        Fotoğraflar
                      </h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {etkinlik.additionalImages.map((img, index) => (
                          <div
                            key={index}
                            className="relative w-full aspect-square rounded-lg overflow-hidden cursor-pointer group"
                            onClick={() => openLightbox(index + 1)}
                          >
                            <Image
                              src={img}
                              alt={`${etkinlik.title} - Fotoğraf ${index + 1}`}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform"
                              sizes="(max-width: 768px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
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

      {/* Lightbox */}
      {currentImage && (
        <ImageLightbox
          image={currentImage}
          alt={etkinlik.title}
          isOpen={selectedImageIndex !== null}
          onClose={closeLightbox}
          onPrevious={selectedImageIndex! > 0 ? goToPrevious : undefined}
          onNext={
            selectedImageIndex! < allImages.length - 1 ? goToNext : undefined
          }
          hasPrevious={selectedImageIndex! > 0}
          hasNext={selectedImageIndex! < allImages.length - 1}
        />
      )}
    </>
  );
};

