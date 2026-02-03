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
      title: "Custom Software Development in Mumbai",
      description:
        "As a software development company in Mumbai, we build custom software solutions designed around your business workflows, operational needs, and long-term goals. Every solution is scalable, secure, and performance-driven.",
      points: [
        "Custom-built software for unique business needs",
        "Scalable architecture for future growth",
      ],
    },
    {
      image: "/media/tech/seo10.jpg",
      title: "Enterprise Software Solutions",
      description:
        "We develop enterprise-grade software solutions that streamline operations, improve productivity, and support data-driven decision-making for growing and large-scale organizations.",
      points: [
        "Process automation and system integration",
        "Reliable enterprise-level architecture",
      ],
    },
    {
      image: "/media/tech/website-mumbai7.png",
      title: "Web-Based Software Applications",
      description:
        "Our web-based software solutions are designed for performance, accessibility, and security, enabling businesses to manage operations efficiently through browser-based platforms.",
      points: [
        "Secure and scalable web applications",
        "Role-based access and data management",
      ],
    },
    {
      image: "/media/tech/website-mumbai2.png",
      title: "Software Consulting & Planning",
      description:
        "We provide software consulting services to help businesses define requirements, select the right technology stack, and plan a clear development roadmap before execution.",
      points: [
        "Requirement analysis and solution planning",
        "Clear timelines and development strategy",
      ],
    },
    {
      image: "/media/tech/website-mumbai6.png",
      title: "System Integration & API Development",
      description:
        "Our team builds secure APIs and integrates software with existing systems, third-party tools, and databases to ensure smooth data flow and operational efficiency.",
      points: [
        "API development and system connectivity",
        "Secure data exchange and integration",
      ],
    },
    {
      image: "/media/tech/software1.png",
      title: "Software Modernization & Upgrades",
      description:
        "If your existing software is outdated or inefficient, we modernize it with improved performance, updated architecture, and enhanced usability—without disrupting operations.",
      points: [
        "Legacy system modernization",
        "Improved performance and usability",
      ],
    },
    {
      image: "/media/tech/software2.png",
      title: "Cloud-Based Software Solutions",
      description:
        "We develop cloud-ready software solutions that support scalability, remote access, and reliable performance while ensuring data security and system stability.",
      points: [
        "Cloud-enabled and scalable solutions",
        "Secure deployment and maintenance",
      ],
    },
    {
      image: "/media/tech/website-mumbai4.png",
      title: "Software Maintenance & Support",
      description:
        "Beyond development, we provide ongoing software maintenance and support to ensure system stability, security updates, and continuous performance optimization.",
      points: [
        "Ongoing updates and issue resolution",
        "Long-term technical support",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            Software Development
            <span> Company in Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            As a trusted software development company in Mumbai, we deliver
            custom, scalable, and secure software solutions that help businesses
            streamline operations, improve efficiency, and achieve long-term
            growth.
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
