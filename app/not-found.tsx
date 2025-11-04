import React from "react";
import Link from "next/link";
import { Container } from "./components/common/Container";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 md:py-16">
      <Container>
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-[var(--krcgreen)] mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Sayfa Bulunamadı</h2>
          <p className="text-gray-600 mb-8">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-[var(--krcgreen)] text-white rounded-lg hover:bg-[var(--krcgreen)]/90 transition-colors font-medium"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </Container>
    </div>
  );
}

