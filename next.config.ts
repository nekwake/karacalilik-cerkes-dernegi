import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages için statik çıktı (out/ klasörü)
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
