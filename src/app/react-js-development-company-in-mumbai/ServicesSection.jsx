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
      title: "Custom React JS Application Development in Mumbai",
      description:
        "Our React JS development services in Mumbai focus on building flexible, component-driven applications that scale smoothly as your business grows.",
      points: [
        "Reusable React component architecture",
        "Scalable frontend structure for future expansion",
      ],
    },
    {
      image: "/media/tech/website-mumbai1.png",
      title: "React JS Development for B2B & Enterprise Applications",
      description:
        "We build robust React JS applications for B2B companies, focusing on performance, clarity, and workflows that support complex business operations.",
      points: [
        "Data-driven dashboards and admin panels",
        "User-focused workflows and UI clarity",
      ],
    },
    {
      image: "/media/tech/15.jpg",
      title: "React JS Ecommerce Frontend Development",
      description:
        "Our React JS ecommerce solutions deliver fast-loading, conversion-focused storefronts with smooth navigation and reliable checkout experiences.",
      points: [
        "High-performance product listing interfaces",
        "Secure checkout and cart UI integration",
      ],
    },
    {
      image: "/media/tech/website-mumbai2.png",
      title: "SEO-Friendly React JS & Next.js Development",
      description:
        "We develop SEO-ready React applications using best practices and frameworks like Next.js to ensure crawlability, performance, and visibility.",
      points: [
        "Optimized rendering and routing structure",
        "Mobile-first and performance-focused builds",
      ],
    },
    {
      image: "/media/tech/website-mumbai6.png",
      title: "Responsive React JS UI Development",
      description:
        "We design and develop responsive React interfaces that deliver consistent user experiences across desktops, tablets, and mobile devices.",
      points: [
        "Device-responsive React components",
        "Consistent UI behavior across screen sizes",
      ],
    },
    {
      image: "/media/tech/website-mumbai7.png",
      title: "React JS Migration & Application Revamp",
      description:
        "If your existing website or frontend feels outdated, we help migrate or rebuild it using React JS to improve speed, usability, and maintainability.",
      points: [
        "Legacy frontend migration to React",
        "Improved performance and UI structure",
      ],
    },
    {
      image: "/media/tech/website-mumbai5.png",
      title: "Headless CMS & React JS Integration",
      description:
        "We integrate React JS with headless CMS platforms to give you full control over content while maintaining frontend performance.",
      points: [
        "CMS-driven React frontend solutions",
        "Secure and flexible content management",
      ],
    },
    {
      image: "/media/tech/website-mumbai4.png",
      title: "React JS Maintenance & Support Services",
      description:
        "Beyond development, we provide ongoing React JS support to keep your application secure, optimized, and aligned with business needs.",
      points: [
        "Performance optimization and updates",
        "Reliable long-term technical support",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            Professional React JS
            <span> Development Company in Mumbai</span>
          </h2>

          <p className={styles.description} style={{ width: "85%", margin: "0 auto" }}>
            As a trusted React JS development company in Mumbai, we help businesses build fast, scalable, and maintainable web applications that support growth, performance, and long-term digital strategy.
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
