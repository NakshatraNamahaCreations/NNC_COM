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
    title: "Custom Website Design Services in Mumbai",
    description:
      "Our custom website design services in Mumbai focus on creating layouts that reflect your brand identity while supporting usability and scalability. Every design is structured to grow with your business.",
    points: [
      "Designs aligned with business goals",
      "Flexible layouts for future expansion",
    ],
  },
  {
    image: "/media/tech/website-mumbai1.png",
    title: "Business Website Designer in Mumbai",
    description:
      "As a business-focused website designer in Mumbai, we create websites that communicate value clearly and guide users through structured, conversion-friendly layouts.",
    points: [
      "Clear visual hierarchy and navigation",
      "Designs built for lead generation",
    ],
  },
  {
    image: "/media/tech/15.jpg",
    title: "Ecommerce Website Designer in Mumbai",
    description:
      "We design ecommerce websites in Mumbai that make online shopping simple, fast, and secure. Our focus is on intuitive product layouts, smooth checkout flows, and consistent branding.",
    points: [
      "User-friendly product and checkout design",
      "Performance-optimized ecommerce layouts",
    ],
  },
  {
    image: "/media/tech/website-mumbai2.png",
    title: "SEO-Friendly Website Design in Mumbai",
    description:
      "Our SEO-friendly website design in Mumbai ensures your website is structured for visibility from the start. We focus on clean layouts, proper hierarchy, and mobile-first design principles.",
    points: [
      "Search-friendly structure and layout",
      "Mobile-first responsive design",
    ],
  },
//   {
//     image: "/media/tech/website-mumbai6.png",
//     title: "Responsive Website Design",
//     description:
//       "We design responsive websites that deliver a consistent experience across desktops, tablets, and mobile devices, ensuring usability on every screen size.",
//     points: [
//       "Mobile-first responsive layouts",
//       "Consistent user experience across devices",
//     ],
//   },
  {
    image: "/media/tech/website-mumbai7.png",
    title: "Website Redesign & UI Revamp",
    description:
      "If your website feels outdated or difficult to use, we redesign it with improved layouts, modern visuals, and better navigation—without losing your brand identity.",
    points: [
      "Modern UI and layout improvements",
      "Enhanced usability and navigation flow",
    ],
  },
  {
    image: "/media/tech/website-mumbai5.png",
    title: "CMS Website Design",
    description:
      "We design CMS-based websites that allow you to manage content easily while maintaining visual consistency, performance, and scalability.",
    points: [
      "Easy-to-manage content layouts",
      "Designs built on secure CMS platforms",
    ],
  },
  {
    image: "/media/tech/website-mumbai4.png",
    title: "Website Maintenance & Design Support",
    description:
      "Our support services ensure your website design stays updated, secure, and visually consistent as your business evolves.",
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
  Professional Website Designer
  <span> in Mumbai</span>
</h2>

<p className={styles.description} style={{ width: "85%", margin: "0 auto" }}>
  Choosing the right website designer in Mumbai plays a key role in how your business is perceived online. We design websites that balance visual clarity, usability, and performance to help businesses build trust and generate meaningful engagement.
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
