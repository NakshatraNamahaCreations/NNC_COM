// app/page.js (Server Component)
import HomeClient from "./HomeClient";
import Head from "next/head";

{/*export const metadata = {
  title: "Website Developers in Bangalore | Custom Web Development",
  description:
    "Expert website developers in Bangalore creating SEO-friendly, responsive, and user-focused custom websites to help your business grow.",
  alternates: {
    canonical: "https://www.nakshatranamahacreations.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.nakshatranamahacreations.com/",
    title: "Website Developers in Bangalore | Custom Web Development",
    description:
      "Expert website developers in Bangalore creating SEO-friendly, responsive, and user-focused custom websites to help your business grow.",
    images: [
      {
     
        width: 1200,
        height: 630,
        alt:
          "Nakshatra Namaha Creations — Website & App Development Company in Bangalore",
      },
      {
        url: "https://www.nakshatranamahacreations.com/media/og/og-1200x1200.jpg",
        width: 1200,
        height: 1200,
        alt: "Nakshatra Namaha Creations — Brand preview (square)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Developers in Bangalore | Custom Web Development",
    description:
      "Expert website developers in Bangalore creating SEO-friendly, responsive, and user-focused custom websites to help your business grow.",

  },
  other: {
    "twitter:image:alt":
      "Nakshatra Namaha Creations — Website & App Development Company in Bangalore",
  },
};*/}

export default function HomePage() {
  const published = "2025-09-01T08:00:00+05:30";
  const modified = "2025-09-03T12:00:00+05:30";
  const site = "https://www.nakshatranamahacreations.com";
  const title = "Nakshatra Namaha Creations | Website Developers in Bangalore";
  const description =
    "Nakshatra Namaha Creations is best website developers in Bangalore, specializes in creating custom, user-friendly and responsive websites for your online presence.";

  const faqs = [
    {
      question: "What types of websites do you develop?",
      answer:
        "We develop static, dynamic, e-commerce, portfolio and custom web applications based on your business requirements.",
    },
    {
      question: "Can you help with Google Ads and Facebook Ads?",
      answer:
        "Yes, we create and manage Google Ads, Facebook Ads and Instagram campaigns to maximize your brand visibility.",
    },
    {
      question: "Do you offer website maintenance and support?",
      answer:
        "Yes, we provide website maintenance, security updates, bug fixes and performance optimization.",
    },
    {
      question: "Can you produce corporate videos and advertisements?",
      answer:
        "Yes, we offer scriptwriting, video shooting, editing, motion graphics and voice-over services for corporate promotions.",
    },
    {
      question: "Will I own the source code and rights to my project?",
      answer:
        "Yes, once the project is completed and full payment is made, you will have full ownership of the source code and intellectual property.",
    },
  ];

  // -------- JSON-LD payloads --------
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site}/#website`,
    url: `${site}/`,
    name: "Nakshatra Namaha Creations",
    inLanguage: "en-IN",
    publisher: { "@id": `${site}/#organization` },
    datePublished: published,
    dateModified: modified,
  };

  const webpageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site}/#webpage`,
    url: `${site}/`,
    name: "Website Developers in Bangalore | Custom Web Development",
    isPartOf: { "@id": `${site}/#website` },
    about: { "@id": `${site}/#organization` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      // url: `${site}/media/og/og-1200x630.jpg`,
      width: 1200,
      height: 630,
    },
    datePublished: published,
    dateModified: modified,
    lastReviewed: modified,
    inLanguage: "en-IN",
  };

  const servicesLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service", 
        "@id": `${site}/#service-web`,
        name: "Website Development",
        serviceType: "Website Development",
        description:
          "Custom, responsive, and SEO-optimized website development in Bangalore.",
        url: `${site}/website-development-company-in-bangalore`,
        areaServed: [
          { "@type": "City", name: "Bengaluru" },
          { "@type": "Country", name: "India" },
        ],
        provider: { "@type": "Organization", "@id": `${site}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${site}/#service-apps`,
        name: "Mobile App Development",
        serviceType: "Mobile App Development",
        description:
          "iOS and Android app development with strong performance and scalability.",
        url: `${site}/mobile-app-development-company-in-bangalore`,
        areaServed: [
          { "@type": "City", name: "Bengaluru" },
          { "@type": "Country", name: "India" },
        ],
        provider: { "@type": "Organization", "@id": `${site}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${site}/#service-digital`,
        name: "Digital Marketing",
        serviceType: "Digital Marketing",
        description:
          "SEO, SEM, and social media marketing to grow your online visibility.",
        url: `${site}/digital-marketing-agency-in-bangalore`,
        areaServed: [
          { "@type": "City", name: "Bengaluru" },
          { "@type": "Country", name: "India" },
        ],
        provider: { "@type": "Organization", "@id": `${site}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${site}/#service-animation`,
        name: "2D Animation",
        serviceType: "2D Animation",
        description:
          "Creative 2D animation for marketing, branding, and storytelling.",
        url: `${site}/2d-animation-studio-in-bangalore`,
        areaServed: [
          { "@type": "City", name: "Bengaluru" },
          { "@type": "Country", name: "India" },
        ],
        provider: { "@type": "Organization", "@id": `${site}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${site}/#service-video`,
        name: "Corporate Video Production",
        serviceType: "Corporate Video Production",
        description:
          "Professional corporate video production for branding and events.",
        url: `${site}/corporate-video-production-company-in-bangalore`,
        areaServed: [
          { "@type": "City", name: "Bengaluru" },
          { "@type": "Country", name: "India" },
        ],
        provider: { "@type": "Organization", "@id": `${site}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${site}/#service-design`,
        name: "Graphic Design",
        serviceType: "Graphic Design",
        description:
          "Logo design, branding, and creative design solutions for businesses.",
        url: `${site}/graphic-design-company-in-bangalore`,
        areaServed: [
          { "@type": "City", name: "Bengaluru" },
          { "@type": "Country", name: "India" },
        ],
        provider: { "@type": "Organization", "@id": `${site}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${site}/#service-b2b`,
        name: "B2B Marketing",
        serviceType: "B2B Marketing",
        description:
          "Targeted B2B strategies to generate leads and build relationships.",
        url: `${site}/b2b-marketing-agency-in-bangalore`,
        areaServed: [
          { "@type": "City", name: "Bengaluru" },
          { "@type": "Country", name: "India" },
        ],
        provider: { "@type": "Organization", "@id": `${site}/#organization` },
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
 <Head>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${site}/`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Nakshatra Namaha Creations" />
      <meta property="og:url" content={`${site}/`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_IN" />

  

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nncbengaluru" />
      <meta name="twitter:creator" content="@nncbengaluru" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
  


      {/* Optional hreflang if you really have multiple language/region versions */}
      {/* <link rel="alternate" hrefLang="en-IN" href={`${site}/`} />
      <link rel="alternate" hrefLang="x-default" href={`${site}/`} /> */}
    </Head>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <main>
        {/* Visible, SSR H1 (don’t hide this; style it in CSS if needed) */}
        <h2 style={{ position: "absolute", left: "-9999px" }}>
          Best Website Development Company in Bangalore
        </h2>

        {/* Your interactive/home content */}
        <HomeClient />

        {/* Optional <noscript> CTA for non-JS users/crawlers */}
        <noscript>
          <p>
            Need a fast, SEO-first website?{" "}
            <a href="/contact-us">Request a quote</a>.
          </p>
        </noscript>
      </main>
    </>
  );
}
