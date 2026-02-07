"use client";
import styles from "../../styles/IndustriesSection.module.css";

const industries = [
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    points: [
      "B2B lead generation for healthcare service providers",
      "SEO and LinkedIn campaigns for clinics and hospitals",
      "Compliance-aware healthcare marketing strategies",
    ],
  },
  {
    title: "IT & SaaS",
    image: "/media/tech/45.jpg",
    points: [
      "B2B lead generation for SaaS and IT companies",
      "Account-based marketing and LinkedIn Ads",
      "Demand generation for high-value software solutions",
    ],
  },
  {
    title: "Real Estate",
    image: "/media/tech/46.jpg",
    points: [
      "B2B lead generation for developers and brokers",
      "Google Ads and landing page optimization",
      "CRM-integrated inquiry and pipeline management",
    ],
  },
  {
    title: "Education & EdTech",
    image: "/media/tech/47.jpg",
    points: [
      "Lead generation for B2B education services",
      "SEO and paid campaigns for training providers",
      "Content marketing for institutional outreach",
    ],
  },
  {
    title: "Manufacturing & Industrial",
    image: "/media/tech/48.jpg",
    points: [
      "B2B marketing for manufacturers and suppliers",
      "Lead generation for distributors and exporters",
      "Search and LinkedIn campaigns for industrial buyers",
    ],
  },
  {
    title: "Finance & Insurance",
    image: "/media/tech/49.jpg",
    points: [
      "Compliance-focused B2B lead generation",
      "SEO and paid campaigns for financial services",
      "High-intent conversion strategies",
    ],
  },
  {
    title: "Logistics & Supply Chain",
    image: "/media/tech/50.jpg",
    points: [
      "B2B lead generation for logistics providers",
      "Search and performance marketing campaigns",
      "Pipeline-focused digital marketing strategies",
    ],
  },
  {
    title: "Professional Services",
    image: "/media/tech/51.jpg",
    points: [
      "B2B marketing for consulting and service firms",
      "Lead nurturing and demand generation",
      "Content-driven trust and authority building",
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
          <span> as a B2B Marketing Company in Mumbai</span>
        </h2>

        <p className={styles.subText}>
          As a trusted <strong>B2B marketing company in Mumbai</strong>, we help
          businesses across multiple industries generate qualified leads, build
          stronger sales pipelines, and achieve consistent growth through
          structured and performance-driven B2B marketing strategies.
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
