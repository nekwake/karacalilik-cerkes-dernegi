"use client";

import React from "react";

interface GalleryImageProps {
  src: string;
  alt: string;
  onClick: () => void;
  index: number;
}

export const GalleryImage: React.FC<GalleryImageProps> = ({
  src,
  alt,
  onClick,
  index,
}) => {
  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-lg transition-transform hover:scale-105 aspect-square bg-gray-100 w-full"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`${alt} - Büyütmek için tıklayın`}
    >
      <div className="relative w-full h-full">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/20" />
    </div>
  );
};

