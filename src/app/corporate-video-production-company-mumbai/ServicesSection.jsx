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
      image: "/media/tech/corporate4.png",
      title: "Corporate Video Production Services in Mumbai",
      description:
        "Our corporate video production services in Mumbai focus on creating professional videos that communicate your brand message clearly while maintaining visual quality and consistency.",
      points: [
        "Videos aligned with business communication goals",
        "Structured planning and production workflow",
      ],
    },
    {
      image: "/media/tech/corporate3.png",
      title: "Company Profile & Brand Videos",
      description:
        "We produce company profile and brand videos in Mumbai that help businesses present their story, values, and offerings in a clear and engaging format.",
      points: [
        "Clear brand storytelling",
        "Professional filming and editing",
      ],
    },
    {
      image: "/media/tech/corporate5.png",
      title: "Promotional & Marketing Videos",
      description:
        "Our promotional video production services are designed to support marketing campaigns, product launches, and digital promotions across platforms.",
      points: [
        "Marketing-focused video structure",
        "Optimized for online platforms",
      ],
    },
    {
      image: "/media/tech/corporate9.png",
      title: "Training & Internal Communication Videos",
      description:
        "We create training and internal communication videos that simplify complex information and ensure consistent messaging across teams.",
      points: [
        "Clear and easy-to-follow content",
        "Consistent internal communication",
      ],
    },
    {
      image: "/media/tech/corporate7.png",
      title: "Corporate Video Editing & Post-Production",
      description:
        "Our post-production services include professional editing, color correction, sound design, and final delivery tailored for business use.",
      points: [
        "High-quality editing and finishing",
        "Attention to detail and consistency",
      ],
    },
    {
       image: "/media/tech/corporate6.png",
      title: "Product & Explainer Video Production",
      description:
        "We produce product and explainer videos that help businesses clearly demonstrate features, processes, and value propositions.",
      points: [
        "Simple and structured explanations",
        "Engaging visual presentation",
      ],
    },
    {
       image: "/media/tech/corporate8.png",
      title: "Corporate Video Maintenance & Updates",
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
            Corporate Video Production Company
            <span> in Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            Choosing the right corporate video production company in Mumbai plays
            an important role in how your business communicates its message. We
            create professional videos that balance clarity, storytelling, and
            visual quality to support effective business communication.
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
