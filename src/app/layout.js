// src/app/layout.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";
import { Poppins, DM_Serif_Text } from "next/font/google";
import Script from "next/script";
import ClientShell from "./ClientShell";
// import LoaderGate from "@/components/LoaderGate";

export const metadata = {
  metadataBase: new URL("https://www.nakshatranamahacreations.com"),
  title: {
    default: "Nakshatra Namaha Creations | Website Developers in Bangalore",
    // template: "%s | Nakshatra Namaha Creations",
  },
  description:
    "Nakshatra Namaha Creations is best website developers in Bangalore, specializes in creating custom, user-friendly and responsive websites for your online presence.",
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "x-default": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    maxImagePreview: "large",
    googleBot: { index: true, follow: true, maxImagePreview: "large" },
  },
  other: {
    bingbot: "index,follow",
    "format-detection": "telephone=no",
    // Twitter alt text (since Next doesn't expose a dedicated field)
    "twitter:image:alt":
      "Nakshatra Namaha Creations — Website & App Development Company in Bangalore",
    // Optional: safer referrer policy
    referrer: "origin-when-cross-origin",
  },
  icons: {
    icon: [
      { url: "/media/nnclogo.png", sizes: "32x32" },
      { url: "/media/nnclogo.png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#0d0d0d" }],
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Nakshatra Namaha Creations",
    url: "/",
    title: "Website Developers in Bangalore | Custom Web Development",
    description:
      "Expert website developers in Bangalore creating user-friendly, SEO-friendly and high-performance custom websites to grow your business online effectively.",

  },

  twitter: {
    card: "summary_large_image",
    site: "@nncbengaluru",
    creator: "@nncbengaluru",
    title: "Website Developers in Bangalore | Custom Web Development",
    description:
      "Expert website developers in Bangalore creating user-friendly, SEO-friendly and high-performance custom websites to grow your business online effectively.",
    // Choose one primary image (keep the 1200x630)
    // images: ["/media/og/og-1200x630.jpg"],
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],   // only the weights you use
  display: "swap",                          // shows fallback text immediately
  variable: "--font-poppins",
});

const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
  style: ["normal","italic"],
  display: "swap",
  variable: "--font-dmserif",
});


// Viewport/meta tag (themeColor here)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={`${poppins.variable} ${dmSerif.variable}`}>
      <body suppressHydrationWarning>
        {/* SITE UI */}
        <ClientShell>{children}</ClientShell>

        {/* Client-only loader placed AFTER content so it never blocks SSR */}
       {/*} <LoaderGate />*/}

        {/* ====== STRUCTURED DATA ====== */}

        {/* WebSite + SearchAction (backs sitelinks search box) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.nakshatranamahacreations.com/#website",
  "url": "https://www.nakshatranamahacreations.com/",
  "name": "Nakshatra Namaha Creations",
  "inLanguage": "en-IN",
  "publisher": { "@id": "https://www.nakshatranamahacreations.com/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.nakshatranamahacreations.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
            }),
          }}
        />

        {/* Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id":
                "https://www.nakshatranamahacreations.com/#organization",
              name: "Nakshatra Namaha Creations",
              url: "https://www.nakshatranamahacreations.com",
              logo:
                "https://www.nakshatranamahacreations.com/media/logo.png",
              sameAs: [
                "https://www.facebook.com/nncdigital",
                "https://www.instagram.com/nnc.digitalbengaluru",
                "https://www.linkedin.com/company/nakshatra-namaha-creations",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9900566466",
                contactType: "Customer Support",
                areaServed: "IN",
                availableLanguage: ["en", "kn", "hi"],
              },
            }),
          }}
        />

        {/* LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id":
                "https://www.nakshatranamahacreations.com/#localbusiness",
              name: "Nakshatra Namaha Creations",
              // image:
              //   "https://www.nakshatranamahacreations.com/media/og/og-1200x630.jpg",
              url: "https://www.nakshatranamahacreations.com",
              telephone: "+91-9900566466",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "1st floor, Darshan Plaza, Dwaraka Nagar, Banashankari 6th Stage 1st Block, Channasandra",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                postalCode: "560061",
                addressCountry: "IN",
              },
              openingHours: ["Mo-Sa 09:30-18:30"],
              priceRange: "₹₹",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: 120,
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "12.9716",
                longitude: "77.5946",
              },
              sameAs: [
                "https://www.facebook.com/nncdigital",
                "https://www.instagram.com/nnc.digitalbengaluru",
                "https://www.linkedin.com/company/nakshatra-namaha-creations",
              ],
            }),
          }}
        />

        {/* ====== TAGS / SCRIPTS ====== */}

        {/* (Optional) Preload a critical hero image for LCP */}
        <link
          rel="preload"
          as="image"
          // href="/media/hero-1200.webp"
          // fetchpriority attr is not valid on <link>; it's for <img>. Keeping preload is fine.
        />

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PB7CNFK7');`}
        </Script>

        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PB7CNFK7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  );
}
