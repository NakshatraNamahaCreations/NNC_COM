"use client";
import Link from "next/link";
import styles from "../../styles/CaseStudiesGrid2.module.css";

const industries = [
  {
    title: "Home Services",
    image: "/media/casestudies/homeservices1.jpg",
    link: "/case-studies/home-services",
    points: [
      "Improved service discovery and booking flow",
      "Mobile-first experience for faster conversions",
      "Increased repeat service requests",
    ],
  },
  {
    title: "Events & Hospitality",
    image: "/media/casestudies/events.jpg",
    link: "/case-studies/events-hospitality",
    points: [
      "Streamlined event listings and registrations",
      "Better page speed and engagement metrics",
      "Clear CTAs driving higher enquiries",
    ],
  },
  {
    title: "IT Services & Technology",
    image: "/media/tech/47.jpg",
    link: "/case-studies/it-services",
    points: [
      "Modernized brand presence and UI",
      "Clear service positioning for B2B leads",
      "Improved credibility with structured layouts",
    ],
  },
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
    link: "/case-studies/healthcare",
    points: [
      "Simplified appointment booking journeys",
      "Accessibility-focused responsive design",
      "Secure handling of sensitive data",
    ],
  },
];


export default function CaseStudiesGrid2() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Success Stories That Drive Growth</h2>

        <p className={styles.subText}>
          We partner with businesses across industries to design and build
          scalable digital platforms that improve efficiency, engagement,
          and long-term growth.
        </p>

     <div className={styles.grid}>
  {industries.map((item, index) => (
    <Link href={item.link} key={index} className={styles.cardLink}>
      <div className={styles.card}>
        <img src={item.image} alt={item.title} />

        <div className={styles.glass}>
          <h4>{item.title}</h4>

          <ul>
            {item.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <span className={styles.cta}>Explore Solutions </span>
        </div>
      </div>
    </Link>
  ))}
</div>

      </div>
    </section>
  );
}
