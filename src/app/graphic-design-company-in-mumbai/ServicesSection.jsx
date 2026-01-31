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
      title: "Graphic Design Company In Mumbai",
      description:
        "As a professional graphic design company in Mumbai, we create visually compelling designs that communicate ideas clearly, strengthen brand identity, and support effective business communication.",
      points: [
        "Designs aligned with business goals",
        "Structured and reliable design workflow",
      ],
    },
    {
      image: "/media/tech/corporate3.png",
      title: "Branding & Visual Identity Design",
      description:
        "We help businesses build strong brand identities through logo design, brand guidelines, and consistent visual systems across all marketing channels.",
      points: [
        "Clear and recognizable brand identity",
        "Consistent visual language",
      ],
    },
    {
      image: "/media/tech/corporate5.png",
      title: "Marketing & Promotional Creatives",
      description:
        "Our graphic design services support marketing campaigns, product launches, and promotions with visually engaging creatives for digital and print platforms.",
      points: [
        "Marketing-focused design strategy",
        "Optimized for digital platforms",
      ],
    },
    {
      image: "/media/tech/graphic2.png",
      title: "Social Media & Digital Design",
      description:
        "We design engaging social media posts, banners, and digital creatives that help brands maintain visibility and consistency across platforms.",
      points: [
        "Platform-optimized design formats",
        "Engaging visual storytelling",
      ],
    },
    {
      image: "/media/tech/corporate7.png",
      title: "Design Refinement & Final Artwork",
      description:
        "Our design refinement services include layout optimization, visual enhancements, typography adjustments, and final artwork delivery for professional use.",
      points: [
        "High-quality design finishing",
        "Attention to detail and consistency",
      ],
    },
    {
      image: "/media/tech/graphic3.png",
      title: "Product & Service Design Creatives",
      description:
        "We create product and service-focused design creatives that clearly present features, workflows, and value propositions through clean visuals.",
      points: [
        "Structured visual communication",
        "Clear and engaging design layouts",
      ],
    },
    {
      image: "/media/tech/corporate8.png",
      title: "Design Updates & Ongoing Support",
      description:
        "As your business evolves, we help update and refine existing design assets to keep visuals accurate, relevant, and aligned with your brand.",
      points: [
        "Design updates and revisions",
        "Long-term creative support",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            Our Graphic Design Service
            <span> In Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            Choosing a professional graphic design company in Mumbai plays an
            important role in how effectively your business communicates
            visually. We create design solutions that balance creativity,
            clarity, and brand consistency to strengthen business communication.
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
