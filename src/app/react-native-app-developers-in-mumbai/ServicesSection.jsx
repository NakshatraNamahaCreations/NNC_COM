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
      image: "/media/tech/23.jpg",
      title: "React Native Mobile App Development in Mumbai",
      description:
        "We specialize in React Native Mobile App Development in Mumbai, building fast, secure, and scalable cross-platform mobile applications using a single codebase for Android and iOS. Our React Native apps deliver native-like performance and smooth user experiences.",
      points: [
        "Single codebase for Android & iOS apps",
        "Native-like performance with React Native",
      ],
    },
    {
      image: "/media/tech/12.jpg",
      title: "Custom React Native App Development",
      description:
        "Our custom React Native app development services in Mumbai are designed around your business model, workflows, and growth plans. Every application is built for flexibility, performance, and long-term scalability.",
      points: [
        "Custom features tailored to business needs",
        "Scalable architecture for future growth",
      ],
    },
    {
      image: "/media/tech/15.jpg",
      title: "React Native Ecommerce App Development",
      description:
        "We develop React Native ecommerce apps that deliver seamless shopping experiences, secure payment integration, and consistent performance across Android and iOS platforms.",
      points: [
        "Secure payment gateway & order management",
        "Smooth cart, checkout, and order tracking",
      ],
    },
    {
      image: "/media/tech/17.jpg",
      title: "React Native App Consulting",
      description:
        "Not sure how to start? Our React Native app consulting services in Mumbai help you define features, select the right architecture, and plan a clear roadmap for successful app deployment.",
      points: [
        "Product strategy and technical guidance",
        "Clear timelines, budget, and launch planning",
      ],
    },
    {
      image: "/media/tech/19.jpg",
      title: "React Native Backend & API Integration",
      description:
        "As part of our React Native Mobile App Development in Mumbai offerings, we build secure backend systems and APIs that integrate seamlessly with React Native apps for reliable data flow and performance.",
      points: [
        "High-performance APIs and cloud backend",
        "Secure authentication and data handling",
      ],
    },
    {
      image: "/media/tech/20.jpg",
      title: "React Native App Maintenance & Support",
      description:
        "Our React Native app maintenance and support services in Mumbai ensure your application stays secure, updated, and optimized after launch for long-term performance and stability.",
      points: [
        "Ongoing updates and feature enhancements",
        "Bug fixes and performance optimization",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            React Native Mobile App
            <span> Development Services in Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            As a trusted React Native Mobile App Development company in Mumbai,
            we offer end-to-end cross-platform mobile app development services.
            Our focus is on building high-performance, scalable, and user-friendly
            React Native applications that support real business goals and
            long-term growth.
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
