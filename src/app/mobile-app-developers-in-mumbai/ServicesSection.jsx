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
      title: "Mobile App Developers in Mumbai",
      description:
        "As experienced mobile app developers in Mumbai, we design and build secure, scalable, and high-performance mobile applications for startups, growing businesses, and enterprises. Our apps are created for real-world usage, strong performance, and long-term growth.",
      points: [
        "Android, iOS, and cross-platform app development",
        "Optimized for speed, usability, and scalability",
      ],
    },
    {
      image: "/media/tech/12.jpg",
      title: "Custom Mobile App Development",
      description:
        "Our custom mobile app development services in Mumbai are designed around your business model and user workflows. Every mobile application is built from the ground up with flexibility, performance, and future expansion in mind.",
      points: [
        "Custom features aligned with business goals",
        "Scalable architecture for long-term success",
      ],
    },
    {
      image: "/media/tech/15.jpg",
      title: "Mobile Ecommerce App Development",
      description:
        "We build mobile ecommerce applications that deliver smooth shopping experiences, secure payment processing, and reliable performance for brands selling products and services through mobile platforms.",
      points: [
        "Secure payments and order management",
        "Cart, checkout, and real-time order tracking",
      ],
    },
    {
      image: "/media/tech/17.jpg",
      title: "Mobile App Consulting & Strategy",
      description:
        "Not sure where to begin? Our mobile app developers in Mumbai provide expert consulting to help define features, choose the right technology stack, and create a clear roadmap for successful app development.",
      points: [
        "Product planning and technical guidance",
        "Clear timelines, budgets, and scope definition",
      ],
    },
    {
      image: "/media/tech/19.jpg",
      title: "Mobile App Backend & API Integration",
      description:
        "We develop secure backend systems and APIs that integrate seamlessly with mobile applications, ensuring fast data processing, stable performance, and secure user authentication.",
      points: [
        "High-performance APIs and cloud integration",
        "Secure data handling and backend scalability",
      ],
    },
    {
      image: "/media/tech/22.jpg",
      title: "Cross-Platform App Development",
      description:
        "For faster time-to-market, we offer cross-platform mobile app development using Flutter and React Native, allowing businesses to reach Android and iOS users efficiently.",
      points: [
        "Single codebase for faster development",
        "Consistent experience across platforms",
      ],
    },
    {
      image: "/media/tech/21.jpg",
      title: "Mobile App Maintenance & Support",
      description:
        "Our mobile app maintenance and support services ensure your application remains secure, updated, and optimized after launch, supporting long-term performance and user engagement.",
      points: [
        "Ongoing updates and performance optimization",
        "Security patches and feature enhancements",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            Mobile App
            <span> Development Services in Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            As trusted mobile app developers in Mumbai, we provide end-to-end
            mobile application development services. Our focus is on building
            secure, scalable, and user-friendly mobile apps that support real
            business goals and long-term growth.
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
