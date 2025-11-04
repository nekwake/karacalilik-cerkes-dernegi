"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { FaInstagram } from "react-icons/fa6";
import { Container } from "../common/Container";

export const InstagramFeed: React.FC = () => {
  // Instagram embed script'ini yükle
  useEffect(() => {
    // Instagram embed script'ini yükle
    if (typeof window !== "undefined" && (window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  // Instagram paylaşım URL'leri
  const instagramPosts = [
    "https://www.instagram.com/p/DQUVazUjFCu/",
    "https://www.instagram.com/reel/DPY3lnejAHF/",
    "https://www.instagram.com/p/C8aDQUXoHTj/",
    // "https://www.instagram.com/reel/DNY4e-Go3G_/", // 4. post yorum satırına alındı - 3 post görüntülenecek
  ];

  return (
    <section className="instagram-feed py-8 md:py-10 bg-gray-50">
      <Script
        src="//www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if ((window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
          }
        }}
      />
      <Container>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaInstagram className="text-3xl text-[#E4405F]" />
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--krcgreen)]">
              Sosyal Medyada Biz
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            Son paylaşımlarımızı Instagram'da takip edin
          </p>
          
        </div>

        {/* Instagram Embed - Son 3 paylaşım */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
          {instagramPosts.map((url, index) => (
            <div key={index} className="instagram-embed-wrapper w-full">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

/*
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { Container } from "../common/Container";

interface InstagramPost {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
}

export const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch("/api/instagram");
        if (!response.ok) {
          throw new Error("Failed to fetch Instagram posts");
        }
        const data = await response.json();
        setPosts(data.data || []);
      } catch (err) {
        console.error("Instagram fetch error:", err);
        setError("Instagram gönderileri yüklenemedi");
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <section className="instagram-feed py-8 md:py-10 bg-gray-50">
      <Container>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaInstagram className="text-3xl text-[#E4405F]" />
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--krcgreen)]">
              Sosyal Medyada Biz
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            Son paylaşımlarımızı Instagram'da takip edin
          </p>
          <a
            href="https://www.instagram.com/karacalilikcerkesdernegi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#E4405F] text-white rounded-lg hover:bg-[#C13584] transition-colors font-medium"
          >
            Instagram'da Takip Et
          </a>
        </div>

        {loading && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gray-200 rounded-lg animate-pulse"
              />
            ))}
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 mt-8">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:opacity-90 transition-opacity group relative"
              >
                {post.media_type === "VIDEO" && post.thumbnail_url ? (
                  <Image
                    src={post.thumbnail_url}
                    alt={post.caption || "Instagram video"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                ) : (
                  <Image
                    src={post.media_url}
                    alt={post.caption || "Instagram post"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-opacity flex items-center justify-center">
                  <FaInstagram className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            <p>Henüz paylaşım bulunmamaktadır.</p>
          </div>
        )}
      </Container>
    </section>
  );
};
*/