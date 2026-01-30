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
      title: "SEO Services by a Digital Marketing Agency in Mumbai",
      description:
        "We help businesses improve search visibility and organic traffic through strategic SEO campaigns designed for long-term growth and measurable results.",
      points: [
        "On-page & technical SEO",
        "Local SEO and keyword optimization",
      ],
    },
    {
      image: "/media/tech/seo2.jpg",
      title: "Google Ads & Performance Marketing",
      description:
        "Our Google Ads and performance marketing services focus on lead generation, conversions, and ROI through data-driven paid campaigns.",
      points: [
        "Search, display & remarketing ads",
        "Conversion tracking & optimization",
      ],
    },
    {
      image: "/media/tech/website-mumbai2.png",
      title: "Social Media Marketing & Advertising",
      description:
        "We manage and grow brands across social platforms with targeted ads, creative content, and audience-focused engagement strategies.",
      points: [
        "Instagram, Facebook & LinkedIn ads",
        "Content planning and audience growth",
      ],
    },
    {
      image: "/media/tech/website-mumbai6.png",
      title: "Content Marketing & Brand Visibility",
      description:
        "Our content marketing services help businesses build authority, trust, and engagement through blogs, creatives, and campaign messaging.",
      points: [
        "Content strategy & copywriting",
        "Brand storytelling & engagement",
      ],
    },
    {
      image: "/media/tech/website-mumbai7.png",
      title: "Website Conversion Rate Optimization (CRO)",
      description:
        "We optimize landing pages and user journeys to improve conversions, reduce bounce rates, and increase lead quality.",
      points: [
        "Landing page optimization",
        "User behavior analysis & testing",
      ],
    },
    {
      image: "/media/tech/seo3.jpg",
      title: "Local SEO & Google Business Profile Optimization",
      description:
        "We help local businesses in Mumbai improve map rankings, visibility, and inquiries through optimized local SEO strategies.",
      points: [
        "Google Business Profile optimization",
        "Local keyword & review strategy",
      ],
    },
    {
      image: "/media/tech/website-mumbai4.png",
      title: "Digital Marketing Analytics & Reporting",
      description:
        "Our team tracks performance across all digital channels and provides transparent reports with actionable insights.",
      points: [
        "Campaign tracking & analytics setup",
        "Monthly performance reporting",
      ],
    },
    {
      image: "/media/tech/seo4.jpg",
      title: "Digital Marketing for B2B & Enterprise Brands",
      description:
        "We deliver structured, scalable digital marketing strategies for B2B and enterprise brands focused on lead quality and long-term growth.",
      points: [
        "B2B lead generation campaigns",
        "Account-based & enterprise marketing",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            Professional Digital Marketing
            <span> Agency in Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            As a trusted digital marketing agency in Mumbai, we help businesses
            increase visibility, generate qualified leads, and drive measurable
            growth through data-driven marketing strategies.
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
