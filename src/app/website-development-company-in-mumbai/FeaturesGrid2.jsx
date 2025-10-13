"use client";

import Image from "next/image";
import styles from "../../styles/FeaturesGrid2.module.css";

const FEATURES = [
  {
    icon: "/media/icons/idea (1).png",
    title: "Creativity and Unique Design",
    desc: "Being a creative website development company in Mumbai, we design not only catchy but also representational to the brand's individuality while maintaining the functional excellence part of the design.",
    accent: "#09c2a3",
  },
  
  {
    icon:"/media/icons/responsive-design.png",
    title: "Responsive Design for All Devices",
    desc: "We work to make every website look the same without any flaw when being viewed on a desktop, a tablet, and a mobile phone. Our website development agency in Mumbai keeps us connected with our clients' target audience via every digital touchpoint.",
    accent: "#c99a14",
  },
  {
    icon: "/media/icons/web.png",
    title: "Professional Web Development Standards",
    desc: "We implement industry-standard frameworks and take security measures in the coding process. Nakshatra Namaha Creations is a professional website development company in Mumbai that delivers websites that are scalable and prepared for the future.",
    accent: "#4a8ec4",
  },
  {
    icon: "/media/icons/mobile.png",
    title: "Optimized Web Page Speed",
    desc: "By optimizing your website, we ensure that your site opens quickly, which in turn decreases the bounce rate and increases the conversions. Based on this, we are regarded as one of the best website development company in Mumbai for the performance-driven projects.",
    accent: "#d64a8a",
  },
  {
    icon: "/media/icons/search-engine-optimization.png",
    title: "SEO-Integrated Development",
    desc: "The framework of our SEO is built into all our websites. Being a technically advanced website development company in Mumbai, we work on the alignment of metadata, structure, and content so that the website can be found more easily.",
    accent: "#6d8fa2",
  },
  {
    icon: "/media/icons/web-browser.png",
    title: "Secure and Scalable Platforms",
    desc: "Security is the heart of every project. The firm we are working with in Mumbai, a website development company, comes up with the platforms that safeguard the data and are easy to scale as your enterprise flourishes.",
    accent: "#55b047",
  },
  {
    icon: "/media/icons/ui.png",
    title: "User-Friendly Interfaces",
    desc: "We create user-friendly and readable designs and provide directions for the customer thus giving a Nakshatra Namaha Creations a top position among Mumbai&rsquo;s website development companies when it comes to user-experience-based strategies.",
    accent: "#c27b2e",
  },

];

export default function FeaturesGrid2() {
  return (
    <>
    <section className={styles.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-5">
          Key Features of Our Website Development Company in Mumbai
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
