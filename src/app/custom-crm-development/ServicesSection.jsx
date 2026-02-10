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
      title: "CRM Systems Built for Automation and Clarity",
      description:
        "Our crm development services focus on creating systems that improve efficiency and eliminate repetitive processes. Teams spend less time managing data and more time engaging with customers and closing opportunities.",
      points: [
        "CRM workflows aligned with business processes",
        "Automation that improves team productivity",
      ],
    },
    {
      image: "/media/tech/website-mumbai3.png",
      title: "CRM Implementation & Setup",
      description:
        "Our custom CRM development service includes complete implementation and setup to help businesses organize customer information and establish structured workflows. Each system is configured based on real operational requirements and daily team usage.",
      points: [
        "Organized customer and lead management",
        "Automated task assignments and workflows",
      ],
    },

      {
      image: "/media/tech/seo10.jpg",
      title: "Sales CRM & Lead Management",
      description:
        "Sales-focused custom CRM development helps businesses track leads from initial inquiry to final conversion. With structured pipeline stages and automated reminders, sales teams gain better visibility into opportunities and customer interactions.",
      points: [
        "Clear visibility of sales stages",
        "Automated follow-ups and reminders",
      ],
    },
    {
      image: "/media/tech/marketing.png",
     title: "Marketing Automation CRM",
      description:
        "Marketing automation within custom CRM development helps businesses manage campaigns and nurture leads through automated communication workflows. This improves engagement while providing better insight into customer behavior and campaign performance.",
      points: [
        "Automated customer engagement workflows",
        "Campaign tracking and performance insights",
      ],
    },
    {
      image: "/media/tech/crm3.png",
     title: "CRM Integration & Workflow Automation",
      description:
        "A reliable custom crm development company ensures smooth integration with websites, applications, email platforms, and third-party tools. Integration helps maintain consistent customer data across systems while reducing manual effort.",
      points: [
        "Unified customer data across systems",
        "Automated workflow synchronization",
      ],
    },
    {
      image: "/media/tech/crm4.png",
     title: "CRM Optimization & Ongoing Support",
      description:
        "CRM systems require continuous improvement as business processes evolve. Our crm development services include optimization and ongoing support to improve performance, usability, and efficiency over time.",
      points: [
        "Continuous CRM performance improvements",
        "System updates and enhancements",
      ],
    },
   
  ];

  return (
    <>
      <section className={styles.servicesSection}>
        <div className="text-center">
          <h2 className={styles.heading} style={{ marginBottom: "15px" }}>
           Build a Custom CRM System That
            <span> Converts Leads into Customers</span>
          </h2>

         <p
  className={styles.description}
  style={{ width: "85%", margin: "0 auto" }}
>
   Working with an experienced custom crm development company ensures that your CRM system supports your business goals and operational needs. A properly developed CRM helps reduce manual work, improve response time, and strengthen customer relationships through automation and structured data management.
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
