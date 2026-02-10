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
      image: "/media/tech/seo1.jpg",
      title: "CRM Solutions & Customer Relationship Management Services",
      description:
        "Our CRM approach focuses on automation, clarity, and performance so your team can spend more time closing deals and less time managing data.",
      points: [
        "CRM workflows aligned with business processes",
        "Automation that improves team productivity",
      ],
    },
    {
      image: "/media/tech/website-mumbai3.png",
      title: "CRM Implementation & Setup",
      description:
        "We implement CRM systems that help businesses organize customer data, automate tasks, and create structured workflows for better operational efficiency.",
      points: [
        "Organized customer and lead management",
        "Automated task and workflow setup",
      ],
    },

      {
      image: "/media/tech/seo10.jpg",
      title: "Sales CRM & Lead Management",
      description:
        "Our sales CRM solutions help businesses track leads, manage opportunities, and improve conversion rates through structured pipeline management.",
      points: [
        "Clear visibility of sales stages",
        "Automated reminders and follow-ups",
      ],
    },
    {
      image: "/media/tech/marketing.png",
      title: "Marketing Automation CRM",
      description:
        "CRM-based marketing automation helps businesses manage campaigns, track engagement, and nurture leads through automated communication workflows",
      points: [
        "Automated customer engagement workflows",
        "Improved marketing performance tracking",
      ],
    },
    {
      image: "/media/tech/crm3.png",
      title: "CRM Integration & Workflow Automation",
      description:
        "We integrate CRM systems with websites, applications, email platforms, and third-party tools to ensure smooth data flow and centralized management.",
      points: [
        "Unified customer data across systems",
        "Reduced manual data entry",
      ],
    },
    {
      image: "/media/tech/crm4.png",
      title: "CRM Optimization & Ongoing Support",
      description:
        "CRM systems require continuous improvement to remain effective. We provide optimization and support services to improve performance and usability over time.",
      points: [
        "Continuous CRM performance improvements",
        "Reliable support and system updates",
      ],
    },
   
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
            Build a CRM System That Converts
            <span> Leads into Customers</span>
          </h2>

          <p
  className={styles.description}
  style={{ width: "85%", margin: "0 auto" }}
>
  A well-designed CRM system helps businesses manage leads, track customer interactions, and streamline sales processes from one centralized platform. Our CRM solutions are built to improve follow-ups, automate routine tasks, and give your team clear visibility into every stage of the customer journey, helping you convert more leads into long-term customers.
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
