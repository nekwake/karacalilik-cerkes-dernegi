import React from "react";
import { FaPhone, FaInstagram, FaFacebook } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Container } from "../components/common/Container";

export default function Iletisim() {
  return (
    <section className="contact-container py-8 md:py-10 min-h-[calc(100vh-200px)]">
      <Container>
        <h1 className="mb-6 md:mb-8 text-center text-3xl font-bold text-[var(--krcgreen)] md:text-4xl">
          İletişim
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Desktop'ta sol, Mobilde altta - Harita */}
          <div className="bg-white rounded-2xl shadow-krc overflow-hidden aspect-[4/3] order-2 md:order-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1525.7058576176494!2d28.10150088928217!3d40.11082737132499!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1706031304374!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Karaçalılık Mahallesi harita konumu"
              aria-label="Karaçalılık Mahallesi harita konumu"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Desktop'ta sağ, Mobilde üstte - İletişim Bilgileri */}
          <div className="bg-white rounded-2xl shadow-krc p-6 md:p-8 flex flex-col justify-center md:aspect-[4/3] order-1 md:order-2">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="map-icon fill-[var(--krcgreen)] text-lg flex-shrink-0" aria-hidden="true" />
                <h2 className="text-base font-semibold text-[var(--krcgreen)]">
                  Karaçalılık Mahallesi/Bandırma/Balıkesir
                </h2>
              </div>
              
              <div className="phone-description flex items-center gap-3">
                <FaPhone className="phone-icon fill-[var(--krcgreen)] text-lg flex-shrink-0" aria-hidden="true" />
                <a href="tel:+905455952839" className="hover:text-[var(--krcgreen)] transition-colors text-base">
                  +90 545 595 2839
                </a>
              </div>
              
              <div className="mail-description flex items-center gap-3">
                <IoMail className="mail-icon fill-[var(--krcgreen)] text-lg flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:karacalilikcerkesdernegi@gmail.com"
                  className="hover:text-[var(--krcgreen)] transition-colors text-base break-all"
                >
                  karacalilikcerkesdernegi@gmail.com
                </a>
              </div>
              
              <div className="social-media flex flex-col gap-3 pt-4 mt-4 border-t border-gray-200">
                <a
                  href="https://www.instagram.com/karacalilikcerkesdernegi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#E4405F] transition-colors"
                  aria-label="Instagram hesabımızı ziyaret edin"
                >
                  <FaInstagram className="text-xl fill-[#E4405F]" />
                  <span className="text-base">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/groups/18548854520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#1877F2] transition-colors"
                  aria-label="Facebook grubumuzu ziyaret edin"
                >
                  <FaFacebook className="text-xl fill-[#1877F2]" />
                  <span className="text-base">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

