import React from "react";
import Image from "next/image";
import { Container } from "../components/common/Container";

interface Sulale {
  img: string;
  name: string;
  desc: string;
}

const sulaleList: Sulale[] = [
  {
    img: "/images/sulaleler/acmuj.png",
    name: "Acmuj",
    desc: "Barslan, Evgin, Kızıldere Aileleri",
  },
  {
    img: "/images/nophoto.png",
    name: "Aşuko",
    desc: "Yüken Ailesi",
  },
  {
    img: "/images/sulaleler/basti.png",
    name: "Basti",
    desc: "Ergün Ailesi",
  },
  {
    img: "/images/sulaleler/bjaso.png",
    name: "Bjaşö",
    desc: "Özay Ailesi",
  },
  {
    img: "/images/sulaleler/cuyeko.png",
    name: "Cuyeko",
    desc: "Akbulat Ailesi",
  },
  {
    img: "/images/sulaleler/hantuv.png",
    name: "Hantuv",
    desc: "Tören Ailesi",
  },
  {
    img: "/images/sulaleler/hidzelt.png",
    name: "Hıdzelt",
    desc: "Evre Ailesi",
  },
  {
    img: "/images/nophoto.png",
    name: "Hupşı",
    desc: "Göçmez Ailesi",
  },
  {
    img: "/images/sulaleler/hust.png",
    name: "Huşt",
    desc: "Baykala Ailesi",
  },
  {
    img: "/images/sulaleler/jane.png",
    name: "Jane",
    desc: "Tanış Ailesi",
  },
  {
    img: "/images/sulaleler/kitij.png",
    name: "Kıtıj",
    desc: "İçöz Ailesi",
  },
  {
    img: "/images/nophoto.png",
    name: "Psınow",
    desc: "Arslanhan Ailesi",
  },
  {
    img: "/images/sulaleler/thawko.png",
    name: "Thawko",
    desc: "Erşayan Ailesi",
  },
  {
    img: "/images/sulaleler/tletseruk.png",
    name: "Tletseruk",
    desc: "Samsa Ailesi",
  },
  {
    img: "/images/nophoto.png",
    name: "Yogume",
    desc: "Bayburi Ailesi",
  },
];

export default function Sulaleler() {
  return (
    <section className="sulaleler py-8 md:py-10">
      <Container>
        <h1 className="mb-6 md:mb-8 text-center text-3xl font-bold text-[var(--krcgreen)] md:text-4xl">
          Sülaleler
        </h1>
        <div className="grid-container grid md:grid-cols-4 grid-cols-3 my-10 gap-4 md:gap-6 md:px-0 px-6 mb-8">
          {sulaleList.map((sulale, index) => {
            return (
              <article className="grid-item text-center flex flex-col items-center" key={index}>
                <div className="img-container rounded-full border-4 border-[var(--krcgreen)] overflow-hidden w-24 h-24 md:w-40 md:h-40 flex items-center justify-center">
                  <Image
                    src={sulale.img}
                    alt={`${sulale.name} sülalesi arması`}
                    className="mix-blend-multiply w-full h-full object-contain"
                    width={200}
                    height={200}
                  />
                </div>
                <h2 className="font-bold md:text-xl text-base mt-4">
                  {sulale.name}
                </h2>
                <p className="md:text-base text-sm mb-4 text-gray-600">{sulale.desc}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

