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
      title: "Custom Website Design and Development in Mumbai",
      description:
        "We provide custom website design and development in Mumbai, building websites that align with your brand identity, business goals, and technical requirements. Each project is planned for usability, performance, and long-term scalability.",
      points: [
        "Custom UI design with scalable development",
        "Flexible website architecture for future growth",
      ],
    },
    {
      image: "/media/tech/website-mumbai1.png",
      title: "Business Website Design and Development Solutions",
      description:
        "Our business website design and development services help companies establish credibility, communicate value clearly, and guide users toward meaningful actions.",
      points: [
        "Professional UI with structured content flow",
        "Conversion-focused design and development",
      ],
    },
    {
      image: "/media/tech/website-mumbai2.png",
      title: "SEO-Friendly Website Design and Development",
      description:
        "Our SEO-friendly website design and development process focuses on clean code, structured layouts, fast loading speeds, and mobile-first responsiveness to improve search visibility.",
      points: [
        "Search-engine-friendly site architecture",
        "Mobile-first responsive development",
      ],
    },
        {
      image: "/media/tech/15.jpg",
      title: "Ecommerce Website Design and Development in Mumbai",
      description:
        "We design and develop ecommerce websites that deliver smooth browsing, intuitive product discovery, and secure checkout experiences to maximize conversions.",
      points: [
        "Product management, cart, and payment integration",
        "Performance-optimized ecommerce platforms",
      ],
    },
    {
      image: "/media/tech/website-mumbai7.png",
      title: "Website Redesign and Redevelopment Services",
      description:
        "If your existing website feels outdated or underperforms, we redesign and redevelop it to improve UI/UX, speed, functionality, and overall user engagement.",
      points: [
        "Modern UI redesign with performance improvements",
        "Enhanced navigation and user experience",
      ],
    },
    {
      image: "/media/tech/website-mumbai5.png",
      title: "CMS Website Design and Development Solutions",
      description:
        "We build CMS-based websites that are easy to manage while maintaining strong design consistency, security, and scalability.",
      points: [
        "User-friendly content management systems",
        "Secure and scalable CMS development",
      ],
    },
    {
      image: "/media/tech/website-mumbai4.png",
      title: "Website Maintenance and Ongoing Support",
      description:
        "Our website maintenance and support services ensure your site remains updated, secure, and aligned with evolving business and technical needs.",
      points: [
        "Regular updates and performance monitoring",
        "Long-term website stability and support",
      ],
    },
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            Best Website Design and Development
            <span> In Mumbai</span>
          </h2>

          <p
            className={styles.description}
            style={{ width: "85%", margin: "0 auto" }}
          >
            Choosing the best website design and development in Mumbai plays a
            vital role in how your business performs online. We build websites
            that combine visual clarity, technical reliability, and
            user-focused functionality to support long-term digital growth.
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
