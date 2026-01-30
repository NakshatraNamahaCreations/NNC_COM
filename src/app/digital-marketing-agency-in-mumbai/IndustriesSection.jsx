"use client";
import styles from "../../styles/IndustriesSection.module.css";

const industries = [
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    points: [
      "Healthcare SEO and local search optimization",
      "Lead generation for clinics and hospitals",
      "Paid ads and patient inquiry campaigns",
    ],
  },
  {
    title: "Retail & Ecommerce",
    image: "/media/tech/45.jpg",
    points: [
      "Ecommerce SEO and Google Shopping ads",
      "Social media marketing and retargeting",
      "Conversion-focused performance campaigns",
    ],
  },
  {
    title: "Real Estate",
    image: "/media/tech/46.jpg",
    points: [
      "Property lead generation campaigns",
      "Google Ads and landing page optimization",
      "CRM-integrated inquiry management",
    ],
  },
  {
    title: "Education & eLearning",
    image: "/media/tech/47.jpg",
    points: [
      "Course promotion and student lead generation",
      "SEO and paid ads for education platforms",
      "Social media engagement and brand building",
    ],
  },
  {
    title: "Food & Grocery",
    image: "/media/tech/48.jpg",
    points: [
      "Local SEO and online visibility campaigns",
      "Social media ads for orders and offers",
      "Brand awareness and customer retention",
    ],
  },
  {
    title: "Fashion & Lifestyle",
    image: "/media/tech/49.jpg",
    points: [
      "Instagram and influencer marketing",
      "Ecommerce performance ads",
      "Brand storytelling and audience growth",
    ],
  },
  {
    title: "Travel & Tourism",
    image: "/media/tech/50.jpg",
    points: [
      "Travel lead generation and booking campaigns",
      "Search and display advertising",
      "Seasonal promotions and remarketing",
    ],
  },
  {
    title: "Finance & Insurance",
    image: "/media/tech/51.jpg",
    points: [
      "Lead generation with compliance-focused ads",
      "SEO for financial services",
      "High-intent conversion campaigns",
    ],
  },
];

export default function IndustriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Industries We Serve
          <span> as a Digital Marketing Agency in Mumbai</span>
        </h2>

        <p className={styles.subText}>
          As a trusted digital marketing agency in Mumbai, we help businesses across diverse industries improve online visibility, generate qualified leads, and drive measurable growth through data-driven marketing strategies.
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
