"use client";
import styles from "../../styles/IndustriesSection.module.css";

const industries = [
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    points: [
      "Secure Node JS backend systems for healthcare platforms",
      "APIs for patient records and appointment management",
      "Compliance-ready and scalable server-side architecture",
    ],
  },
  {
    title: "ECommerce",
    image: "/media/tech/45.jpg",
    points: [
      "Node JS backend for high-traffic ecommerce platforms",
      "Order processing, payment gateway, and inventory APIs",
      "Scalable systems for peak traffic and growth",
    ],
  },
  {
    title: "Real Estate",
    image: "/media/tech/46.jpg",
    points: [
      "Backend systems for property listings and CRM platforms",
      "APIs for lead management and property data handling",
      "Secure admin panels and data-driven dashboards",
    ],
  },
  {
    title: "Education & eLearning",
    image: "/media/tech/47.jpg",
    points: [
      "Node JS backends for LMS and student portals",
      "APIs for live classes, assessments, and progress tracking",
      "Scalable systems to support large user bases",
    ],
  },
  {
    title: "Food Delivery",
    image: "/media/tech/48.jpg",
    points: [
      "Real-time order processing and delivery tracking systems",
      "Backend APIs for restaurants, menus, and payments",
      "High-performance Node JS architecture for peak hours",
    ],
  },
  {
    title: "Fitness & Wellness",
    image: "/media/tech/49.jpg",
    points: [
      "Backend systems for workout and health tracking apps",
      "Subscription, user management, and analytics APIs",
      "Real-time data handling with Node JS",
    ],
  },
  {
    title: "Travel & Tourism",
    image: "/media/tech/50.jpg",
    points: [
      "Backend platforms for bookings and itinerary management",
      "APIs for hotels, flights, and travel services",
      "Scalable systems for seasonal traffic spikes",
    ],
  },
  {
    title: "Finance & Insurance",
    image: "/media/tech/51.jpg",
    points: [
      "Secure Node JS backends for fintech applications",
      "Payment processing, policy, and claim management APIs",
      "Compliance-driven and data-secure server-side solutions",
    ],
  },
];

export default function IndustriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Industries We Serve
          <span> with Node JS Development in Mumbai</span>
        </h2>

        <p className={styles.subText}>
          As a trusted Node JS development company in Mumbai, we build secure, scalable, and high-performance backend systems across multiple industries. Our Node JS solutions are designed to handle complex business logic, real-time operations, and growing user demands with reliability.
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
