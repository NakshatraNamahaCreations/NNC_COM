"use client";
import styles from "../../styles/IndustriesSection.module.css";

const industries = [
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    points: [
      "React Native telemedicine and doctor consultation apps",
      "Patient records, appointments, and prescription management",
      "Secure healthcare apps with cross-platform data compliance",
    ],
  },
  {
    title: "ECommerce",
    image: "/media/tech/45.jpg",
    points: [
      "React Native shopping and marketplace applications",
      "Secure payment gateway and in-app checkout",
      "Personalized product recommendations and analytics",
    ],
  },
  {
    title: "Real Estate",
    image: "/media/tech/46.jpg",
    points: [
      "React Native property listing and lead management apps",
      "Virtual property tours and booking solutions",
      "Agent and builder dashboards for Android & iOS",
    ],
  },
  {
    title: "Education & eLearning",
    image: "/media/tech/47.jpg",
    points: [
      "React Native eLearning and student portal applications",
      "Live classes, exams, and progress tracking",
      "Interactive learning and certification platforms",
    ],
  },
  {
    title: "Food Delivery",
    image: "/media/tech/48.jpg",
    points: [
      "React Native food ordering and delivery apps",
      "Restaurant, menu, and order management systems",
      "Live delivery tracking and online payments",
    ],
  },
  {
    title: "Fitness & Wellness",
    image: "/media/tech/49.jpg",
    points: [
      "React Native fitness, workout, and health tracking apps",
      "Diet planning, wellness programs, and subscriptions",
      "Wearable device and real-time activity integration",
    ],
  },
  {
    title: "Travel & Tourism",
    image: "/media/tech/50.jpg",
    points: [
      "React Native travel booking and itinerary management apps",
      "Hotel, flight, and tour reservation systems",
      "Location-based travel services and experiences",
    ],
  },
  {
    title: "Finance & Insurance",
    image: "/media/tech/51.jpg",
    points: [
      "React Native banking, fintech, and insurance applications",
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
          <span> with React Native Mobile App Development in Mumbai</span>
        </h2>

        <p className={styles.subText}>
          As a trusted provider of React Native Mobile App Development in Mumbai,
          we build industry-specific mobile applications that help businesses
          reach users on both Android and iOS using a single codebase. Our React
          Native solutions are fast, secure, scalable, and designed to support
          real business growth across multiple industries.
        </p>

        <div className={styles.grid}>
          {industries.map((item, index) => (
            <div className={styles.card} key={index}>
              <img
                src={item.image}
                alt={`${item.title} React Native Mobile App Development in Mumbai`}
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
