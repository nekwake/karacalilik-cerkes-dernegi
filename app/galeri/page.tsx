"use client";

import React, { useState, useMemo } from "react";
import { Container } from "../components/common/Container";
import { GalleryImage } from "../components/gallery/GalleryImage";
import { ImageLightbox } from "../components/gallery/ImageLightbox";
import { getAllEtkinlikler } from "../data/etkinlikler";

interface GaleriItem {
  img: string;
  alt: string;
}

// Statik galeri resimleri
const staticGaleryList: GaleriItem[] = [
  { img: "/images/galeripics/ilce-bsk-1.jpg", alt: "İlçe Başkanlığı Ziyareti 1" },
  { img: "/images/galeripics/ilce-bsk-2.jpg", alt: "İlçe Başkanlığı Ziyareti 2" },
  { img: "/images/galeripics/ilce-bsk-3.jpg", alt: "İlçe Başkanlığı Ziyareti 3" },
  { img: "/images/galeripics/ilce-bsk-4.jpg", alt: "İlçe Başkanlığı Ziyareti 4" },
  { img: "/images/galeripics/ilce-bsk-5.jpg", alt: "İlçe Başkanlığı Ziyareti 5" },
  { img: "/images/galeripics/ilce-bsk-6.jpg", alt: "İlçe Başkanlığı Ziyareti 6" },
  { img: "/images/galeripics/yucelyilmaz-1.jpg", alt: "Yücel Yılmaz Ziyareti 1" },
  { img: "/images/galeripics/yucelyilmaz-2.jpg", alt: "Yücel Yılmaz Ziyareti 2" },
  { img: "/images/galeripics/yucelyilmaz-3.jpg", alt: "Yücel Yılmaz Ziyareti 3" },
  { img: "/images/galeripics/yucelyilmaz-4.jpg", alt: "Yücel Yılmaz Ziyareti 4" },
  { img: "/images/galeripics/yucelyilmaz-5.jpg", alt: "Yücel Yılmaz Ziyareti 5" },
  { img: "/images/galeripics/yucelyilmaz-6.jpg", alt: "Yücel Yılmaz Ziyareti 6" },
  { img: "/images/galeripics/yucelyilmaz-7.jpg", alt: "Yücel Yılmaz Ziyareti 7" },
  { img: "/images/galeripics/yucelyilmaz-10.jpg", alt: "Yücel Yılmaz Ziyareti 10" },
  { img: "/images/galeripics/yucelyilmaz-11.jpg", alt: "Yücel Yılmaz Ziyareti 11" },
  { img: "/images/galeripics/yucelyilmaz-8.jpg", alt: "Yücel Yılmaz Ziyareti 8" },
  { img: "/images/galeripics/yucelyilmaz-9.jpg", alt: "Yücel Yılmaz Ziyareti 9" },
  { img: "/images/galeripics/yucelyilmaz-12.jpg", alt: "Yücel Yılmaz Ziyareti 12" },
  { img: "/images/galeripics/yucelyilmaz-13.jpg", alt: "Yücel Yılmaz Ziyareti 13" },
  { img: "/images/galeripics/tolga-tosun-1.jpg", alt: "Tolga Tosun Ziyareti 1" },
  { img: "/images/galeripics/tolga-tosun-2.jpg", alt: "Tolga Tosun Ziyareti 2" },
  { img: "/images/galeripics/tolga-tosun-3.jpg", alt: "Tolga Tosun Ziyareti 3" },
  { img: "/images/galeripics/tolga-tosun-4.jpg", alt: "Tolga Tosun Ziyareti 4" },
];

export default function Galeri() {
  // Etkinliklerden gelen resimleri al
  const etkinlikResimleri = useMemo(() => {
    const etkinlikler = getAllEtkinlikler();
    return etkinlikler.map((etkinlik) => ({
      img: etkinlik.img,
      alt: etkinlik.title,
    }));
  }, []);

  // Tüm galeri resimlerini birleştir (önce etkinlik resimleri, sonra statik resimler)
  const galeryList = useMemo(() => {
    return [...etkinlikResimleri, ...staticGaleryList];
  }, [etkinlikResimleri]);

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
    if (selectedImageIndex !== null && selectedImageIndex < galeryList.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const currentImage =
    selectedImageIndex !== null ? galeryList[selectedImageIndex] : null;

  return (
    <>
      <Container>
        <div className="py-8 md:py-10">
          <h1 className="mb-6 md:mb-8 text-center text-3xl font-bold text-[var(--krcgreen)] md:text-4xl">
            Galeri
          </h1>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:px-0 px-6 mb-8">
            {galeryList.map((galeri, index) => (
              <GalleryImage
                key={index}
                src={galeri.img}
                alt={galeri.alt}
                onClick={() => openLightbox(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>

      {currentImage && (
        <ImageLightbox
          image={currentImage.img}
          alt={currentImage.alt}
          isOpen={selectedImageIndex !== null}
          onClose={closeLightbox}
          onPrevious={selectedImageIndex! > 0 ? goToPrevious : undefined}
          onNext={
            selectedImageIndex! < galeryList.length - 1 ? goToNext : undefined
          }
          hasPrevious={selectedImageIndex! > 0}
          hasNext={selectedImageIndex! < galeryList.length - 1}
        />
      )}
    </>
  );
}
