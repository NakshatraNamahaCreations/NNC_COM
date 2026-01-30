"use client";
import styles from "../../styles/IndustriesSection.module.css";

const industries = [
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    points: [
      "2D animated explainer videos for healthcare services",
      "Patient education, awareness, and process-based 2D animations",
      "Clear, compliant, and trust-focused medical animations",
    ],
  },
  {
    title: "ECommerce",
    image: "/media/tech/45.jpg",
    points: [
      "2D product explainer and brand story animations",
      "Promotional 2D animations for digital campaigns",
      "2D animations optimized for websites and social platforms",
    ],
  },
  {
    title: "Real Estate",
    image: "/media/tech/46.jpg",
    points: [
      "2D animated property walkthroughs and project explainers",
      "Promotional 2D animations for developers and agencies",
      "Simplified visual storytelling for real estate offerings",
    ],
  },
  {
    title: "Education & eLearning",
    image: "/media/tech/47.jpg",
    points: [
      "2D animated course introductions and concept explainers",
      "Training and educational 2D animation content",
      "Easy-to-understand visual learning experiences",
    ],
  },
  {
    title: "Food & Restaurants",
    image: "/media/tech/48.jpg",
    points: [
      "2D animated brand storytelling and menu explainers",
      "Promotional 2D animations for food and restaurant brands",
      "Engaging visuals highlighting quality and experience",
    ],
  },
  {
    title: "Fitness & Wellness",
    image: "/media/tech/49.jpg",
    points: [
      "2D animated fitness program and service explainers",
      "Brand introduction and promotional 2D animations",
      "Engaging content for websites and social media",
    ],
  },
  {
    title: "Travel & Tourism",
    image: "/media/tech/50.jpg",
    points: [
      "2D destination and experience-based animated videos",
      "Travel brand storytelling through 2D animation",
      "Visually rich content that inspires audience interest",
    ],
  },
  {
    title: "Finance & Insurance",
    image: "/media/tech/51.jpg",
    points: [
      "2D animated service explainers and brand videos",
      "Compliance-aware and trust-focused 2D animations",
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
          <span> as 2D Animation Service In Mumbai</span>
        </h2>

        <p className={styles.subText}>
          As a professional 2D animation service in Mumbai, we create
          industry-focused animation solutions that help businesses explain
          ideas clearly, strengthen brand credibility, and engage their target
          audience. Each 2D animated video is crafted to match the communication
          needs of the industries we work with.
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
