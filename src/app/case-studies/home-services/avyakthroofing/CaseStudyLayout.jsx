"use client";
import styles from "../../../../styles/CaseStudyLayout.module.css";
import EnquiryForm from "../../EnquiryForm";
import {
  FaTrophy,
  FaMapMarkerAlt,
  FaFileAlt,
  FaPaperPlane,
  FaSlidersH,
  FaCrosshairs,
  FaBolt,
  FaNetworkWired,
  FaCloud,
} from "react-icons/fa";
import Link from "next/link";

/* ================= ACHIEVEMENTS ================= */
const achievements = [
  {
    icon: <FaCrosshairs />,
    title: "End-to-End Roofing Expertise",
    text: "From consultation to installation and aftercare, Avyakth delivers complete roofing solutions under one roof.",
  },
  {
    icon: <FaBolt />,
    title: "High-Performance Materials",
    text: "Use of premium roofing shingles, metal sheets, and boards designed to withstand Indian weather conditions.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Single Point Accountability",
    text: "Clients benefit from a dedicated team managing planning, execution, and quality control seamlessly.",
  },
  {
    icon: <FaCloud />,
    title: "Long-Term Protection",
    text: "Roofing systems engineered for durability, thermal comfort, and minimal maintenance over time.",
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
                src="/media/casestudies/avyakthroofing1.png"
                alt="Avyakth Roofing Solutions Case Study"
              />
            </div>

            {/* OVERVIEW */}
            <div className={styles.contentBlock}>
              <h2>Project Overview</h2>
              <p>
                Avyakth Roofing Solutions is a trusted provider of premium roofing
                systems and building solutions across residential, commercial,
                and institutional projects. The focus is on delivering durable,
                weather-resistant, and visually appealing roofing solutions
                tailored to Indian climatic conditions.
              </p>
            </div>

            {/* APPROACH */}
            <div className={styles.contentBlock}>
              <h2>Approach & Execution Philosophy</h2>
              <p>
                Each roofing project is approached with detailed technical
                planning, careful material selection, and professional
                installation. Avyakth ensures structural integrity, thermal
                comfort, and long-term performance while maintaining strong
                aesthetic appeal.
              </p>
            </div>

            {/* CLIENT CHALLENGES */}
            <div className={styles.contentBlock}>
              <h2>Client Challenges</h2>
              <p>
                Clients seeking roofing solutions often face uncertainty around
                material quality, weather resistance, installation standards,
                and long-term maintenance.
              </p>
              <ul>
                <li>Leaks and water damage during monsoon seasons</li>
                <li>Low-quality materials with short lifespan</li>
                <li>Poor installation causing structural issues</li>
                <li>Lack of warranty and post-installation support</li>
              </ul>
            </div>

            {/* STRATEGY */}
            <div className={styles.contentBlock}>
              <h2>Roofing Strategy</h2>
              <p>
                Avyakth implemented a solution-driven roofing strategy focused on
                site assessment, climate suitability, and product performance.
                Each project was customized with the right roofing system,
                underlay, and installation method.
              </p>
            </div>

            {/* OBJECTIVES */}
            <div className={styles.contentBlock}>
              <h2>Project Objectives</h2>
              <ul>
                <li>Deliver leak-proof, weather-resistant roofing systems</li>
                <li>Ensure long-term durability with minimal maintenance</li>
                <li>Improve thermal comfort and energy efficiency</li>
                <li>Maintain consistent installation quality across projects</li>
                <li>Provide clear warranties and after-sales support</li>
              </ul>
            </div>

            {/* RESULTS */}
            <div className={styles.contentBlock}>
              <h2>Outcome & Impact</h2>
              <ul className={styles.resultsList}>
                <li>
                  <FaTrophy className={styles.resultIcon} />
                  Successfully completed 1000+ roofing projects across sectors
                </li>
                <li>
                  <FaMapMarkerAlt className={styles.resultIcon} />
                  Delivered durable roofing solutions across Karnataka
                </li>
                <li>
                  <FaTrophy className={styles.resultIcon} />
                  High customer satisfaction with long-term performance
                </li>
              </ul>
            </div>

            {/* PROCESS */}
            <section className={styles.monthProgressSection}>
              <div className={styles.monthProgressContainer}>

                <div className={styles.monthProgressHeader}>
                  <span className={styles.monthProgressMonth}>Execution Phase</span>
                  <h2 className={styles.monthProgressTitle}>
                    Roofing Planning & Installation Process
                  </h2>
                </div>

                <div className={styles.monthProgressDivider} />

                <div className={styles.monthProgressGrid}>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaFileAlt />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Site Survey & Consultation
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      Detailed site inspection, product recommendations, and
                      transparent cost estimation.
                    </p>
                  </div>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaPaperPlane />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Material Selection
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      Selection of shingles, metal sheets, boards, and
                      accessories based on project needs.
                    </p>
                  </div>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaMapMarkerAlt />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Professional Installation
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      Skilled teams execute installations with strict quality
                      checks at every stage.
                    </p>
                  </div>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaSlidersH />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Handover & Aftercare
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      Final inspection, warranty handover, and ongoing support.
                    </p>
                  </div>

                </div>
              </div>
            </section>

            {/* KEY ACHIEVEMENTS */}
            <section className={styles.kaSection}>
              <div className={styles.kaContainer}>
                <div className={styles.kaContentArea}>
                  <h2 className={styles.kaHeading}>Key Achievements</h2>
                  <div className={styles.kaDivider} />

                  <p className={styles.kaIntro}>
                    This case study showcases Avyakth Roofing Solutions’ expertise
                    in delivering durable, efficient, and premium roofing
                    systems across diverse applications.
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

              {/* CONCLUSION */}
              <div className={styles.contentBlock}>
                <h2>Conclusion</h2>
                <p>
                  Avyakth Roofing Solutions continues to set benchmarks in the
                  roofing industry by combining quality materials, skilled
                  execution, and dependable after-sales support. This project
                  reflects their commitment to long-lasting roofing excellence.
                </p>
              </div>

              {/* CTA */}
              <div className={styles.kaCtaSection}>
                <div className={styles.kaCtaInner}>
                  <h3 className={styles.kaCtaTitle}>
                    Build Stronger, Smarter Roofs
                  </h3>
                  <p className={styles.kaCtaText}>
                    Partner with Avyakth Roofing Solutions for reliable and
                    premium roofing systems.
                  </p>
                  <Link href="/contact-us" className={styles.kaCtaButton}>
                    Get a Free Roofing Consultation
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
