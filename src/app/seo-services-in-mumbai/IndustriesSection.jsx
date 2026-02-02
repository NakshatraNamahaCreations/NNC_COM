"use client";
import styles from "../../styles/IndustriesSection.module.css";

const industries = [
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    points: [
      "Local SEO for hospitals, clinics, and diagnostic centers",
      "SEO-friendly healthcare service pages and blogs",
      "Improved visibility for medical searches in Mumbai",
    ],
  },
  {
    title: "ECommerce",
    image: "/media/tech/45.jpg",
    points: [
      "Product and category page SEO optimization",
      "Keyword-driven content for higher conversions",
      "Technical SEO for faster load speed and crawlability",
    ],
  },
  {
    title: "Real Estate",
    image: "/media/tech/46.jpg",
    points: [
      "Location-based SEO for property searches",
      "Lead-focused landing pages for projects and agents",
      "Google Maps and local listing optimization",
    ],
  },
  {
    title: "Education & eLearning",
    image: "/media/tech/47.jpg",
    points: [
      "SEO for courses, institutes, and online programs",
      "Content optimization for student search intent",
      "Improved rankings for competitive education keywords",
    ],
  },
  {
    title: "Food & Restaurant",
    image: "/media/tech/48.jpg",
    points: [
      "Local SEO for restaurants and food delivery brands",
      "Google Business Profile optimization",
      "Search visibility for location-based food searches",
    ],
  },
  {
    title: "Fitness & Wellness",
    image: "/media/tech/49.jpg",
    points: [
      "SEO for gyms, yoga centers, and wellness brands",
      "Local keyword targeting for membership growth",
      "Content optimization for health-focused searches",
    ],
  },
  {
    title: "Travel & Tourism",
    image: "/media/tech/50.jpg",
    points: [
      "SEO for travel agencies and tour operators",
      "Destination-based keyword optimization",
      "Organic traffic growth for travel searches",
    ],
  },
  {
    title: "Finance & Insurance",
    image: "/media/tech/51.jpg",
    points: [
      "SEO for financial services and insurance providers",
      "Content optimization for trust and compliance",
      "High-intent keyword targeting for lead generation",
    ],
  },
];

export default function IndustriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Industries We Serve
          <span> with SEO Services in Mumbai</span>
        </h2>

        <p className={styles.subText}>
          As a reliable provider of SEO services in Mumbai, we help businesses across industries improve search visibility, attract relevant traffic, and generate consistent organic leads. Our SEO strategies are tailored to industry-specific search behavior and competitive landscapes.
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
