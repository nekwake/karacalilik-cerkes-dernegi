# Karaçalılık Çerkes Derneği Website

Official website for Karaçalılık Çerkes Derneği (Circassian Association of Karaçalılık), a community organization based in Bandırma, Balıkesir.

## About

This website was developed by **Gökberk Tanış** for the Karaçalılık Çerkes Derneği. It serves as the official online presence for the association, providing information about the community, events, activities, and ways to get in touch.

## Features

- **Homepage**: Hero video section with association introduction and social media feed
- **About Us (Hakkımızda)**: Information about the association and community
- **Clans (Sülaleler)**: Information about Circassian clans
- **Gallery (Galeri)**: Photo gallery with lightbox functionality and automatic integration of event images
- **Events (Etkinlikler)**: Event listings with detail pages, date-based sorting, and SEO-friendly slugs
- **Contact (İletişim)**: Contact information, map, and social media links
- **Responsive Design**: Fully responsive across all device sizes
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, structured data, sitemap, and robots.txt
- **Image Optimization**: Next.js Image component for optimized image delivery
- **Accessibility**: Semantic HTML and ARIA attributes for better accessibility

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd karacalilik-cerkes-dernegi
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── components/          # Reusable React components
│   ├── common/         # Header, Footer, Container
│   ├── gallery/        # Gallery-related components
│   └── home/           # Homepage components
├── data/               # Data files (events, etc.)
├── etkinlikler/        # Events pages
├── galeri/             # Gallery page
├── hakkimizda/         # About page
├── iletisim/           # Contact page
├── sulaleler/          # Clans page
├── layout.tsx          # Root layout
├── page.tsx            # Homepage
├── globals.css         # Global styles
├── robots.ts           # Robots.txt
└── sitemap.ts          # Sitemap generation
```

## Environment Variables

No environment variables are currently required. The project uses static data and Instagram embeds.

## License

This project is private and proprietary. All rights reserved.

---

**Developed by Gökberk Tanış**

For the Karaçalılık Çerkes Derneği community.
