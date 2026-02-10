"use client";
import styles from "../../styles/IndustriesSection.module.css";

const industries = [
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    points: [
      "Custom CRM for patient data and appointment workflows",
      "Automated follow-ups and communication management",
      "Centralized systems for medical and support teams",
    ],
  },
  {
    title: "ECommerce",
    image: "/media/tech/45.jpg",
    points: [
      "Custom CRM for customer lifecycle management",
      "Order history and engagement tracking",
      "Automated marketing and sales workflows",
    ],
  },
  {
    title: "Real Estate",
    image: "/media/tech/46.jpg",
    points: [
      "Lead tracking and property inquiry management",
      "Custom sales pipeline for agents and teams",
      "Automated follow-ups and customer communication",
    ],
  },
  {
    title: "Education & eLearning",
    image: "/media/tech/47.jpg",
    points: [
      "Student inquiry and admission management systems",
      "Automated communication and follow-up tracking",
      "Centralized CRM for courses and student data",
    ],
  },
  {
    title: "Food & Restaurants",
    image: "/media/tech/48.jpg",
    points: [
      "Customer engagement and loyalty management",
      "Feedback tracking and repeat customer insights",
      "Custom CRM for promotions and communication",
    ],
  },
  {
    title: "Fitness & Wellness",
    image: "/media/tech/49.jpg",
    points: [
      "Member management and engagement tracking",
      "Automated reminders and subscription management",
      "Centralized customer and service tracking",
    ],
  },
  {
    title: "Travel & Tourism",
    image: "/media/tech/50.jpg",
    points: [
      "Customer inquiry and booking workflow management",
      "Automated communication and follow-ups",
      "Custom CRM for repeat customer management",
    ],
  },
  {
    title: "Finance & Insurance",
    image: "/media/tech/51.jpg",
    points: [
      "Client data and interaction management",
      "Custom sales and policy tracking workflows",
      "Secure and structured CRM implementation",
    ],
  },
];

export default function IndustriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* HEADING */}
        <h2 className={styles.heading}>
          Industries We Serve
          <span> With Custom CRM Development</span>
        </h2>

        <p className={styles.subText}>
          As a custom CRM development company, we build industry-focused CRM systems that help businesses manage customer relationships, automate workflows, and improve operational efficiency. Each CRM solution is designed to match specific business processes and long-term growth requirements.
        </p>

        {/* GRID */}
        <div className={styles.grid}>
          {industries.map((item, index) => (
            <div className={styles.card} key={index}>
              <img src={item.image} alt={item.title} />

              <div className={styles.titleBar}>
                <h4>{item.title}</h4>
              </div>

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
