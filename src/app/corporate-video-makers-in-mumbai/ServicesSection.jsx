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
      title: "Company Profile & Brand Videos",
      description:
        "We create company profile and brand videos in Mumbai that help businesses present their story, values, and services in a clear and engaging way.",
      points: [
        "Clear brand storytelling",
        "Professional video production quality",
      ],
    },
    {
      image: "/media/tech/corporate5.png",
      title: "Promotional & Marketing Corporate Videos",
      description:
        "Our promotional corporate videos are designed to support marketing campaigns, product launches, and brand promotions across digital platforms.",
      points: [
        "Marketing-focused video structure",
        "Optimized for digital and social platforms",
      ],
    },
    {
      image: "/media/tech/corporate4.png",
      title: "Corporate Video Production Services in Mumbai",
      description:
        "As experienced corporate video makers in Mumbai, we deliver professional videos that communicate your brand message clearly with consistent visual quality.",
      points: [
        "Videos aligned with business objectives",
        "Structured planning and execution",
      ],
    },
    {
      image: "/media/tech/corporate9.png",
      title: "Training & Internal Communication Videos",
      description:
        "We produce training and internal communication videos that simplify complex information and ensure consistent messaging across teams.",
      points: [
        "Clear, easy-to-understand video content",
        "Effective internal communication support",
      ],
    },
    {
      image: "/media/tech/corporate7.png",
      title: "Corporate Video Editing & Post-Production",
      description:
        "Our post-production services include professional video editing, color correction, sound design, and final delivery tailored for corporate use.",
      points: [
        "High-quality video finishing",
        "Attention to detail and consistency",
      ],
    },
    {
      image: "/media/tech/corporate6.png",
      title: "Product & Explainer Corporate Videos",
      description:
        "We create product and explainer corporate videos that help businesses clearly demonstrate features, workflows, and value propositions.",
      points: [
        "Structured and simple explanations",
        "Engaging visual storytelling",
      ],
    },
    {
      image: "/media/tech/corporate8.png",
      title: "Corporate Video Updates & Ongoing Support",
      description:
        "As your business evolves, we help update and refine existing corporate videos to keep content accurate, relevant, and aligned with your brand.",
      points: [
        "Video updates and revisions",
        "Long-term content support",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            Corporate Video Makers
            <span> in Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            Choosing the right corporate video makers in Mumbai plays a key role
            in how your business communicates its story. We create professional
            corporate videos that balance clear messaging, strong visuals, and
            consistent quality to support effective business communication.
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
