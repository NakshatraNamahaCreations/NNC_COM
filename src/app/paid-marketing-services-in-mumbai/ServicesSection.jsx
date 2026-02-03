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
      title: "Google Ads Management Services in Mumbai",
      description:
        "We create and manage high-performing Google Ads campaigns focused on lead generation, sales growth, and maximum return on ad spend.",
      points: [
        "Search, display & shopping ads",
        "Keyword targeting & bid optimization",
      ],
    },
    {
      image: "/media/tech/website-mumbai3.png",
      title: "Performance Marketing & PPC Services",
      description:
        "Our performance marketing services are designed to drive measurable results through data-driven PPC campaigns and conversion-focused strategies.",
      points: [
        "PPC campaign planning & execution",
        "Conversion tracking & ROI optimization",
      ],
    },
    {
      image: "/media/tech/website-mumbai2.png",
      title: "Social Media Advertising (Meta & LinkedIn Ads)",
      description:
        "We run targeted social media advertising campaigns to reach the right audience, generate leads, and increase brand visibility.",
      points: [
        "Facebook, Instagram & LinkedIn ads",
        "Audience targeting & retargeting",
      ],
    },
    {
      image: "/media/tech/website-mumbai6.png",
      title: "Remarketing & Retargeting Campaigns",
      description:
        "Our remarketing strategies help re-engage visitors, recover lost leads, and improve conversions through personalized paid ads.",
      points: [
        "Website & app remarketing",
        "Cart abandonment recovery ads",
      ],
    },
    {
      image: "/media/tech/website-mumbai7.png",
      title: "Landing Page & Conversion Optimization",
      description:
        "We optimize landing pages and user journeys to increase conversion rates and improve the performance of paid marketing campaigns.",
      points: [
        "High-converting landing pages",
        "A/B testing & user behavior analysis",
      ],
    },
    {
      image: "/media/tech/seo10.jpg",
      title: "Local Paid Advertising for Mumbai Businesses",
      description:
        "We help local businesses in Mumbai generate inquiries and calls through location-based paid advertising campaigns.",
      points: [
        "Geo-targeted search & map ads",
        "Local lead generation campaigns",
      ],
    },
    {
      image: "/media/tech/website-mumbai4.png",
      title: "Paid Marketing Analytics & Reporting",
      description:
        "We track performance across all paid channels and provide transparent reports with actionable insights and ROI metrics.",
      points: [
        "Campaign analytics & dashboards",
        "Weekly & monthly performance reports",
      ],
    },
    {
      image: "/media/tech/seo4.jpg",
      title: "Paid Marketing for B2B & Enterprise Brands",
      description:
        "We deliver scalable paid marketing strategies for B2B and enterprise brands focused on lead quality, pipeline growth, and ROI.",
      points: [
        "B2B lead generation campaigns",
        "Account-based paid advertising",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            Professional Paid Marketing
            <span> Services in Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            As a performance-driven paid marketing agency in Mumbai, we help
            businesses generate qualified leads, increase sales, and maximize
            ROI through targeted advertising campaigns.
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
