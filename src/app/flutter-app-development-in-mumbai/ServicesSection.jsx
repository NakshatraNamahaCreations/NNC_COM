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
      image: "/media/tech/22.jpg",
      title: "Flutter App Development in Mumbai",
      description:
        "We specialize in Flutter App Development in Mumbai, building fast, secure, and scalable cross-platform mobile applications using a single codebase for both Android and iOS. Our Flutter apps deliver smooth performance and consistent UI across devices.",
      points: [
        "Single codebase for Android & iOS apps",
        "High-performance UI with Flutter & Dart",
      ],
    },
    {
      image: "/media/tech/12.jpg",
      title: "Custom Flutter App Development",
      description:
        "Our custom Flutter app development services in Mumbai are designed around your business model, workflows, and growth plans. Every Flutter application is built for flexibility, performance, and long-term scalability.",
      points: [
        "Custom features tailored to business needs",
        "Scalable architecture for future expansion",
      ],
    },
    {
      image: "/media/tech/15.jpg",
      title: "Flutter Ecommerce App Development",
      description:
        "We develop Flutter ecommerce apps that offer seamless shopping experiences, secure payment integration, and fast performance across Android and iOS platforms.",
      points: [
        "Secure payment gateway & order management",
        "Smooth cart, checkout, and order tracking",
      ],
    },
    {
      image: "/media/tech/17.jpg",
      title: "Flutter App Consulting",
      description:
        "Not sure how to begin? Our Flutter app consulting services in Mumbai help you plan features, choose the right architecture, and define a clear roadmap for successful app launch.",
      points: [
        "Product strategy and Flutter technical guidance",
        "Clear timelines, budget, and launch planning",
      ],
    },
    {
      image: "/media/tech/19.jpg",
      title: "Flutter Backend & API Integration",
      description:
        "As part of our Flutter App Development in Mumbai offerings, we build secure backend systems and APIs that integrate seamlessly with Flutter apps, ensuring reliable data flow and performance.",
      points: [
        "High-performance APIs and cloud backend",
        "Secure authentication and data handling",
      ],
    },
    {
      image: "/media/tech/20.jpg",
      title: "Flutter App Maintenance & Support",
      description:
        "Our Flutter app maintenance and support services in Mumbai ensure your application stays updated, secure, and optimized after launch for long-term performance.",
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
            Flutter App
            <span> Development Services in Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            As a trusted Flutter app development company in Mumbai, we offer
            end-to-end Flutter application development services. Our focus is on
            building fast, scalable, and user-friendly cross-platform apps that
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
