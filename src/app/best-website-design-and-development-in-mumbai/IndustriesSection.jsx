"use client";
import styles from "../../styles/IndustriesSection.module.css";

const industries = [
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    points: [
      "Healthcare website design and development with appointment booking",
      "Patient-focused UI with secure data handling",
      "Fast, responsive, and compliance-aware medical websites",
    ],
  },
  {
    title: "ECommerce",
    image: "/media/tech/45.jpg",
    points: [
      "Ecommerce website design and development with smooth user flow",
      "Product pages, cart, checkout, and payment integration",
      "Performance-optimized and mobile-first ecommerce platforms",
    ],
  },
  {
    title: "Real Estate",
    image: "/media/tech/46.jpg",
    points: [
      "Real estate website design and development for property listings",
      "Lead capture forms, filters, and enquiry management",
      "Scalable websites for agents, brokers, and developers",
    ],
  },
  {
    title: "Education & eLearning",
    image: "/media/tech/47.jpg",
    points: [
      "Education website and eLearning platform development",
      "Course pages, dashboards, and content management systems",
      "User-friendly and scalable educational websites",
    ],
  },
  {
    title: "Food & Restaurants",
    image: "/media/tech/48.jpg",
    points: [
      "Restaurant website design and development",
      "Online menu, reservations, and ordering integration",
      "Brand-focused, location-based, and mobile-optimized websites",
    ],
  },
  {
    title: "Fitness & Wellness",
    image: "/media/tech/49.jpg",
    points: [
      "Fitness and wellness website design and development",
      "Membership plans, class schedules, and enquiry systems",
      "Trainer profiles and conversion-focused layouts",
    ],
  },
  {
    title: "Travel & Tourism",
    image: "/media/tech/50.jpg",
    points: [
      "Travel and tourism website design and development",
      "Package listings, booking enquiries, and gallery layouts",
      "Visually rich and performance-optimized travel websites",
    ],
  },
  {
    title: "Finance & Insurance",
    image: "/media/tech/51.jpg",
    points: [
      "Finance and insurance website design and development",
      "Service pages, calculators, and lead generation systems",
      "Secure, trust-focused, and regulation-aware website builds",
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
          <span> with Website Design and Development in Mumbai</span>
        </h2>

        <p className={styles.subText}>
          As a provider of the best website design and development in Mumbai, we
          build industry-specific websites that combine visual clarity,
          technical reliability, and user-focused functionality. Every website
          is developed to meet the unique business goals and audience
          expectations of each industry.
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
