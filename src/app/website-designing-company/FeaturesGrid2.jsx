"use client";

import Image from "next/image";
import styles from "../../styles/FeaturesGrid2.module.css";

const FEATURES = [
  {
    icon: "/media/icons/idea (1).png",
    title: "Creativity and Unique Design",
    desc: "As a Website Designing Company, we focus on delivering creative and unique designs that highlight your brand’s individuality. Every design element is carefully chosen to reflect your values, helping you stand out in a crowded digital space. Our goal is to combine innovation with brand identity, so your website not only looks impressive but also leaves a lasting impression on visitors.",
    accent: "#09c2a3",
  },
  
  {
    icon:"/media/icons/responsive-design.png",
    title: "Responsive Design for All Devices",
    desc: "Our Website Designing Company ensures seamless performance across desktops, laptops, tablets, and smartphones. By following a mobile-first strategy, we guarantee that your website adapts perfectly to all screen sizes. This improves user experience, increases accessibility, and maximizes customer engagement across digital touchpoints.",
    accent: "#c99a14",
  },
  {
    icon: "/media/icons/web.png",
    title: "Professional Design Standards",
    desc: "Being a trusted Website Designing Company, we adhere to the highest industry standards in design and coding. From pixel-perfect layouts to secure and efficient frameworks, we deliver websites that balance professional aesthetics with long-term stability. This approach ensures your website continues to serve your business effectively for years.",
    accent: "#4a8ec4",
  },
  {
    icon: "/media/icons/mobile.png",
    title: "Optimized Page Speed",
    desc: "Our Website Designing Company emphasizes speed optimization to reduce bounce rates and improve user satisfaction. We fine-tune images, streamline code, and use efficient hosting practices so your website loads quickly on any device. A fast website not only keeps visitors engaged but also helps improve search engine rankings and conversions.",
    accent: "#d64a8a",
  },
  {
    icon: "/media/icons/search-engine-optimization.png",
    title: "SEO-Integrated Design",
    desc: "As a result-driven Website Designing Company, we build websites with SEO baked into the structure. From clean coding to optimized meta tags and keyword placement, we ensure your site is search-engine ready. This means better visibility, more organic traffic, and stronger opportunities to attract qualified leads.",
    accent: "#6d8fa2",
  },
  {
    icon: "/media/icons/web-browser.png",
    title: "Secure and Scalable Platforms",
    desc: "Our Website Designing Company builds websites that prioritize security and scalability. With SSL integration, strong coding practices, and future-ready frameworks, we make sure your platform is safe for users while flexible enough to grow with your business needs.",
    accent: "#55b047",
  },
  {
    icon: "/media/icons/ui.png",
    title: "User-Friendly Interfaces",
    desc: "As a client-focused Website Designing Company, we create websites with clear navigation, simple layouts, and interactive elements that enhance user satisfaction. Easy-to-use designs not only keep visitors engaged but also encourage repeat visits and higher conversions.",
    accent: "#c27b2e",
  },

];

export default function FeaturesGrid2() {
  return (
    <>
    <section className={styles.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-5">
          Key Features of Our Website Designing Company
        </h2>

      <div className={styles.featuresGrid_grid}>
        {FEATURES.map((f, i) => (
          <article
            key={i}
            className={styles.featuresGrid_card}
            style={{ "--accent": f.accent }}
          >
            <div className={styles.featuresGrid_iconWrap} aria-hidden="true">
              {/* Replace with your exact sizes; keep 1:1 for best result */}
              <Image
                src={f.icon}
                alt=""
                width={72}
                height={72}
                className={styles.featuresGrid_icon}
              />
            </div>

            <h3 className={styles.featuresGrid_title}>
              {f.title.split("\n").map((line, idx) => (
                <span key={idx} className={idx === 0 ? styles.featuresGrid_strong : ""}>
                  {line}
                  {idx < f.title.split("\n").length - 1 ? <br /> : null}
                </span>
              ))}
            </h3>

            <p className={styles.featuresGrid_desc}>{f.desc}</p>

            {/* bottom bar */}
            <span className={styles.featuresGrid_bar} aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
 
    
    </>
  );
}
