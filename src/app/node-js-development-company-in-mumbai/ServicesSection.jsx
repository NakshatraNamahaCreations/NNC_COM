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
      image: "/media/tech/website-mumbai3.png",
      title: "Custom Node JS Application Development in Mumbai",
      description:
        "Our Node JS development services in Mumbai focus on building fast, scalable, and secure backend applications designed to handle real-world traffic and business logic.",
      points: [
        "Custom backend architecture with Node JS",
        "Scalable systems built for future growth",
      ],
    },
    {
      image: "/media/tech/website-mumbai1.png",
      title: "Node JS Development for B2B & Enterprise Systems",
      description:
        "We build robust Node JS backend systems for B2B and enterprise applications, supporting complex workflows, data processing, and integrations.",
      points: [
        "Enterprise-grade APIs and backend services",
        "Secure data handling and access control",
      ],
    },
    {
      image: "/media/tech/15.jpg",
      title: "Node JS Backend for Ecommerce Platforms",
      description:
        "Our Node JS ecommerce backend solutions are designed to handle high traffic, secure transactions, and real-time order processing.",
      points: [
        "Order, inventory, and payment APIs",
        "High-performance backend for peak traffic",
      ],
    },
    {
      image: "/media/tech/website-mumbai2.png",
      title: "API Development & System Integration",
      description:
        "We design and develop secure REST APIs and integrate third-party services to ensure seamless data flow across platforms.",
      points: [
        "RESTful API design with Node JS",
        "Third-party and payment gateway integrations",
      ],
    },
    {
      image: "/media/tech/website-mumbai6.png",
      title: "Real-Time Node JS Application Development",
      description:
        "We build real-time applications using Node JS for use cases such as chat systems, live tracking, and notification services.",
      points: [
        "WebSocket and real-time data handling",
        "Event-driven Node JS architecture",
      ],
    },
    {
      image: "/media/tech/website-mumbai7.png",
      title: "Node JS Migration & Backend Modernization",
      description:
        "If your existing backend is outdated or slow, we help migrate or rebuild it using Node JS to improve performance and maintainability.",
      points: [
        "Legacy backend migration to Node JS",
        "Improved speed, scalability, and structure",
      ],
    },
    {
      image: "/media/tech/website-mumbai5.png",
      title: "Database Design & Node JS Integration",
      description:
        "We design efficient database structures and integrate them with Node JS backends to ensure fast, reliable data access.",
      points: [
        "SQL & NoSQL database integration",
        "Optimized data models and queries",
      ],
    },
    {
      image: "/media/tech/website-mumbai4.png",
      title: "Node JS Maintenance & Support Services",
      description:
        "Our work doesn’t stop at deployment. We provide ongoing Node JS maintenance and support to keep your backend secure and optimized.",
      points: [
        "Performance monitoring and updates",
        "Long-term backend support and security fixes",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            Professional Node JS
            <span> Development Company in Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            As a trusted Node JS development company in Mumbai, we help businesses
            build secure, scalable, and high-performance backend systems that
            power modern web and mobile applications.
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
