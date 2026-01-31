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
      image: "/media/tech/social-media1.png",
      title: "Social Media Marketing In Mumbai",
      description:
        "As a professional Social Media Marketing In Mumbai, we create engaging campaigns that simplify brand messaging, strengthen audience connection, and drive visibility across digital platforms.",
      points: [
        "Campaigns aligned with business goals",
        "Structured marketing workflow",
      ],
    },

    {
      image: "/media/tech/corporate5.png",
      title: "Marketing & Promotional Campaigns",
      description:
        "Our Social Media Marketing In Mumbai supports campaigns with promotional content, launches, and visually engaging creatives.",
      points: [
        "Campaign-focused strategy",
        "Optimized for reach & engagement",
      ],
    },
    {
      image: "/media/tech/graphic2.png",
      title: "Social Media Content Management",
      description:
        "We design and manage content for social media platforms that increases engagement, improves visibility, and communicates messages clearly.",
      points: [
        "Platform-optimized content",
        "High-engagement creatives",
      ],
    },
    {
      image: "/media/tech/corporate7.png",
      title: "Content Refinement & Optimization",
      description:
        "Our refinement process includes performance analysis, creative optimization, and continuous improvement of social media content.",
      points: [
        "Content optimization",
        "Data-driven improvements",
      ],
    },
        {
      image: "/media/tech/corporate3.png",
      title: "Brand Presence & Visual Identity",
      description:
        "We help brands stand out on social platforms with consistent visual identity, branded creatives, and engaging content strategies.",
      points: [
        "Consistent brand presence",
        "Platform-specific visuals",
      ],
    },
    {
      image: "/media/tech/graphic3.png",
      title: "Explainer & Promotional Content",
      description:
        "We create explainer-style and promotional social media content that clearly presents offers, services, and value propositions.",
      points: [
        "Clear messaging",
        "Structured content flow",
      ],
    },
    {
      image: "/media/tech/corporate8.png",
      title: "Ongoing Social Media Support",
      description:
        "As your business evolves, our Social Media Marketing In Mumbai helps update, manage, and scale your social media presence effectively.",
      points: [
        "Content updates & revisions",
        "Long-term marketing support",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            Social Media Marketing Services
            <span> In Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            Choosing a professional Social Media Marketing In Mumbai helps
            businesses connect with their audience more effectively. We create
            campaigns that balance creativity, clarity, and measurable growth.
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
