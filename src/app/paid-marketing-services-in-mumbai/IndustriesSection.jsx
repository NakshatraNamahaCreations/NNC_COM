"use client";
import styles from "../../styles/IndustriesSection.module.css";

const industries = [
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    points: [
      "Paid ads for clinics and hospitals",
      "Patient lead generation campaigns",
      "Location-based and intent-driven advertising",
    ],
  },
  {
    title: "Retail & Ecommerce",
    image: "/media/tech/45.jpg",
    points: [
      "Google Shopping and ecommerce ads",
      "Dynamic remarketing campaigns",
      "Conversion-focused performance marketing",
    ],
  },
  {
    title: "Real Estate",
    image: "/media/tech/46.jpg",
    points: [
      "Property lead generation ads",
      "Landing page and funnel optimization",
      "High-intent search and display campaigns",
    ],
  },
  {
    title: "Education & eLearning",
    image: "/media/tech/47.jpg",
    points: [
      "Student lead generation campaigns",
      "Paid search and social ads",
      "Admission-focused performance marketing",
    ],
  },
  {
    title: "Food & Grocery",
    image: "/media/tech/48.jpg",
    points: [
      "Local paid advertising campaigns",
      "Offer and order-based social ads",
      "Customer acquisition and retention ads",
    ],
  },
  {
    title: "Fashion & Lifestyle",
    image: "/media/tech/49.jpg",
    points: [
      "Instagram and Meta ads",
      "Ecommerce sales and catalog ads",
      "Brand awareness and retargeting",
    ],
  },
  {
    title: "Travel & Tourism",
    image: "/media/tech/50.jpg",
    points: [
      "Booking and inquiry-driven ads",
      "Seasonal promotions and remarketing",
      "Search and display advertising",
    ],
  },
  {
    title: "Finance & Insurance",
    image: "/media/tech/51.jpg",
    points: [
      "Compliance-focused paid ads",
      "High-intent lead generation",
      "Conversion-optimized campaigns",
    ],
  },
];

export default function IndustriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Industries We Serve
          <span> with Paid Marketing Services in Mumbai</span>
        </h2>

        <p className={styles.subText}>
          As a performance-driven paid marketing agency in Mumbai, we help businesses across multiple industries generate qualified leads, increase sales, and maximize ROI through targeted advertising campaigns.
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
