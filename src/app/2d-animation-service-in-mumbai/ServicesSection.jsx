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
      title: "2D Animation Service in Mumbai",
      description:
        "Our 2D animation service in Mumbai focuses on creating visually engaging animations that simplify ideas, explain concepts clearly, and support effective business communication.",
      points: [
        "2D animations aligned with business goals",
        "Structured and reliable animation workflow",
      ],
    },
    {
      image: "/media/tech/corporate3.png",
      title: "2D Explainer & Concept Videos",
      description:
        "We create 2D explainer and concept-based videos that help businesses clearly communicate products, services, and processes in an engaging format.",
      points: [
        "Simple and easy-to-understand explanations",
        "Strong 2D visual storytelling",
      ],
    },
    {
      image: "/media/tech/corporate5.png",
      title: "2D Promotional & Marketing Animations",
      description:
        "Our 2D promotional animation services support marketing campaigns, product launches, and digital promotions across websites and social platforms.",
      points: [
        "Marketing-focused 2D animation structure",
        "Optimized for digital platforms",
      ],
    },
    {
      image: "/media/tech/corporate9.png",
      title: "2D Training & Educational Videos",
      description:
        "We produce 2D animated training and educational videos that simplify complex topics and ensure consistent learning and communication.",
      points: [
        "Clear and easy-to-follow 2D animations",
        "Effective internal and external training content",
      ],
    },
    {
      image: "/media/tech/corporate7.png",
      title: "2D Animation Editing & Post-Production",
      description:
        "Our post-production services include animation refinement, visual enhancements, sound design, and final delivery tailored for professional use.",
      points: [
        "High-quality 2D animation finishing",
        "Attention to visual consistency",
      ],
    },
    {
      image: "/media/tech/corporate6.png",
      title: "Product & Service 2D Explainer Animations",
      description:
        "We create product and service explainer animations that clearly demonstrate features, workflows, and value propositions through 2D visuals.",
      points: [
        "Structured visual explanations",
        "Engaging 2D animated presentation",
      ],
    },
    {
      image: "/media/tech/corporate8.png",
      title: "2D Animation Updates & Maintenance",
      description:
        "As your business evolves, we help update and refine existing 2D animated videos to keep content accurate, relevant, and aligned with your brand.",
      points: [
        "2D animation updates and revisions",
        "Long-term content support",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            2D Animation Service
            <span> In Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            Choosing a professional 2D animation service in Mumbai plays an
            important role in how effectively your business communicates ideas.
            We create 2D animated videos that balance clarity, storytelling, and
            visual appeal to strengthen brand communication.
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
