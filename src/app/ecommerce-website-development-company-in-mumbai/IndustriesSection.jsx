"use client";
import styles from "../../styles/IndustriesSection.module.css";

const industries = [
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    points: [
      "Online medicine and healthcare product stores",
      "Appointment booking and service-based ecommerce",
      "Secure payments and patient data protection",
    ],
  },
  {
    title: "Retail & Ecommerce",
    image: "/media/tech/45.jpg",
    points: [
      "Custom ecommerce websites and marketplaces",
      "Product catalog, cart, and checkout systems",
      "Inventory, payment, and order management",
    ],
  },
  {
    title: "Real Estate",
    image: "/media/tech/46.jpg",
    points: [
      "Property listing and booking platforms",
      "Lead generation and inquiry management",
      "Online payments for bookings and services",
    ],
  },
  {
    title: "Education & eLearning",
    image: "/media/tech/47.jpg",
    points: [
      "Online course and digital product stores",
      "Subscription-based learning platforms",
      "Secure payments and user management",
    ],
  },
  {
    title: "Food & Grocery",
    image: "/media/tech/48.jpg",
    points: [
      "Online food ordering and grocery stores",
      "Real-time order tracking and delivery systems",
      "Payment gateway and menu management",
    ],
  },
  {
    title: "Fashion & Lifestyle",
    image: "/media/tech/49.jpg",
    points: [
      "Online fashion and lifestyle ecommerce stores",
      "Product variants, size charts, and filters",
      "Secure checkout and inventory control",
    ],
  },
  {
    title: "Travel & Tourism",
    image: "/media/tech/50.jpg",
    points: [
      "Travel booking and tour package websites",
      "Online payments for reservations",
      "Customer dashboards and booking management",
    ],
  },
  {
    title: "Finance & Insurance",
    image: "/media/tech/51.jpg",
    points: [
      "Service-based ecommerce platforms",
      "Secure online payments and data handling",
      "Compliance-ready transaction systems",
    ],
  },
];

export default function IndustriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Industries We Serve
          <span> as an Ecommerce Website Development Company in Mumbai</span>
        </h2>

        <p className={styles.subText}>
          As a trusted ecommerce website development company in Mumbai, we build secure, scalable, and conversion-focused ecommerce platforms for businesses across multiple industries. Our ecommerce solutions are designed to support online sales, manage products efficiently, and scale as your business grows.
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
