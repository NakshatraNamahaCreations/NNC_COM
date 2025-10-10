"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
{
  title: "Custom Web Design Solutions",
  desc: "Unique, business-focused website designs that combine creativity with clean code to strengthen your online presence.",
  img: "/media/icons/mobile.png",
},
{
  title: "UI/UX Website Design",
  desc: "Modern, user-centric website layouts built with research, usability testing, and design systems for seamless interaction.",
  img: "/media/icons/ui.png",
},
{
  title: "Responsive Web Design",
  desc: "Mobile-friendly, adaptive websites that ensure flawless viewing and engagement across all screen sizes and browsers.",
  img: "/media/icons/ux.png",
},
{
  title: "WordPress & CMS Design",
  desc: "Easy-to-manage CMS websites using WordPress, Webflow, or headless architecture—ideal for dynamic content and scalability.",
  img: "/media/icons/cms.png",
},
{
  title: "E-commerce Web Design",
  desc: "High-conversion online stores with optimized product pages, secure checkout, and integrated payment gateways.",
  img: "/media/icons/shopping.png",
},
{
  title: "Website Optimization & SEO",
  desc: "Lightning-fast load times, structured data, Core Web Vitals, and SEO-friendly architecture for improved visibility and ranking.",
  img: "/media/icons/search-engine-optimization.png",
},

];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          WEBSITE DESIGNING SERVICES
        </h2>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={styles.card}>
              <h4 className={styles.title}>{f.title}</h4>
              <p className={styles.desc}>{f.desc}</p>
              <br />
              
              <div className={styles.imgWrap}>
                <Image
                  src={f.img}
                  alt={f.title}
                  width={80}
                  height={80}
                  className={styles.img}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
