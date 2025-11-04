"use client";

import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-container md:h-20 h-12 w-full flex items-center shadow-md bg-white sticky top-0 z-50">
      <div className="container px-4 md:px-6 lg:px-0">
        <nav className="header-inner-container flex relative justify-between" aria-label="Ana navigasyon">
          <div className="logo md:flex hidden h-20 py-1">
            <Link href="/" aria-label="Ana sayfaya git">
              <Image
                src="/images/logo-yazisiz-yesil.png"
                alt="Karaçalılık Çerkes Derneği Logo"
                className="h-full w-auto"
                width={200}
                height={80}
                priority
              />
            </Link>
          </div>
          <div className="mobil-logo md:hidden flex absolute z-50 left-2 h-20 py-2 -mt-3">
            <Link href="/" aria-label="Ana sayfaya git">
              <Image
                src="/images/logo-yazisiz-yesil.png"
                alt="Karaçalılık Çerkes Derneği Logo"
                className="h-full w-auto"
                width={200}
                height={80}
                priority
              />
            </Link>
          </div>
          <div className="links md:flex hidden items-center gap-12">
            <Link
              href="/"
              className="text-[var(--krcgreen)] hover:text-black transition-colors"
            >
              Anasayfa
            </Link>
            <Link
              href="/hakkimizda"
              className="text-[var(--krcgreen)] hover:text-black transition-colors"
            >
              Hakkımızda
            </Link>
            <Link
              href="/sulaleler"
              className="text-[var(--krcgreen)] hover:text-black transition-colors"
            >
              Sülaleler
            </Link>
            <Link
              href="/galeri"
              className="text-[var(--krcgreen)] hover:text-black transition-colors"
            >
              Galeri
            </Link>
            <Link
              href="/etkinlikler"
              className="text-[var(--krcgreen)] hover:text-black transition-colors"
            >
              Etkinlikler
            </Link>
            <Link
              href="/iletisim"
              className="text-[var(--krcgreen)] hover:text-black transition-colors"
            >
              İletişim
            </Link>
          </div>
          <div
            className={`mobile-links md:hidden flex absolute left-0 right-0 w-screen flex-col items-center gap-5 z-40 bg-white top-10 shadow-md transition-all duration-300 ${
              isMenuOpen ? "h-[260px] opacity-100" : "h-0 opacity-0 overflow-hidden"
            }`}
            role="menu"
            aria-hidden={!isMenuOpen}
          >
            <Link
              href="/"
              className="text-[var(--krcgreen)] hover:text-black transition-colors delay-200 text-base"
              onClick={(e) => {
                setIsMenuOpen(false);
              }}
              role="menuitem"
            >
              Anasayfa
            </Link>
            <Link
              href="/hakkimizda"
              className="text-[var(--krcgreen)] hover:text-black transition-colors delay-200 text-base"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Hakkımızda
            </Link>
            <Link
              href="/sulaleler"
              className="text-[var(--krcgreen)] hover:text-black transition-colors delay-200 text-base"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Sülaleler
            </Link>
            <Link
              href="/galeri"
              className="text-[var(--krcgreen)] hover:text-black transition-colors delay-200 text-base"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Galeri
            </Link>
            <Link
              href="/etkinlikler"
              className="text-[var(--krcgreen)] hover:text-black transition-colors delay-200 text-base"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Etkinlikler
            </Link>
            <Link
              href="/iletisim"
              className="text-[var(--krcgreen)] hover:text-black transition-colors delay-200 text-base"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              İletişim
            </Link>
          </div>
          <button
            className="menu md:hidden flex justify-end w-full px-2 focus:outline-none focus:ring-2 focus:ring-[var(--krcgreen)] rounded"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            aria-label="Menüyü aç/kapat"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <IoIosMenu className="w-8 h-8 text-[var(--krcgreen)]" />
          </button>
        </nav>
      </div>
    </header>
  );
};

