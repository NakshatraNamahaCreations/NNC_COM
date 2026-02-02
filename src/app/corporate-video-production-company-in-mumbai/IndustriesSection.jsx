"use client";
import styles from "../../styles/IndustriesSection.module.css";

const industries = [
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    points: [
      "Corporate videos for hospitals and healthcare brands",
      "Patient awareness, service overview, and training videos",
      "Clear, professional, and trust-focused medical video content",
    ],
  },
  {
    title: "ECommerce",
    image: "/media/tech/45.jpg",
    points: [
      "Product showcase and brand story videos",
      "Promotional and marketing video content",
      "Videos optimized for websites and digital platforms",
    ],
  },
  {
    title: "Real Estate",
    image: "/media/tech/46.jpg",
    points: [
      "Property walkthrough and corporate brand videos",
      "Promotional videos for developers and agencies",
      "Visually engaging real estate video presentations",
    ],
  },
  {
    title: "Education & eLearning",
    image: "/media/tech/47.jpg",
    points: [
      "Institution profile and course introduction videos",
      "Training, explainer, and internal communication videos",
      "Structured and easy-to-understand educational content",
    ],
  },
  {
    title: "Food & Restaurants",
    image: "/media/tech/48.jpg",
    points: [
      "Brand, kitchen, and process-focused video content",
      "Promotional videos for restaurants and food brands",
      "Visual storytelling to highlight quality and experience",
    ],
  },
  {
    title: "Fitness & Wellness",
    image: "/media/tech/49.jpg",
    points: [
      "Brand introduction and facility overview videos",
      "Trainer profiles and promotional fitness videos",
      "Engaging content for websites and social platforms",
    ],
  },
  {
    title: "Travel & Tourism",
    image: "/media/tech/50.jpg",
    points: [
      "Destination and experience-based promotional videos",
      "Travel brand storytelling and service overview videos",
      "Visually rich content to inspire audience interest",
    ],
  },
  {
    title: "Finance & Insurance",
    image: "/media/tech/51.jpg",
    points: [
      "Corporate brand and service explanation videos",
      "Compliance-aware and trust-focused video production",
      "Clear messaging for financial products and services",
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
          <span> as a Corporate Video Production Company in Mumbai</span>
        </h2>

        <p className={styles.subText}>
          As a professional corporate video production company in Mumbai, we
          create industry-specific video content that helps businesses communicate
          clearly, build credibility, and engage their audience. Every video is
          planned to match the communication style and objectives of the
          industries we work with.
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
