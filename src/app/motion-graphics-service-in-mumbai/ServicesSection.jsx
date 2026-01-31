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
      title: "Motion Graphic Service In Mumbai",
      description:
        "As a professional Motion Graphic Service In Mumbai, we create engaging animated visuals that simplify complex ideas, strengthen brand messaging, and capture audience attention across digital platforms.",
      points: [
        "Motion graphics aligned with business goals",
        "Structured animation workflow",
      ],
    },
    {
      image: "/media/tech/corporate3.png",
      title: "Brand Motion & Visual Identity",
      description:
        "We help brands stand out with motion-based visual identities including logo animations, brand intros, and animated brand elements for digital use.",
      points: [
        "Animated brand elements",
        "Consistent motion identity",
      ],
    },
    {
      image: "/media/tech/corporate5.png",
      title: "Marketing & Promotional Motion Graphics",
      description:
        "Our Motion Graphic Service In Mumbai supports marketing campaigns with promotional animations, product launch videos, and visually engaging motion creatives.",
      points: [
        "Campaign-focused motion strategy",
        "Optimized for digital marketing",
      ],
    },
    {
      image: "/media/tech/graphic2.png",
      title: "Social Media Motion Content",
      description:
        "We design motion graphics for social media platforms that increase engagement, improve visibility, and communicate messages quickly through animation.",
      points: [
        "Platform-optimized animations",
        "High-engagement motion visuals",
      ],
    },
    {
      image: "/media/tech/corporate7.png",
      title: "Animation Refinement & Final Output",
      description:
        "Our refinement process includes timing adjustments, transitions, visual enhancements, and delivery of high-quality motion graphic outputs.",
      points: [
        "Polished animation finishing",
        "Attention to motion details",
      ],
    },
    {
      image: "/media/tech/graphic3.png",
      title: "Explainer & Product Motion Videos",
      description:
        "We create explainer videos and product-focused motion graphics that clearly present features, workflows, and value propositions.",
      points: [
        "Clear animated storytelling",
        "Structured visual flow",
      ],
    },
    {
      image: "/media/tech/corporate8.png",
      title: "Motion Updates & Ongoing Support",
      description:
        "As your business evolves, our Motion Graphic Service In Mumbai helps update and refine existing animations to keep content relevant and effective.",
      points: [
        "Animation updates & revisions",
        "Long-term motion support",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
          Corporate Motion Graphics Services 
            <span> In Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            Choosing a professional Motion Graphic Service In Mumbai helps
            businesses communicate ideas more effectively through animation. We
            create motion graphics that balance creativity, clarity, and strong
            visual storytelling.
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
