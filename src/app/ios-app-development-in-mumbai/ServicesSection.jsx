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
      image: "/media/tech/21.jpg",
      title: "iOS App Development in Mumbai",
      description:
        "We specialize in iOS App Development in Mumbai, building secure, high-performance, and scalable iPhone and iPad applications for startups and enterprises. Our iOS apps are optimized for speed, smooth UI interactions, and Apple’s performance standards.",
      points: [
        "Native iOS development using Swift & SwiftUI",
        "Optimized for iPhone, iPad, and latest iOS versions",
      ],
    },
    {
      image: "/media/tech/12.jpg",
      title: "Custom iOS App Development",
      description:
        "Our custom iOS app development services in Mumbai are designed around your business model, workflows, and long-term goals. Every iOS app is crafted from scratch with flexibility, performance, and scalability in mind.",
      points: [
        "Custom features built for business requirements",
        "Scalable architecture for future growth",
      ],
    },
    {
      image: "/media/tech/15.jpg",
      title: "iOS Ecommerce App Development",
      description:
        "We develop iOS ecommerce apps as part of our iOS App Development in Mumbai services, delivering seamless shopping experiences, secure Apple Pay integration, and fast performance for premium users.",
      points: [
        "Apple Pay & secure payment gateway integration",
        "Smooth cart, checkout, and order tracking",
      ],
    },
    {
      image: "/media/tech/17.jpg",
      title: "iOS App Consulting",
      description:
        "Not sure how to start? Our iOS app consulting services in Mumbai help you define the right features, select the ideal tech stack, and plan a clear roadmap for a successful App Store launch.",
      points: [
        "Product strategy and iOS technical guidance",
        "Clear timelines, budget planning, and roadmap",
      ],
    },
    {
      image: "/media/tech/19.jpg",
      title: "iOS Backend & API Integration",
      description:
        "As part of our iOS App Development in Mumbai offerings, we build secure backend systems and APIs that integrate seamlessly with iOS apps, ensuring fast data processing and reliable performance.",
      points: [
        "High-performance APIs and cloud backend",
        "Secure data handling and authentication",
      ],
    },
    {
      image: "/media/tech/22.jpg",
      title: "Cross-Platform App Development",
      description:
        "Along with native iOS App Development in Mumbai, we offer cross-platform development using Flutter and React Native for businesses looking to launch faster on both iOS and Android.",
      points: [
        "Single codebase for faster development",
        "Consistent performance across platforms",
      ],
    },
    {
      image: "/media/tech/20.jpg",
      title: "iOS App Maintenance & Support",
      description:
        "Our iOS app maintenance and support services in Mumbai ensure your application remains secure, updated, and optimized after launch, supporting long-term performance and user engagement.",
      points: [
        "Ongoing updates and performance optimization",
        "Security patches and iOS version upgrades",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            iOS App
            <span> Development Services in Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            As a trusted iOS app development company in Mumbai, we offer
            end-to-end iOS application development services. Our focus is on
            building secure, scalable, and user-friendly iOS apps that deliver
            premium user experiences and long-term business value.
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
