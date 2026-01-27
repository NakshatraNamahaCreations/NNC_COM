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
      title: "Custom Website Design by Experts in Mumbai",
      description:
        "As one of the best website designers in Mumbai, we create custom website designs that align with your brand identity, business goals, and user expectations. Every design is crafted for clarity, usability, and long-term scalability.",
      points: [
        "Brand-focused custom design layouts",
        "Flexible design structure for future growth",
      ],
    },
    {
      image: "/media/tech/website-mumbai1.png",
      title: "Business Website Designer in Mumbai",
      description:
        "Our business website designers in Mumbai specialize in creating professional websites that communicate trust, highlight value, and guide users toward meaningful actions.",
      points: [
        "Clear visual hierarchy and navigation",
        "Conversion-focused website layouts",
      ],
    },
    {
      image: "/media/tech/15.jpg",
      title: "Ecommerce Website Designer in Mumbai",
      description:
        "We design ecommerce websites in Mumbai that offer smooth browsing, intuitive product presentation, and seamless checkout experiences—helping businesses convert visitors into customers.",
      points: [
        "User-friendly product and checkout UI",
        "Performance-optimized ecommerce designs",
      ],
    },
    {
      image: "/media/tech/website-mumbai2.png",
      title: "SEO-Friendly Website Design in Mumbai",
      description:
        "Our SEO-friendly website designs are structured to support visibility from the ground up. Clean layouts, proper heading hierarchy, and mobile-first design help improve search performance.",
      points: [
        "Search-engine-friendly design structure",
        "Mobile-first responsive layouts",
      ],
    },
    {
      image: "/media/tech/website-mumbai7.png",
      title: "Website Redesign & UI Revamp Services",
      description:
        "If your website looks outdated or underperforms, our redesign services modernize the layout, improve usability, and enhance visual appeal—without losing your brand identity.",
      points: [
        "Modern UI and visual improvements",
        "Improved navigation and user flow",
      ],
    },
    {
      image: "/media/tech/website-mumbai5.png",
      title: "CMS Website Design Solutions",
      description:
        "We design CMS-based websites that give you full control over content while maintaining design consistency, performance, and scalability.",
      points: [
        "Easy-to-manage CMS layouts",
        "Secure and scalable design framework",
      ],
    },
    {
      image: "/media/tech/website-mumbai4.png",
      title: "Website Maintenance & Design Support",
      description:
        "Our ongoing design support ensures your website remains visually updated, secure, and aligned with evolving business needs.",
      points: [
        "Ongoing design and layout updates",
        "Long-term website stability and support",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            Best Website Designer
            <span> in Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            Choosing the best website designers in Mumbai can define how your
            business is perceived online. We design visually refined,
            user-friendly websites that build trust, enhance engagement, and
            support long-term digital growth.
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
