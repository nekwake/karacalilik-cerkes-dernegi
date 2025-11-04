import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../components/common/Container";
import { getAllEtkinlikler } from "../data/etkinlikler";

export default function Etkinlikler() {
  const etkinliklerList = getAllEtkinlikler();
  
  return (
    <section className="etkinlikler py-8 md:py-10">
      <Container>
        <h1 className="mb-6 md:mb-8 text-center text-3xl font-bold text-[var(--krcgreen)] md:text-4xl">
          Etkinlikler
        </h1>
      </Container>
      {etkinliklerList.map((etkinlik) => {
        return (
          <article className="etkinlik mb-8" key={etkinlik.id}>
            <Container>
              <Link href={`/etkinlikler/${etkinlik.slug}`}>
                <div className="etkinlik-inner-container bg-white md:h-[400px] rounded-2xl md:flex lg:flex shadow-krc overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="etkinlik-img-container relative md:max-w-[400px] md:min-w-[400px] w-full h-[250px] md:h-[400px]">
                    <Image
                      src={etkinlik.img}
                      alt={etkinlik.title}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <div className="etkinlik-content-container py-5 md:px-5 px-5 flex flex-col justify-between">
                    <div>
                      <div className="etkinlik-title-container text-xl pb-5 text-[var(--krcgreen)]">
                        <h2 className="etkinlik-title font-bold hover:underline">
                          {etkinlik.title}
                        </h2>
                      </div>
                      <div className="etkinlik-description-container">
                        <p className="etkinlik-description leading-relaxed line-clamp-6">
                          {etkinlik.text}
                        </p>
                      </div>
                      {etkinlik.keywords && etkinlik.keywords.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {etkinlik.keywords.slice(0, 3).map((keyword, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-[var(--krcgreen)] text-white text-xs rounded-full"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="etkinlik-date-container mt-auto pt-4">
                      <time
                        className="etkinlik-date text-gray-500 text-right block"
                        dateTime={etkinlik.date}
                      >
                        {etkinlik.date}
                      </time>
                    </div>
                  </div>
                </div>
              </Link>
            </Container>
          </article>
        );
      })}
    </section>
  );
}

