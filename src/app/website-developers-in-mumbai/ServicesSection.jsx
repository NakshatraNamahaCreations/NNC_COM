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
    title: "Custom Website Development Services in Mumbai",
    description:
      "Our custom website development services in Mumbai are designed for businesses that require flexibility, control, and growth readiness. We build websites that scale easily as your business and content grow.",
    points: [
      "Website architecture aligned with business requirements",
      "Scalable structure for future feature additions",
    ],
  },
  {
    image: "/media/tech/website-mumbai1.png",
    title: "Business Website Developers in Mumbai for B2B Companies",
    description:
      "As experienced business website developers in Mumbai, we focus on clarity, trust, and conversion. Our B2B websites are structured to communicate value quickly and guide visitors toward action.",
    points: [
      "Clear information architecture",
      "Conversion-focused layouts",
    ],
  },
  {
    image: "/media/tech/15.jpg",
    title: "Ecommerce Website Development in Mumbai",
    description:
      "Our ecommerce website development in Mumbai helps businesses sell online with confidence. We build high-performance ecommerce platforms that prioritize speed, security, and user experience.",
    points: [
      "Secure payment gateway integration",
      "Inventory and order management",
    ],
  },
  {
    image: "/media/tech/website-mumbai2.png",
    title: "SEO-Friendly Website Development in Mumbai",
    description:
      "A well-developed website should be easy for search engines to crawl and rank. Our SEO-friendly website development in Mumbai ensures your website is built with proper structure and technical optimization from day one.",
    points: [
      "Clean URL structures",
      "Mobile-first responsiveness",
    ],
  },
  {
    image: "/media/tech/website-mumbai6.png",
    title: "Responsive Website Design",
    description:
      "We design websites that work flawlessly across desktops, tablets, and mobile devices. Every layout is carefully structured to ensure usability, readability, and consistent performance on all screen sizes.",
    points: [
      "Mobile-first and device-responsive layouts",
      "Consistent user experience across all platforms",
    ],
  },
  {
    image: "/media/tech/website-mumbai7.png",
    title: "Website Redesign & Revamp",
    description:
      "If your existing website feels outdated or underperforms, we help redesign and revamp it with a modern look, better structure, and improved speed. The goal is to enhance usability while keeping your brand identity intact.",
    points: [
      "Modern UI updates without losing brand identity",
      "Improved performance, structure, and navigation",
    ],
  },
  {
    image: "/media/tech/website-mumbai5.png",
    title: "CMS Website Development",
    description:
      "We build CMS-based websites that allow you to manage content easily without technical expertise. From blogs to business websites, our CMS solutions are flexible, secure, and simple to maintain.",
    points: [
      "Easy content updates without developer dependency",
      "Secure and scalable CMS architecture",
    ],
  },
  {
    image: "/media/tech/website-mumbai4.png",
    title: "Website Maintenance & Support",
    description:
      "Our work doesn’t stop at launch. We provide ongoing website maintenance and support to ensure your site remains secure, updated, and performing smoothly as your business grows.",
    points: [
      "Regular updates and performance monitoring",
      "Reliable support for long-term website stability",
    ],
  },
];


  return (
    <>

         
    <section className={styles.servicesSection}>
          <div className="text-center">
     <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
 Professional Website 
  <span> Development Company in Mumbai</span>
</h2>

<p className={styles.description} style={{ width: "85%", margin: "0 auto" }}>
Choosing the right website development company in Mumbai directly impacts your online credibility and business results. We work with decision-makers to deliver websites that align with operational goals, marketing strategies, and customer expectations.
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
<>
  
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
    </>
  );
}
