"use client";

import Image from "next/image";
import { useRef } from "react";
import styles from "../../styles/ServiceCard.module.css";

export default function ServicesSection() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: -sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const services = [
    {
      image: "/media/tech/b2b2.png",
      title: "B2B Lead Generation Services in Mumbai",
      description:
        "As a result-driven B2B marketing company in Mumbai, we help businesses generate high-quality leads by targeting the right decision-makers across digital channels.",
      points: [
        "Qualified B2B lead generation",
        "Sales-focused campaign strategy",
      ],
    },
    {
      image: "/media/tech/corporate3.png",
      title: "Account-Based Marketing (ABM)",
      description:
        "Our account-based marketing services help B2B brands target high-value accounts with personalized messaging and campaigns aligned with complex and longer sales cycles.",
      points: [
        "Target account identification",
        "Personalized B2B campaigns",
      ],
    },
    {
      image: "/media/tech/b2b4.png",
      title: "LinkedIn Ads & B2B Paid Campaigns",
      description:
        "We manage LinkedIn Ads and B2B-focused paid campaigns designed to reach senior decision-makers, improve lead quality, and deliver measurable marketing outcomes.",
      points: [
        "LinkedIn Ads for B2B",
        "High-intent paid campaigns",
      ],
    },
    {
      image: "/media/tech/b2b3.png",
      title: "B2B Content Marketing & Thought Leadership",
      description:
        "Our content marketing services help B2B companies build authority, generate demand, and strengthen trust through strategic content planning and distribution.",
      points: [
        "B2B content strategy",
        "Lead nurturing content",
      ],
    },
    {
      image: "/media/tech/seo3.jpg",
      title: "SEO for B2B Companies",
      description:
        "We provide SEO services for B2B businesses to improve search visibility, attract high-intent prospects, and support long-term demand generation efforts.",
      points: [
        "B2B keyword strategy",
        "Technical & on-page SEO",
      ],
    },
    {
      image: "/media/tech/seo4.jpg",
      title: "B2B Conversion Rate Optimization (CRO)",
      description:
        "We optimize landing pages and conversion funnels to improve engagement, reduce friction, and increase B2B lead conversion rates across campaigns.",
      points: [
        "Landing page optimization",
        "Conversion-focused UX improvements",
      ],
    },
    {
      image: "/media/tech/corporate8.png",
      title: "B2B Marketing Analytics & Reporting",
      description:
        "Our analytics and reporting services provide clear visibility into campaign performance, lead quality, and return on investment across all B2B marketing activities.",
      points: [
        "Performance tracking & dashboards",
        "Transparent reporting & insights",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            B2B Marketing
            <span> Company In Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            As a trusted B2B marketing company in Mumbai, we help businesses
            generate qualified leads, build strong sales pipelines, and drive
            long-term growth through structured and performance-driven marketing
            solutions.
          </p>
        </div>

        <br />

        {/* LEFT ARROW */}
        <button
          className={`${styles.arrow} ${styles.left}`}
          onClick={slideLeft}
          aria-label="Scroll left"
        >
          ❮
        </button>

        {/* SLIDER */}
        <div className={styles.slider} ref={sliderRef}>
          {services.map((service, index) => (
            <div className={styles.slide} key={index}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={slideRight}
          aria-label="Scroll right"
        >
          ❯
        </button>
      </section>

      <br />
    </>
  );
}

/* ================= CARD ================= */

function ServiceCard({ image, title, description, points }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={image}
          alt={title}
          width={420}
          height={260}
          className={styles.image}
        />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>

        <ul className={styles.points}>
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
