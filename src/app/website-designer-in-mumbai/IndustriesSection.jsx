"use client";
import styles from "../../styles/IndustriesSection.module.css";

const industries = [
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    points: [
      "Healthcare website design with appointment booking",
      "Patient-focused layouts and service information",
      "Clean, secure, and trust-driven medical website design",
    ],
  },
  {
    title: "ECommerce",
    image: "/media/tech/45.jpg",
    points: [
      "Ecommerce website design with smooth user flow",
      "Product pages, cart, and checkout UI design",
      "Conversion-focused and mobile-friendly layouts",
    ],
  },
  {
    title: "Real Estate",
    image: "/media/tech/46.jpg",
    points: [
      "Real estate website design for property listings",
      "Lead capture forms and enquiry-focused layouts",
      "Modern designs for agents and developers",
    ],
  },
  {
    title: "Education & eLearning",
    image: "/media/tech/47.jpg",
    points: [
      "Educational website and portal design",
      "Course pages, student dashboards, and content layouts",
      "User-friendly and scalable design structure",
    ],
  },
  {
    title: "Food & Restaurants",
    image: "/media/tech/48.jpg",
    points: [
      "Restaurant and food business website design",
      "Online menu, reservation, and ordering layouts",
      "Brand-focused and location-based design styles",
    ],
  },
  {
    title: "Fitness & Wellness",
    image: "/media/tech/49.jpg",
    points: [
      "Gym, yoga, and wellness website design",
      "Membership plans and class schedule layouts",
      "Trainer profiles and enquiry-focused UI",
    ],
  },
  {
    title: "Travel & Tourism",
    image: "/media/tech/50.jpg",
    points: [
      "Travel agency and tourism website design",
      "Package listings and booking enquiry layouts",
      "Visually rich destination-focused designs",
    ],
  },
  {
    title: "Finance & Insurance",
    image: "/media/tech/51.jpg",
    points: [
      "Finance and insurance website design",
      "Service pages and lead generation layouts",
      "Trust-focused and compliance-aware UI design",
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
          <span> as Website Designers in Mumbai</span>
        </h2>

        <p className={styles.subText}>
          As professional website designers in Mumbai, we create industry-specific
          website designs that help businesses build credibility, engage users,
          and generate enquiries. Every design is crafted to match the visual,
          functional, and user experience needs of each industry we work with.
        </p>

        {/* GRID */}
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
