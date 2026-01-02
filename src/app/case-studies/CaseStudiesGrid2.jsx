"use client";
import Link from "next/link";
import styles from "../../styles/CaseStudiesGrid2.module.css";

const industries = [
  {
    title: "Home Services",
    image: "/media/casestudies/homeservices1.jpg",
    points: [
      "Improved service discovery and booking flow",
      "Mobile-first experience for faster conversions",
      "Increased repeat service requests",
    ],
  },
  {
    title: "Events & Hospitality",
    image: "/media/casestudies/events.jpg",
    points: [
      "Streamlined event listings and registrations",
      "Better page speed and engagement metrics",
      "Clear CTAs driving higher enquiries",
    ],
  },
  {
    title: "IT Services & Technology",
    image: "/media/tech/47.jpg",
    points: [
      "Modernized brand presence and UI",
      "Clear service positioning for B2B leads",
      "Improved credibility with structured layouts",
    ],
  },
  {
    title: "Healthcare",
    image: "/media/tech/44.jpg",
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
            <div className={styles.card} key={index}>
              <img src={item.image} alt={item.title} />

              <div className={styles.glass}>
                <h4>{item.title}</h4>
                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              <Link
  href="/contact-us"
  className={styles.cta}
>
  Explore Solutions
</Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
