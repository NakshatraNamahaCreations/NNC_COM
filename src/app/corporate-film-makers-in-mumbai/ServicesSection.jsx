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
      image: "/media/tech/corporate3.png",
      title: "Company Profile & Brand Films",
      description:
        "We create company profile and brand films in Mumbai that help businesses showcase their story, values, and offerings in a clear and engaging format.",
      points: [
        "Strong brand storytelling",
        "Professional filming and editing",
      ],
    },
    {
      image: "/media/tech/corporate5.png",
      title: "Promotional & Marketing Films",
      description:
        "Our promotional corporate films are designed to support marketing campaigns, product launches, and digital brand promotions across platforms.",
      points: [
        "Marketing-driven film structure",
        "Optimized for digital platforms",
      ],
    },

      {
      image: "/media/tech/corporate4.png",
      title: "Corporate Film Making Services in Mumbai",
      description:
        "Our corporate film making services in Mumbai focus on creating professional films that communicate your brand story clearly while maintaining visual consistency and quality.",
      points: [
        "Films aligned with business communication goals",
        "Structured film planning and execution",
      ],
    },
    {
      image: "/media/tech/corporate9.png",
      title: "Training & Internal Communication Films",
      description:
        "We produce training and internal communication films that simplify complex information and ensure consistent messaging across teams.",
      points: [
        "Clear and easy-to-follow film content",
        "Effective internal communication",
      ],
    },
    {
      image: "/media/tech/corporate7.png",
      title: "Corporate Film Editing & Post-Production",
      description:
        "Our post-production services include professional film editing, color correction, sound design, and final delivery tailored for corporate use.",
      points: [
        "High-quality film finishing",
        "Attention to detail and consistency",
      ],
    },
    {
      image: "/media/tech/corporate6.png",
      title: "Product & Explainer Corporate Films",
      description:
        "We create product and explainer corporate films that help businesses clearly demonstrate features, workflows, and value propositions.",
      points: [
        "Simple and structured explanations",
        "Engaging visual storytelling",
      ],
    },
    {
      image: "/media/tech/corporate8.png",
      title: "Corporate Film Updates & Maintenance",
      description:
        "As your business evolves, we help update and refine existing corporate films to keep content accurate, relevant, and aligned with your brand.",
      points: [
        "Film updates and revisions",
        "Long-term content support",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            Corporate Film Makers
            <span> in Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            Choosing the right corporate film makers in Mumbai plays an important
            role in how your business tells its story. We create professional
            corporate films that balance storytelling, clarity, and visual
            quality to support effective business communication.
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
