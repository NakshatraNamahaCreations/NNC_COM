"use client";
import styles from "../../styles/IndustriesSection.module.css";

const industries = [
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    points: [
      "Custom healthcare software for operations and data management",
      "Patient management, appointment, and reporting systems",
      "Secure, compliance-ready healthcare software solutions",
    ],
  },
  {
    title: "Ecommerce",
    image: "/media/tech/45.jpg",
    points: [
      "Custom ecommerce software and backend systems",
      "Order management, inventory, and payment integration",
      "Scalable platforms for high traffic and growth",
    ],
  },
  {
    title: "Real Estate",
    image: "/media/tech/46.jpg",
    points: [
      "Property management and CRM software solutions",
      "Lead tracking, listings, and workflow automation",
      "Custom dashboards for agents and builders",
    ],
  },
  {
    title: "Education & eLearning",
    image: "/media/tech/47.jpg",
    points: [
      "Learning management systems and education platforms",
      "Student portals, assessments, and reporting tools",
      "Scalable software for institutes and training centers",
    ],
  },
  {
    title: "Food & Restaurants",
    image: "/media/tech/48.jpg",
    points: [
      "Restaurant management and ordering software",
      "Inventory, billing, and vendor management systems",
      "Integrated solutions for operations and reporting",
    ],
  },
  {
    title: "Fitness & Wellness",
    image: "/media/tech/49.jpg",
    points: [
      "Membership and subscription management software",
      "Scheduling, progress tracking, and analytics systems",
      "Custom solutions for gyms and wellness brands",
    ],
  },
  {
    title: "Travel & Tourism",
    image: "/media/tech/50.jpg",
    points: [
      "Travel booking and management software platforms",
      "Custom itinerary, booking, and reporting systems",
      "Scalable solutions for agencies and operators",
    ],
  },
  {
    title: "Finance & Insurance",
    image: "/media/tech/51.jpg",
    points: [
      "Secure financial and insurance software solutions",
      "Policy management, claims, and reporting systems",
      "Compliance-focused and data-secure platforms",
    ],
  },
];

export default function IndustriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Industries We Serve
          <span> as a Software Development Company in Mumbai</span>
        </h2>

        <p className={styles.subText}>
          As a trusted <strong>software development company in Mumbai</strong>, we
          build custom software solutions tailored to industry-specific workflows
          and business needs. Our solutions focus on performance, scalability,
          security, and long-term operational efficiency across multiple industries.
        </p>

        <div className={styles.grid}>
          {industries.map((item, index) => (
            <div className={styles.card} key={index}>
              <img src={item.image} alt={item.title} />

              {/* Default title */}
              <div className={styles.titleBar}>
                <h4>{item.title}</h4>
              </div>

              {/* Hover overlay */}
              <div className={styles.overlay}>
                <h4>{item.title}</h4>
                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
