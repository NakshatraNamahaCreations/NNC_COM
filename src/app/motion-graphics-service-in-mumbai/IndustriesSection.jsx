"use client";
import styles from "../../styles/IndustriesSection.module.css";

const industries = [
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    points: [
      "Healthcare branding and visual identity design",
      "Patient education graphics and medical marketing creatives",
      "Clear, compliant, and trust-focused design solutions",
    ],
  },
  {
    title: "ECommerce",
    image: "/media/tech/45.jpg",
    points: [
      "Product visuals, banners, and promotional creatives",
      "Brand-focused design for digital campaigns",
      "Graphics optimized for websites and social platforms",
    ],
  },
  {
    title: "Real Estate",
    image: "/media/tech/46.jpg",
    points: [
      "Property branding and marketing creatives",
      "Promotional designs for developers and agencies",
      "Clean visual storytelling for real estate offerings",
    ],
  },
  {
    title: "Education & eLearning",
    image: "/media/tech/47.jpg",
    points: [
      "Course branding and educational design assets",
      "Training visuals and learning-focused creatives",
      "Easy-to-understand and engaging design experiences",
    ],
  },
  {
    title: "Food & Restaurants",
    image: "/media/tech/48.jpg",
    points: [
      "Restaurant branding and menu design",
      "Promotional creatives for food and beverage brands",
      "Visual designs highlighting quality and experience",
    ],
  },
  {
    title: "Fitness & Wellness",
    image: "/media/tech/49.jpg",
    points: [
      "Branding and promotional creatives for wellness brands",
      "Visual content for fitness programs and services",
      "Engaging graphics for websites and social media",
    ],
  },
  {
    title: "Travel & Tourism",
    image: "/media/tech/50.jpg",
    points: [
      "Destination branding and travel marketing creatives",
      "Visual storytelling for tourism campaigns",
      "Designs that inspire audience interest",
    ],
  },
  {
    title: "Finance & Insurance",
    image: "/media/tech/51.jpg",
    points: [
      "Professional branding and service marketing designs",
      "Compliance-aware and trust-focused creatives",
      "Clear visual communication for financial services",
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
          <span> as Motion Graphic Service In Mumbai</span>
        </h2>

        <p className={styles.subText}>
          As a professional Motion Graphic Service In Mumbai, we deliver
          industry-focused design solutions that help businesses communicate
          visually, strengthen brand credibility, and engage their target
          audience. Every design is created to match the unique communication
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
