"use client";
import styles from "../../styles/IndustriesSection.module.css";

const industries = [
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    points: [
      "Android telemedicine and doctor consultation apps",
      "Patient records, appointments, and prescription management",
      "Secure Android healthcare apps with data compliance",
    ],
  },
  {
    title: "ECommerce",
    image: "/media/tech/45.jpg",
    points: [
      "Android shopping and marketplace applications",
      "Secure payment gateway and order management",
      "Personalized product recommendations and analytics",
    ],
  },
  {
    title: "Real Estate",
    image: "/media/tech/46.jpg",
    points: [
      "Android property listing and lead management apps",
      "Virtual property tours and booking solutions",
      "Agent and builder dashboards with real-time updates",
    ],
  },
  {
    title: "Education & eLearning",
    image: "/media/tech/47.jpg",
    points: [
      "Android eLearning and student portal applications",
      "Live classes, exams, and progress tracking",
      "Interactive learning and certification platforms",
    ],
  },
  {
    title: "Food Delivery",
    image: "/media/tech/48.jpg",
    points: [
      "Android food ordering and delivery apps",
      "Restaurant, menu, and order management systems",
      "Live delivery tracking and online payments",
    ],
  },
  {
    title: "Fitness & Wellness",
    image: "/media/tech/49.jpg",
    points: [
      "Android fitness, workout, and health tracking apps",
      "Diet planning, wellness programs, and subscriptions",
      "Wearable integration and real-time activity tracking",
    ],
  },
  {
    title: "Travel & Tourism",
    image: "/media/tech/50.jpg",
    points: [
      "Android travel booking and itinerary management apps",
      "Hotel, flight, and tour reservation systems",
      "Location-based travel services and experiences",
    ],
  },
  {
    title: "Finance & Insurance",
    image: "/media/tech/51.jpg",
    points: [
      "Android banking, fintech, and insurance applications",
      "Secure payments, policy, and claims management",
      "Fraud prevention and compliance-driven solutions",
    ],
  },
];

export default function IndustriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Industries We Serve
          <span> with Android App Development in Mumbai</span>
        </h2>

        <p className={styles.subText}>
          As a reliable Android app development company in Mumbai, we build industry-specific Android applications that help businesses improve efficiency, engage users, and scale confidently. Our Android solutions are secure, scalable, and designed to meet real-world business requirements across multiple industries.
        </p>

        <div className={styles.grid}>
          {industries.map((item, index) => (
            <div className={styles.card} key={index}>
              <img
                src={item.image}
                alt={`${item.title} Android App Development in Mumbai`}
              />

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
