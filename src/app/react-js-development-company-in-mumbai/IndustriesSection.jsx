"use client";
import styles from "../../styles/IndustriesSection.module.css";

const industries = [
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    points: [
      "React-based patient portals and dashboards",
      "Appointment booking and telemedicine interfaces",
      "Secure, compliant healthcare frontend systems",
    ],
  },
  {
    title: "ECommerce",
    image: "/media/tech/45.jpg",
    points: [
      "High-performance React storefronts",
      "Shopping carts, checkout, and payment UI",
      "Product filtering, search, and analytics dashboards",
    ],
  },
  {
    title: "Real Estate",
    image: "/media/tech/46.jpg",
    points: [
      "Property listing and lead management portals",
      "Interactive React-based property showcases",
      "Admin dashboards for agents and developers",
    ],
  },
  {
    title: "Education & eLearning",
    image: "/media/tech/47.jpg",
    points: [
      "Learning management system frontends",
      "Student portals and interactive dashboards",
      "Live class interfaces and progress tracking",
    ],
  },
  {
    title: "Food Delivery",
    image: "/media/tech/48.jpg",
    points: [
      "React-based food ordering interfaces",
      "Real-time order tracking dashboards",
      "Restaurant and delivery management panels",
    ],
  },
  {
    title: "Fitness & Wellness",
    image: "/media/tech/49.jpg",
    points: [
      "Workout and health tracking dashboards",
      "Subscription and member management portals",
      "Real-time data visualization and analytics",
    ],
  },
  {
    title: "Travel & Tourism",
    image: "/media/tech/50.jpg",
    points: [
      "Travel booking and itinerary dashboards",
      "Hotel, flight, and tour UI systems",
      "Location-based React applications",
    ],
  },
  {
    title: "Finance & Insurance",
    image: "/media/tech/51.jpg",
    points: [
      "Secure fintech and insurance dashboards",
      "Payment, policy, and claim management UIs",
      "Compliance-driven and data-secure frontend systems",
    ],
  },
];

export default function IndustriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Industries We Serve
          <span> with React JS Development in Mumbai</span>
        </h2>

        <p className={styles.subText}>
          As a trusted React JS development company in Mumbai, we build scalable, high-performance web applications across multiple industries. Our React solutions are designed to handle real-world usage, complex workflows, and growing user bases while delivering smooth and intuitive user experiences.
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
