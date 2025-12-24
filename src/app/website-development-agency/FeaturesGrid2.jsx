"use client";

import Image from "next/image";
import styles from "../../styles/FeaturesGrid2.module.css";

const FEATURES = [
  {
    icon: "/media/icons/idea (1).png",
    title: "Creativity and Unique Design",
    desc: "With a focus on creativity and uniqueness as a customer-centric web solutions company, we have an approach that embraces not only creativity but also the unique features that reflect your altered identity and put you in front of the market.",
    accent: "#09c2a3",
  },
  
{
  icon: "/media/icons/responsive-design.png",
  title: "Responsive Design for All Devices",
  desc: "As a Website Development Agency, we ensure your website delivers a consistent and engaging experience across desktops, tablets, and smartphones. Our responsive designs help you connect with users seamlessly on every device.",
  accent: "#c99a14",
},
{
  icon: "/media/icons/web.png",
  title: "Professional Web Development Standards",
  desc: "Our Website Development Agency follows industry-recognized coding standards and frameworks to build reliable, secure, and future-ready websites. We focus on clean architecture that supports easy maintenance and long-term scalability.",
  accent: "#4a8ec4",
},
{
  icon: "/media/icons/mobile.png",
  title: "Optimized Web Page Speed",
  desc: "A performance-focused Website Development Agency understands the impact of speed on user experience and search visibility. We build fast-loading websites that reduce bounce rates, improve engagement, and support higher conversions.",
  accent: "#d64a8a",
},
{
  icon: "/media/icons/search-engine-optimization.png",
  title: "SEO-Integrated Development",
  desc: "Every website built by our Website Development Agency is structured with SEO in mind. From technical optimization to metadata and content hierarchy, we ensure search engines and users can find and navigate your site effortlessly.",
  accent: "#6d8fa2",
},
{
  icon: "/media/icons/web-browser.png",
  title: "Secure and Scalable Platforms",
  desc: "Our Website Development Agency prioritizes security and scalability at every stage of development. We create robust platforms that protect user data while supporting business expansion as your requirements evolve.",
  accent: "#55b047",
},
{
  icon: "/media/icons/ui.png",
  title: "User-Friendly Interfaces",
  desc: "As a user-focused Website Development Agency, we design intuitive and visually appealing interfaces that simplify navigation and enhance user satisfaction. Our designs encourage interaction, trust, and long-term engagement.",
  accent: "#c27b2e",
},


];

export default function FeaturesGrid2() {
  return (
    <>
    <section className={styles.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-5">
          Key Features of Our Website Development Company
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
