"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { IoClose, IoDownload } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ImageLightboxProps {
  image: string;
  isOpen: boolean;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
  alt?: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  image,
  isOpen,
  onClose,
  onPrevious,
  onNext,
  hasPrevious = false,
  hasNext = false,
  alt = "Galeri görseli",
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "ArrowLeft" && hasPrevious && onPrevious) {
        onPrevious();
      }
      if (e.key === "ArrowRight" && hasNext && onNext) {
        onNext();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, hasPrevious, hasNext, onPrevious, onNext, onClose]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = image;
    link.download = image.split("/").pop() || "image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Görsel görüntüleyici"
    >
      <div
        className="relative max-h-full max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="lightbox-button absolute -top-12 right-0 z-10 rounded-full bg-black/90 p-2 transition-all hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Kapat"
        >
          <IoClose className="h-6 w-6" style={{ color: "white", fill: "white" }} />
        </button>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="lightbox-button absolute -top-12 right-12 z-10 rounded-full bg-black/50 p-2 transition-all hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="İndir"
        >
          <IoDownload className="h-6 w-6" style={{ color: "white", fill: "white" }} />
        </button>

        {/* Previous Button */}
        {hasPrevious && onPrevious && (
          <button
            onClick={onPrevious}
            className="lightbox-button absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 transition-all hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white md:left-8 z-[10]"
            aria-label="Önceki görsel"
          >
            <FaArrowLeft className="h-6 w-6" style={{ color: "white", fill: "white" }} />
          </button>
        )}

        {/* Next Button */}
        {hasNext && onNext && (
          <button
            onClick={onNext}
            className="lightbox-button absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 transition-all hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white md:right-8 z-[10]"
            aria-label="Sonraki görsel"
          >
            <FaArrowRight className="h-6 w-6" style={{ color: "white", fill: "white" }} />
          </button>
        )}

        {/* Image */}
        <div className="relative max-h-[90vh] max-w-[90vw]">
          <Image
            src={image}
            alt={alt}
            width={1200}
            height={800}
            className="max-h-[90vh] w-auto rounded-lg object-contain"
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

