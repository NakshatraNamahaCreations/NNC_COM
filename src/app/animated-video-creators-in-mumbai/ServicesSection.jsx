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
      image: "/media/tech/animate2.jpg",
      title: "Animated Video Creation Services in Mumbai",
      description:
        "Our animated video creation services in Mumbai focus on producing visually engaging animations that simplify ideas, explain concepts clearly, and support business communication goals.",
      points: [
        "Animations aligned with business objectives",
        "Structured animation workflow",
      ],
    },
    {
      image: "/media/tech/corporate3.png",
      title: "Explainer & Concept Animation Videos",
      description:
        "We create explainer and concept-based animated videos that help businesses communicate products, services, and processes in a clear and engaging format.",
      points: [
        "Simple and effective explanations",
        "Strong visual storytelling",
      ],
    },
    {
      image: "/media/tech/corporate5.png",
      title: "Promotional & Marketing Animations",
      description:
        "Our promotional animation services support marketing campaigns, product launches, and digital promotions across websites and social platforms.",
      points: [
        "Marketing-focused animation structure",
        "Optimized for digital platforms",
      ],
    },
    {
      image: "/media/tech/corporate9.png",
      title: "Training & Educational Animated Videos",
      description:
        "We produce training and educational animated videos that make complex topics easier to understand and ensure consistent learning outcomes.",
      points: [
        "Clear and easy-to-follow animations",
        "Effective internal and external training",
      ],
    },
    {
      image: "/media/tech/corporate7.png",
      title: "Animation Editing & Post-Production",
      description:
        "Our animation post-production services include motion refinement, visual enhancements, sound design, and final delivery tailored for business use.",
      points: [
        "High-quality animation finishing",
        "Attention to visual consistency",
      ],
    },
    {
      image: "/media/tech/corporate6.png",
      title: "Product & Service Explainer Animations",
      description:
        "We create product and service explainer animations that clearly demonstrate features, workflows, and value propositions for your audience.",
      points: [
        "Structured visual explanations",
        "Engaging animated presentation",
      ],
    },
    {
      image: "/media/tech/corporate8.png",
      title: "Animated Video Updates & Maintenance",
      description:
        "As your business evolves, we help update and refine existing animated videos to keep content accurate, relevant, and aligned with your brand.",
      points: [
        "Animation updates and revisions",
        "Long-term content support",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            Animated Video Creators
            <span> In Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            Choosing experienced animated video creators in Mumbai plays an
            important role in how effectively your business communicates ideas.
            We create animated videos that combine clarity, storytelling, and
            visual appeal to support strong brand communication.
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
