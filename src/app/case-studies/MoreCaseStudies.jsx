"use client";
import Link from "next/link";
import styles from "./MoreCaseStudies.module.css";

const caseStudies = [
  {
    title:
      "From Manual Chaos to 2× User Acquisition: How a Cab Management Platform Scaled",
    date: "September 12, 2025",
    image: "/media/casestudies/cab.png",
    link: "/case-studies/cab-management",
  },
  {
    title:
      "Building Next-Gen Digital SOV Platform for Insurers to Assess Risk in Real-Time",
    date: "August 29, 2025",
    image: "/media/casestudies/sov.png",
    link: "/case-studies/digital-sov",
  },
  {
    title:
      "Streamlining Internal Hiring with Smart Recruitment Automation",
    date: "August 21, 2025",
    image: "/media/casestudies/recruitment.png",
    link: "/case-studies/recruitment-automation",
  },
  {
    title:
      "How a Custom Platform Transformed Operations for an Optics Manufacturer",
    date: "August 14, 2025",
    image: "/media/casestudies/optics.png",
    link: "/case-studies/optics-platform",
  },
  {
    title:
      "Modernization of Information Management System on React & Node.js",
    date: "August 11, 2025",
    image: "/media/casestudies/ims.png",
    link: "/case-studies/ims-modernization",
  },
  {
    title:
      "Custom B2B Self-Service Portal for Account Management",
    date: "July 30, 2025",
    image: "/media/casestudies/b2b.png",
    link: "/case-studies/b2b-portal",
  },
];

export default function MoreCaseStudies() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* HEADING */}
        <h2 className={styles.heading}>More Case Studies</h2>

        {/* GRID */}
        <div className={styles.grid}>
          {caseStudies.map((item, index) => (
            <Link key={index} href={item.link} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={item.image} alt={item.title} />
              </div>

              <div className={styles.content}>
                <h3>{item.title}</h3>
                <span className={styles.date}>{item.date}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA BANNER */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaContent}>
            <h3>Build Smarter Digital Products with Us</h3>
            <p>
              Turn your ideas into scalable websites, platforms, and mobile apps
              designed to grow your business.
            </p>
            <Link href="/contact-us" className={styles.ctaButton}>
              Talk to Our Experts
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
