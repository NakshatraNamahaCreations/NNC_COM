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
      title: "Custom Ecommerce Website Development in Mumbai",
      description:
        "We build custom ecommerce websites in Mumbai designed for performance, usability, and long-term scalability to support growing online businesses.",
      points: [
        "Custom ecommerce architecture",
        "Scalable store setup for future growth",
      ],
    },

    {
      image: "/media/tech/15.jpg",
      title: "Ecommerce Store Development for Online Retail",
      description:
        "We develop fast-loading ecommerce stores with smooth navigation, optimized product pages, and reliable checkout experiences.",
      points: [
        "Product, cart, and checkout systems",
        "Secure payment gateway integration",
      ],
    },
    {
      image: "/media/tech/website-mumbai2.png",
      title: "Payment Gateway & Third-Party Integrations",
      description:
        "We integrate trusted payment gateways and third-party services to ensure smooth transactions and efficient order processing.",
      points: [
        "Secure payment and checkout setup",
        "Shipping, tax, and API integrations",
      ],
    },
    {
      image: "/media/tech/website-mumbai6.png",
      title: "High-Performance & Scalable Ecommerce Platforms",
      description:
        "Our ecommerce websites are built to handle traffic spikes, seasonal sales, and growing product catalogs without performance issues.",
      points: [
        "Optimized for high traffic",
        "Scalable ecommerce infrastructure",
      ],
    },
    {
      image: "/media/tech/website-mumbai7.png",
      title: "Ecommerce Website Redesign & Upgrade",
      description:
        "If your existing ecommerce website feels outdated or underperforms, we redesign and upgrade it to improve speed, usability, and conversions.",
      points: [
        "Modern UI and improved UX",
        "Better performance and navigation",
      ],
    },
    {
      image: "/media/tech/website-mumbai5.png",
      title: "Product & Inventory Management Systems",
      description:
        "We implement easy-to-manage product catalogs and inventory systems that help you control stock, pricing, and product updates efficiently.",
      points: [
        "Product and inventory management",
        "Admin-friendly dashboards",
      ],
    },
    {
      image: "/media/tech/website-mumbai4.png",
      title: "Ecommerce Maintenance & Support Services",
      description:
        "Our ecommerce website development services include ongoing maintenance, updates, and technical support to keep your store running smoothly.",
      points: [
        "Performance monitoring and updates",
        "Reliable long-term ecommerce support",
      ],
    },
        {
      image: "/media/tech/website-mumbai1.png",
      title: "Ecommerce Websites for B2B & Enterprise Brands",
      description:
        "Our ecommerce solutions for B2B and enterprise businesses focus on structured catalogs, bulk ordering, and seamless customer journeys.",
      points: [
        "Enterprise-ready ecommerce platforms",
        "Secure user roles and access control",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            Professional Ecommerce
            <span> Website Development Company in Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            As a trusted ecommerce website development company in Mumbai, we help
            businesses build secure, scalable, and conversion-focused online
            stores that drive sales and long-term growth.
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
