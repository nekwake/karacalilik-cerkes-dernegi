import React from "react";

export const StructuredData: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Karaçalılık Çerkes Derneği",
    url: "https://karacalilikcerkesdernegi.com",
    logo: "https://karacalilikcerkesdernegi.com/images/logo-yazisiz-yesil.png",
    description:
      "Karaçalılık Çerkes Derneği resmi websitesi. Bandırma'da faaliyet gösteren derneğimiz hakkında bilgi alabilir, etkinliklerimizi takip edebilir ve iletişime geçebilirsiniz.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Karaçalılık Mahallesi",
      addressLocality: "Bandırma",
      addressRegion: "Balıkesir",
      addressCountry: "TR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-545-595-2839",
      contactType: "customer service",
      email: "karacalilikcerkesdernegi@gmail.com",
    },
    sameAs: [
      "https://www.instagram.com/karacalilikcerkesdernegi/",
      "https://www.facebook.com/groups/18548854520",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
};

