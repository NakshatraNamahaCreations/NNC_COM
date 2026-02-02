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
      image: "/media/tech/seo1.jpg",
      title: "Comprehensive SEO Services in Mumbai",
      description:
        "Our SEO services in Mumbai help businesses improve Google rankings, increase organic traffic, and generate high-quality leads through structured, long-term strategies.",
      points: [
        "SEO audit & keyword research",
        "On-page and technical SEO",
      ],
    },
    {
      image: "/media/tech/seo2.jpg",
      title: "Local SEO Services for Mumbai Businesses",
      description:
        "We help local businesses rank higher in Mumbai-based searches and Google Maps with targeted local SEO strategies.",
      points: [
        "Google Business Profile optimization",
        "Location-based keyword targeting",
      ],
    },
    {
      image: "/media/tech/website-mumbai2.png",
      title: "On-Page SEO Optimization",
      description:
        "Our on-page SEO services strengthen content relevance, metadata, and internal linking to improve keyword rankings and user engagement.",
      points: [
        "Title tags, headers & content optimization",
        "Internal linking & UX alignment",
      ],
    },
    {
      image: "/media/tech/website-mumbai6.png",
      title: "Technical SEO & Website Performance",
      description:
        "We resolve technical issues that affect crawlability, indexing, and Core Web Vitals to ensure your website meets search engine standards.",
      points: [
        "Page speed & Core Web Vitals optimization",
        "Indexing, sitemap & schema fixes",
      ],
    },
    {
      image: "/media/tech/website-mumbai7.png",
      title: "Content SEO & Blog Optimization",
      description:
        "Our content-driven SEO approach attracts qualified traffic and builds authority through optimized service pages and blogs.",
      points: [
        "SEO content planning & optimization",
        "Search intent–focused blog strategy",
      ],
    },
    {
      image: "/media/tech/seo3.jpg",
      title: "Ecommerce SEO Services",
      description:
        "We optimize ecommerce websites to improve product visibility, category rankings, and conversion-focused organic traffic.",
      points: [
        "Product & category page SEO",
        "Optimized ecommerce site structure",
      ],
    },
    {
      image: "/media/tech/website-mumbai4.png",
      title: "SEO Analytics, Tracking & Reporting",
      description:
        "We monitor keyword rankings, traffic, and performance metrics to continuously improve SEO ROI.",
      points: [
        "Keyword & traffic performance reports",
        "Actionable SEO insights",
      ],
    },
    {
      image: "/media/tech/seo4.jpg",
      title: "Ongoing SEO Maintenance & Growth Support",
      description:
        "SEO is continuous. We provide ongoing optimization, updates, and monitoring to sustain and grow rankings over time.",
      points: [
        "Monthly SEO optimization & reporting",
        "Long-term organic growth strategy",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            Professional SEO
            <span> Services in Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            As a trusted provider of SEO services in Mumbai, we help businesses
            improve search visibility, attract qualified organic traffic, and
            generate consistent leads through ethical, data-driven SEO strategies.
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
