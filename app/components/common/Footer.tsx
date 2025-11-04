import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa6";

export const Footer: React.FC = () => {
  return (
    <footer className="footer-container w-full bg-[var(--krcgreen)] mt-auto">
      <div className="container">
        <div className="footer-inner-container flex h-full w-full items-center justify-between px-6 py-6 md:min-h-[320px]">
          <div className="logo h-full w-auto lg:flex-[2] flex-[2]">
            <Link href="/" className="h-full w-auto" aria-label="Ana sayfaya git">
              <Image
                src="/images/white-logo-smaller.png"
                alt="Karaçalılık Çerkes Derneği Logo"
                className="h-full w-auto md:h-72"
                width={300}
                height={288}
              />
            </Link>
          </div>
          <nav className="links text-white flex flex-col lg:flex-row gap-2 lg:gap-12 lg:flex-[5] w-full justify-end flex-[3] lg:items-start items-end" aria-label="Footer navigasyon">
            <Link href="/" className="text-white">
              Anasayfa
            </Link>
            <Link href="/hakkimizda" className="text-white">
              Hakkımızda
            </Link>
            <Link href="/sulaleler" className="text-white">
              Sülaleler
            </Link>
            <Link href="/galeri" className="text-white">
              Galeri
            </Link>
            <Link href="/etkinlikler" className="text-white">
              Etkinlikler
            </Link>
            <Link href="/iletisim" className="text-white hover:opacity-80 transition-opacity">
              İletişim
            </Link>
          </nav>
        </div>
        <div className="social-media-links flex justify-center items-center gap-4 pb-2">
          <a
            href="https://www.instagram.com/karacalilikcerkesdernegi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors"
            aria-label="Instagram hesabımızı ziyaret edin"
          >
            <FaInstagram className="text-2xl md:text-3xl text-white transition-colors" />
          </a>
          <a
            href="https://www.facebook.com/groups/18548854520"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors"
            aria-label="Facebook grubumuzu ziyaret edin"
          >
            <FaFacebook className="text-2xl md:text-3xl text-white transition-colors" />
          </a>
        </div>
        <div className="footer-text text-white text-center pb-3 text-xs md:text-sm">
          <p>© Gökberk Tanış - 2024</p>
        </div>
      </div>
    </footer>
  );
};

