"use client";
import styles from "../../../../styles/CaseStudyLayout.module.css";
import CaseStudyHeader from "./CaseStudyHeader";
import EnquiryForm from "../../EnquiryForm";
import {
  FaTrophy,
  FaChartLine,
  FaMapMarkerAlt,
  FaArrowUp,
  FaArrowDown,
  FaFileAlt,
  FaPaperPlane,
  FaSlidersH,
  FaCrosshairs,
  FaBolt,
  FaNetworkWired,
  FaCloud,
} from "react-icons/fa";
import TechStackTabsPremium from "../../TechStackTabsPremium";
import Link from "next/link";

/* ================= ACHIEVEMENTS ================= */
const achievements = [
  {
    icon: <FaCrosshairs />,
    title: "Transparent Product Information",
    text: "Clear, verified, and science-backed product data designed for healthcare professionals and distributors.",
  },
  {
    icon: <FaBolt />,
    title: "Research-Driven Formulations",
    text: "Products developed through continuous R&D with a strong focus on safety, efficacy, and compliance.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Structured Product Catalog",
    text: "Well-organised therapeutic categories and ingredient-level clarity for easy understanding.",
  },
  {
    icon: <FaCloud />,
    title: "Scalable Digital Platform",
    text: "A robust platform built to support long-term growth, product expansion, and regulatory updates.",
  },
];

export default function CaseStudyLayout() {
  return (
    <>
      <section className={styles.page}>
        <div className={styles.container}>

          {/* LEFT CONTENT */}
          <div className={styles.left}>

            {/* Banner */}
            <div className={styles.banner}>
              <img
                src="/media/casestudies/medinovus2.png"
                alt="Medinovis Pharmaceuticals Case Study"
              />
            </div>

            {/* OVERVIEW */}
            <div className={styles.contentBlock}>
              <h2>Overview</h2>
              <p>
                Medinovis Pharmaceuticals Pvt. Ltd. is a trusted manufacturer of
                high-quality pharmaceutical products and formulations. The goal
                of this digital platform was to present accurate, verified, and
                transparent product information for healthcare professionals,
                distributors, and patients.
              </p>
            </div>

            {/* BUSINESS CONTEXT */}
            <div className={styles.contentBlock}>
              <h2>Our Core Strengths</h2>
              <p>
                Backed by years of research, innovation, and strict quality
                control, Medinovis focuses on developing formulations that meet
                the highest pharmaceutical standards. Each product is carefully
                researched, tested, and validated to ensure safety,
                reliability, and effectiveness.
              </p>
            </div>

            {/* STRATEGY */}
            <div className={styles.contentBlock}>
              <h2>Platform Strategy</h2>
              <ul>
                <li>Centralised product catalog with therapeutic categorisation</li>
                <li>Clear ingredient-level and formulation information</li>
                <li>Trust-focused content for doctors and pharmacists</li>
                <li>Compliance-ready structure for regulatory alignment</li>
              </ul>
            </div>

            {/* RESULTS */}
            <div className={styles.contentBlock}>
              <h2>Impact</h2>
              <ul className={styles.resultsList}>
                <li>
                  <FaTrophy className={styles.resultIcon} />
                  Strengthened brand credibility in the pharmaceutical space
                </li>
                <li>
                  <FaChartLine className={styles.resultIcon} />
                  Improved engagement from healthcare professionals
                </li>
                <li>
                  <FaMapMarkerAlt className={styles.resultIcon} />
                  Increased visibility across medical and distributor networks
                </li>
              </ul>
            </div>

            <TechStackTabsPremium />

            {/* PLATFORM PERFORMANCE */}
            <section className={styles.lavishSeoSection}>
              <div className={styles.lavishSeoContainer}>

                <h2 className={styles.lavishSeoTitle}>
                  Platform Visibility & Engagement Growth
                </h2>
                <p className={styles.lavishSeoSubtitle}>
                  Organic visibility and engagement improvements over recent months
                </p>

                {/* METRICS */}
                <div className={styles.lavishMetricsGrid}>
                  <div className={styles.lavishMetricCard}>
                    <span className={styles.metricLabel}>Product Page Views</span>
                    <h3 className={styles.metricValue}>Consistent Growth</h3>
                    <p className={styles.metricUp}>
                      <FaArrowUp /> steady increase
                    </p>
                  </div>

                  <div className={styles.lavishMetricCard}>
                    <span className={styles.metricLabel}>Information Accuracy</span>
                    <h3 className={styles.metricValue}>100%</h3>
                    <p className={styles.metricUp}>
                      <FaArrowUp /> verified content
                    </p>
                  </div>

                  <div className={styles.lavishMetricCard}>
                    <span className={styles.metricLabel}>Engagement Quality</span>
                    <h3 className={styles.metricValue}>High</h3>
                    <p className={styles.metricUp}>
                      <FaArrowUp /> professional users
                    </p>
                  </div>

                  <div className={styles.lavishMetricCard}>
                    <span className={styles.metricLabel}>Platform Reliability</span>
                    <h3 className={styles.metricValue}>Stable</h3>
                    <p className={styles.metricUp}>
                      <FaArrowUp /> scalable architecture
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className={styles.lavishSeoContent}>
                  <p>
                    The Medinovis platform acts as a central hub for accurate
                    pharmaceutical product information, supporting doctors,
                    pharmacists, distributors, and patients with reliable data.
                  </p>

                  <p>
                    Structured presentation and compliance-ready content ensure
                    that every product is clearly understood and trusted across
                    the healthcare ecosystem.
                  </p>
                </div>

              </div>
            </section>

            {/* QUALITY PROCESS */}
            <section className={styles.monthProgressSection}>
              <div className={styles.monthProgressContainer}>

                <div className={styles.monthProgressHeader}>
                  <span className={styles.monthProgressMonth}>QUALITY</span>
                  <h2 className={styles.monthProgressTitle}>
                    How We Ensure Pharmaceutical Quality
                  </h2>
                  <span className={styles.monthProgressDate}>Medinovis Standards</span>
                </div>

                <div className={styles.monthProgressDivider} />

                <div className={styles.monthProgressGrid}>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaFileAlt />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      R&D Formulation
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      All formulations are developed by a dedicated R&D team
                      using pharma-grade raw materials.
                    </p>
                  </div>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaPaperPlane />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Batch Testing
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      Every batch undergoes rigorous testing for potency,
                      stability, and safety.
                    </p>
                  </div>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaMapMarkerAlt />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Regulatory Compliance
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      Strict adherence to national and international
                      pharmaceutical regulations.
                    </p>
                  </div>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaSlidersH />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Quality Assurance
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      Continuous monitoring ensures consistency and reliability
                      before products reach healthcare providers.
                    </p>
                  </div>

                </div>
              </div>
            </section>

            {/* KEY ACHIEVEMENTS */}
            <section className={styles.kaSection}>
              <div className={styles.kaContainer}>
                <div className={styles.kaContentArea}>
                  <h2 className={styles.kaHeading}>Key Achievements & Impact</h2>
                  <div className={styles.kaDivider} />

                  <p className={styles.kaIntro}>
                    Medinovis Pharmaceuticals has successfully built a trusted
                    digital presence that reflects research excellence,
                    regulatory compliance, and transparency across its product
                    portfolio.
                  </p>

                  <div className={styles.kaTimeline}>
                    {achievements.map((item, index) => (
                      <div key={index} className={styles.kaTimelineItem}>
                        <div className={styles.kaIconColumn}>
                          <span className={styles.kaIcon}>{item.icon}</span>
                          {index !== achievements.length - 1 && (
                            <span className={styles.kaConnector}></span>
                          )}
                        </div>

                        <div className={styles.kaTextBlock}>
                          <h3 className={styles.kaItemTitle}>{item.title}</h3>
                          <p className={styles.kaItemText}>{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className={styles.kaCtaSection}>
                <div className={styles.kaCtaInner}>
                  <h3 className={styles.kaCtaTitle}>
                    Partner with Medinovis
                  </h3>
                  <p className={styles.kaCtaText}>
                    Discover pharmaceutical products built on research,
                    compliance, and uncompromising quality standards.
                  </p>
                  <Link href="/contact-us" className={styles.kaCtaButton}>
                    Connect With Us
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT FORM */}
          <aside className={styles.right}>
            <EnquiryForm />
          </aside>

        </div>
      </section>
    </>
  );
}
