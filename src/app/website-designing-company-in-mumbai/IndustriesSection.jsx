"use client";
import styles from "../../styles/IndustriesSection.module.css";

const industries = [
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    points: [
      "Clean and trust-focused healthcare website designs",
      "Patient-friendly layouts for services and appointments",
      "Responsive designs with compliance-aware structure",
    ],
  },
  {
    title: "Ecommerce",
    image: "/media/tech/45.jpg",
    points: [
      "Conversion-focused ecommerce website designs",
      "User-friendly product and category layouts",
      "Responsive design for seamless shopping experience",
    ],
  },
  {
    title: "Real Estate",
    image: "/media/tech/46.jpg",
    points: [
      "Modern property listing website designs",
      "Lead-focused layouts for inquiries and bookings",
      "Visual storytelling for real estate projects",
    ],
  },
  {
    title: "Education & eLearning",
    image: "/media/tech/47.jpg",
    points: [
      "Intuitive education and institute website designs",
      "Clear course presentation and content structure",
      "Student-friendly and responsive layouts",
    ],
  },
  {
    title: "Food & Restaurants",
    image: "/media/tech/48.jpg",
    points: [
      "Visually appealing restaurant website designs",
      "Menu-focused layouts and brand presentation",
      "Mobile-friendly designs for local discovery",
    ],
  },
  {
    title: "Fitness & Wellness",
    image: "/media/tech/49.jpg",
    points: [
      "Clean and motivational fitness website designs",
      "Service-focused layouts for programs and trainers",
      "Responsive designs for all devices",
    ],
  },
  {
    title: "Travel & Tourism",
    image: "/media/tech/50.jpg",
    points: [
      "Destination-focused travel website designs",
      "Engaging layouts for tours and experiences",
      "Visual-first design to inspire users",
    ],
  },
  {
    title: "Finance & Insurance",
    image: "/media/tech/51.jpg",
    points: [
      "Professional and trust-driven website designs",
      "Clear service presentation and user flow",
      "Secure, responsive, and compliance-friendly layouts",
    ],
  },
];

export default function IndustriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Industries We Serve
          <span> as a Website Designing Company in Mumbai</span>
        </h2>

        <p className={styles.subText}>
          As a professional <strong>website designing company in Mumbai</strong>, we
          create visually appealing, user-friendly, and responsive websites for
          businesses across multiple industries. Our industry-specific website
          designs focus on usability, brand presentation, and conversion-driven
          user experiences.
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
