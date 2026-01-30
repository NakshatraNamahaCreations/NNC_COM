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
      title: "Custom Website Designing Services in Mumbai",
      description:
        "As a website designing company in Mumbai, we create custom website designs tailored to your brand identity, audience expectations, and business goals. Our designs are flexible and built for long-term growth.",
      points: [
        "Design aligned with brand identity",
        "Flexible layouts for future expansion",
      ],
    },
    {
      image: "/media/tech/website-mumbai1.png",
      title: "Business Website Design for B2B Companies",
      description:
        "We design professional B2B websites that communicate trust, clarity, and value. Our layouts are structured to guide visitors, highlight services, and encourage meaningful engagement.",
      points: [
        "Clear information hierarchy",
        "Conversion-focused design structure",
      ],
    },
    {
      image: "/media/tech/15.jpg",
      title: "Ecommerce Website Designing in Mumbai",
      description:
        "Our ecommerce website designing services focus on user-friendly layouts, clean product presentation, and smooth navigation to improve customer experience and online conversions.",
      points: [
        "User-friendly product layouts",
        "Design optimized for online sales",
      ],
    },
    {
      image: "/media/tech/website-mumbai2.png",
      title: "SEO-Friendly Website Design",
      description:
        "A well-designed website should also be search-engine friendly. Our website designs follow SEO-friendly structure, clean layouts, and performance-focused design principles.",
      points: [
        "SEO-friendly page structure",
        "Mobile-first responsive design",
      ],
    },
    {
      image: "/media/tech/website-mumbai6.png",
      title: "Responsive Website Design",
      description:
        "We design fully responsive websites that adapt seamlessly across desktops, tablets, and mobile devices, ensuring a consistent and engaging user experience.",
      points: [
        "Device-responsive layouts",
        "Consistent experience on all screens",
      ],
    },
    {
      image: "/media/tech/website-mumbai7.png",
      title: "Website Redesign & UI Revamp",
      description:
        "If your website looks outdated or underperforms, we redesign it with a modern look, improved layout structure, and better visual flow—without losing your brand identity.",
      points: [
        "Modern UI and layout refresh",
        "Improved usability and navigation",
      ],
    },
    {
      image: "/media/tech/website-mumbai5.png",
      title: "CMS-Based Website Design",
      description:
        "We design CMS-based websites that allow you to manage content easily. Our CMS designs are clean, secure, and simple to update without technical dependency.",
      points: [
        "Easy content management",
        "Design-friendly CMS structure",
      ],
    },
    {
      image: "/media/tech/website-mumbai4.png",
      title: "Website Design Maintenance & Support",
      description:
        "Beyond launch, we provide ongoing design support to keep your website updated, visually consistent, and aligned with evolving business needs.",
      points: [
        "Design updates and refinements",
        "Reliable long-term support",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            Professional Website
            <span> Designing Company in Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            Choosing the right website designing company in Mumbai directly
            impacts your brand image and user experience. We focus on creating
            visually appealing, user-friendly website designs that support
            marketing goals and long-term digital growth.
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
