"use client";
import styles from "../../styles/IndustriesSection.module.css";

const industries = [
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    points: [
      "Mobile apps for telemedicine and virtual consultations",
      "Patient records, appointments, and prescription management",
      "Secure healthcare apps with data privacy and compliance",
    ],
  },
  {
    title: "ECommerce",
    image: "/media/tech/45.jpg",
    points: [
      "Mobile shopping and marketplace applications",
      "Secure payment gateways and order management",
      "Personalized user experience and analytics-driven insights",
    ],
  },
  {
    title: "Real Estate",
    image: "/media/tech/46.jpg",
    points: [
      "Mobile property listing and lead management apps",
      "Virtual tours, inquiries, and booking solutions",
      "Agent and builder dashboards with real-time updates",
    ],
  },
  {
    title: "Education & eLearning",
    image: "/media/tech/47.jpg",
    points: [
      "Mobile learning platforms and student portals",
      "Live classes, assessments, and progress tracking",
      "Interactive courses and certification systems",
    ],
  },
  {
    title: "Food Delivery",
    image: "/media/tech/48.jpg",
    points: [
      "Mobile food ordering and delivery applications",
      "Restaurant, menu, and order management systems",
      "Live delivery tracking and integrated online payments",
    ],
  },
  {
    title: "Fitness & Wellness",
    image: "/media/tech/49.jpg",
    points: [
      "Mobile fitness, workout, and health tracking apps",
      "Diet planning, wellness programs, and subscriptions",
      "Wearable integration and real-time activity tracking",
    ],
  },
  {
    title: "Travel & Tourism",
    image: "/media/tech/50.jpg",
    points: [
      "Mobile travel booking and itinerary management apps",
      "Hotel, flight, and tour reservation systems",
      "Location-based travel services and experiences",
    ],
  },
  {
    title: "Finance & Insurance",
    image: "/media/tech/51.jpg",
    points: [
      "Mobile banking, fintech, and insurance applications",
      "Secure payments, policies, and claims management",
      "Fraud prevention and compliance-ready solutions",
    ],
  },
];

export default function IndustriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Industries We Serve
          <span> as Mobile App Developers in Mumbai</span>
        </h2>

        <p className={styles.subText}>
          As experienced mobile app developers in Mumbai, we create industry-specific
          mobile applications that help businesses improve efficiency, engage users,
          and scale with confidence. Our mobile solutions are secure, scalable, and
          designed to support real-world business requirements across industries.
        </p>

        <div className={styles.grid}>
          {industries.map((item, index) => (
            <div className={styles.card} key={index}>
              <img
                src={item.image}
                alt={`${item.title} Mobile App Development in Mumbai`}
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
