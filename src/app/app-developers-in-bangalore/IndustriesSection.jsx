"use client";
import styles from "../../styles/IndustriesSection.module.css";

const industries = [
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    points: [
      "Telemedicine and online consultation apps",
      "Patient record and appointment management",
      "Secure healthcare data and compliance-ready systems",
    ],
  },
  {
    title: "ECommerce",
   image: "/media/tech/45.jpg",
    points: [
      "Custom online shopping and marketplace apps",
      "Secure payment and order management systems",
      "Personalized product recommendations and analytics",
    ],
  },
  {
    title: "Real Estate",
   image: "/media/tech/46.jpg",
    points: [
      "Property listing and lead management platforms",
      "Virtual property tours and booking solutions",
      "Smart dashboards for agents and developers",
    ],
  },
  {
    title: "Education & eLearning",
    image: "/media/tech/47.jpg",
    points: [
      "Learning management systems and student portals",
      "Live classes, assessments, and progress tracking",
      "Interactive eLearning and certification platforms",
    ],
  },
  {
    title: "Food Delivery",
   image: "/media/tech/48.jpg",
    points: [
      "Online food ordering and delivery apps",
      "Restaurant, menu, and order management systems",
      "Real-time delivery tracking and payment integration",
    ],
  },
  {
    title: "Fitness & Wellness",
  image: "/media/tech/49.jpg",
    points: [
      "Personalized workout and health tracking apps",
      "Nutrition planning and wellness programs",
      "Wearable device and real-time activity integration",
    ],
  },
  {
    title: "Travel & Tourism",
   image: "/media/tech/50.jpg",
    points: [
      "Travel booking and itinerary management apps",
      "Hotel, flight, and tour reservation systems",
      "Location-based services and travel experiences",
    ],
  },

  {
    title: "Finance & Insurance",
    image: "/media/tech/51.jpg",
    points: [
      "Digital banking and insurance applications",
      "Secure payment, policy, and claim management",
      "Fraud detection and compliance-driven solutions",
    ],
  },
];


export default function IndustriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
           <h2 className={styles.heading}>
           Industries We Serve
          <span> with Scalable Digital Solutions</span>  


          </h2>
        <p className={styles.subText}>
          We deliver tailored mobile and web application solutions across a wide range of industries, helping businesses streamline operations, enhance customer engagement, and scale with confidence. From startups to established enterprises, our industry-specific expertise ensures every solution is secure, scalable, and aligned with real-world business needs.
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
