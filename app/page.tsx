import React from "react";
import type { Metadata } from "next";
import { HeroVideo } from "./components/home/HeroVideo";
import { InstagramFeed } from "./components/home/InstagramFeed";

export const metadata: Metadata = {
  title: "Anasayfa",
  description:
    "Karaçalılık Çerkes Derneği resmi websitesine hoş geldiniz. Bandırma'da faaliyet gösteren derneğimiz hakkında bilgi alabilir, etkinliklerimizi takip edebilir ve iletişime geçebilirsiniz.",
  openGraph: {
    title: "Karaçalılık Çerkes Derneği - Anasayfa",
    description:
      "Karaçalılık Çerkes Derneği resmi websitesine hoş geldiniz. Bandırma'da faaliyet gösteren derneğimiz hakkında bilgi alabilir, etkinliklerimizi takip edebilir ve iletişime geçebilirsiniz.",
  },
};

export default function Home() {
  return (
    <div className="home-container relative">
      <div className="hero-section relative">
        <HeroVideo />
        <div className="center-content absolute w-11/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
          <h1 className="font-black text-4xl sm:text-5xl md:text-6xl mb-4">
            Diasporada bir Çerkes Köyü.
          </h1>
          <p className="text-lg sm:text-base md:text-xl mb-6">
            Karaçalılık Çerkes Derneği websitesine hoş geldiniz. Derneğimize
            kaydolabilir veya tüzüğümüzü okuyabilirsiniz.
          </p>
          <div className="buttons-container mt-4 flex flex-wrap justify-center gap-4">
            <a
              href="/documents/uye-kayit-formu.txt"
              download
              className="register-button text-[var(--krcwhite)] bg-[var(--krcgreen)] hover:text-[var(--krcgreen)] hover:bg-[var(--krcwhite)] transition-colors font-medium rounded-2xl text-lg sm:text-base md:text-lg px-5 py-2.5 text-center focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Üye kayıt formunu indir"
            >
              Üye Kayıt Formu
            </a>
            <a
              href="/documents/dernek-tuzugu.txt"
              download
              className="constitution-button text-[var(--krcgreen)] bg-[var(--krcwhite)] hover:text-[var(--krcwhite)] hover:bg-[var(--krcgreen)] transition-colors font-medium rounded-2xl text-lg sm:text-base md:text-lg px-5 py-2.5 text-center focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Dernek tüzüğünü indir"
            >
              Dernek Tüzüğü
            </a>
          </div>
        </div>
      </div>
      <InstagramFeed />
    </div>
  );
}
