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
    image: "/media/tech/20.jpg",
    title: "Android App Development in Mumbai",
    description:
      "We specialize in Android App Development in Mumbai, building high-performance, secure, and scalable Android applications for startups and enterprises. Our Android apps are optimized for speed, usability, and compatibility across all Android devices used by Mumbai-based businesses.",
    points: [
      "Native Android development using Kotlin & Java",
      "Optimized for all Android versions and screen sizes",
    ],
  },
  {
    image: "/media/tech/12.jpg",
    title: "Custom Android App Development",
    description:
      "Our custom Android app development services in Mumbai are designed around your business model, workflows, and growth plans. Every Android app is built from scratch with flexibility, performance, and future scalability in mind.",
    points: [
      "Custom features tailored to business needs",
      "Scalable architecture for long-term growth",
    ],
  },
  {
    image: "/media/tech/15.jpg",
    title: "Android Ecommerce App Development",
    description:
      "We deliver Android ecommerce apps as part of our Android App Development in Mumbai services, offering smooth shopping experiences, secure payments, and fast performance for local and national businesses.",
    points: [
      "Secure payment gateway & order management",
      "Cart, checkout, and real-time order tracking",
    ],
  },
  {
    image: "/media/tech/17.jpg",
    title: "Android App Consulting",
    description:
      "Not sure how to start? Our Android app consulting services in Mumbai guide you through feature planning, technology selection, and roadmap creation to ensure a successful Android app launch.",
    points: [
      "Product strategy and technical guidance",
      "Clear timelines, budget, and development planning",
    ],
  },
  {
    image: "/media/tech/19.jpg",
    title: "Android Web App & Backend Integration",
    description:
      "As part of our Android App Development in Mumbai offerings, we build secure backend systems and APIs that integrate seamlessly with Android apps, ensuring fast data processing and reliable performance.",
    points: [
      "High-performance APIs and cloud backend",
      "Secure data handling and user authentication",
    ],
  },
  {
    image: "/media/tech/22.jpg",
    title: "Cross-Platform App Development",
    description:
      "Along with native Android App Development in Mumbai, we offer cross-platform development using Flutter and React Native for businesses that want faster launches on both Android and iOS.",
    points: [
      "Faster development with shared codebase",
      "Consistent performance across platforms",
    ],
  },
  {
    image: "/media/tech/21.jpg",
    title: "Android App Maintenance & Support",
    description:
      "Our Android app maintenance and support services in Mumbai ensure your application stays secure, updated, and optimized long after launch, supporting continuous growth and user engagement.",
    points: [
      "Ongoing updates and performance optimization",
      "Security patches and version upgrades",
    ],
  },
];
  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            Android App
            <span> Development Services in Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            As a trusted Android app development company in Mumbai, we offer
            end-to-end Android application development services. Our focus is on
            building secure, scalable, and user-friendly Android apps that
            support real business goals and long-term growth.
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
