"use client";
import styles from "../../styles/IndustriesSection.module.css";

const industries = [
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    points: [
      "Animated explainer videos for healthcare services",
      "Patient education, awareness, and process animations",
      "Clear and trust-focused medical animation content",
    ],
  },
  {
    title: "ECommerce",
    image: "/media/tech/45.jpg",
    points: [
      "Product explainer and animated brand story videos",
      "Promotional animations for digital marketing",
      "Animations optimized for websites and social platforms",
    ],
  },
  {
    title: "Real Estate",
    image: "/media/tech/46.jpg",
    points: [
      "Animated property walkthroughs and project explainers",
      "Promotional animations for developers and agencies",
      "Visual storytelling to simplify property details",
    ],
  },
  {
    title: "Education & eLearning",
    image: "/media/tech/47.jpg",
    points: [
      "Animated course introductions and concept explainers",
      "Training and educational animation videos",
      "Easy-to-understand visual learning content",
    ],
  },
  {
    title: "Food & Restaurants",
    image: "/media/tech/48.jpg",
    points: [
      "Animated brand storytelling and menu explainers",
      "Promotional animations for food and restaurant brands",
      "Engaging visuals to highlight quality and experience",
    ],
  },
  {
    title: "Fitness & Wellness",
    image: "/media/tech/49.jpg",
    points: [
      "Animated fitness program and service explainers",
      "Brand introduction and promotional animations",
      "Engaging content for websites and social media",
    ],
  },
  {
    title: "Travel & Tourism",
    image: "/media/tech/50.jpg",
    points: [
      "Destination and experience-based animated videos",
      "Travel brand storytelling through animation",
      "Visually rich content to inspire audience interest",
    ],
  },
  {
    title: "Finance & Insurance",
    image: "/media/tech/51.jpg",
    points: [
      "Animated service explainers and brand videos",
      "Compliance-aware and trust-focused animations",
      "Clear visual communication for financial products",
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
          <span> as Animated Video Creators In Mumbai</span>
        </h2>

        <p className={styles.subText}>
          As professional animated video creators in Mumbai, we develop
          industry-specific animation content that helps businesses explain
          ideas clearly, build credibility, and engage their audience. Every
          animated video is crafted to match the communication needs and goals
          of the industries we work with.
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
