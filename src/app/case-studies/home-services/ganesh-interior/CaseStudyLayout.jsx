"use client";
import styles from "../../../../styles/CaseStudyLayout.module.css";
import CaseStudyHeader from "./CaseStudyHeader";
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
    title: "Design-Led Planning",
    text: "Every project begins with thoughtful space planning focused on comfort, flow, and long-term usability.",
  },
  {
    icon: <FaBolt />,
    title: "End-to-End Execution",
    text: "From concept development to final handover, all stages are handled with complete ownership and accountability.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Single Point Coordination",
    text: "Clients work with one dedicated expert, ensuring smooth communication and consistent execution.",
  },
  {
    icon: <FaCloud />,
    title: "Future-Ready Interiors",
    text: "Designs are created to remain functional, adaptable, and visually relevant over time.",
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
                src="/media/casestudies/ganesh-interiors1.png"
                alt="Ganesh Interior Designs Case Study"
              />
            </div>

            {/* OVERVIEW */}
            <div className={styles.contentBlock}>
              <h2>Project Overview</h2>
              <p>
                Ganesh Interior Designs delivers complete interior design and
                renovation solutions for residential and commercial spaces.
                The focus of every project is to combine thoughtful design,
                quality materials, and precise execution to create spaces that
                feel comfortable, functional, and visually refined.
              </p>
            </div>

            {/* DESIGN APPROACH */}
            <div className={styles.contentBlock}>
              <h2>Design & Execution Focus</h2>
              <p>
                Each project is handled with a clear design strategy that
                balances aesthetics, practicality, and durability. Rather
                than outsourcing or fragmenting responsibilities, the entire
                process is managed directly to ensure design intent is
                maintained throughout execution.
              </p>
            </div>

            {/* BUSINESS CHALLENGE */}
            <div className={styles.contentBlock}>
              <h2>Client Challenges</h2>
              <p>
                Clients approaching Ganesh Interior Designs often face
                challenges such as unclear planning, inconsistent execution,
                coordination issues between vendors, and difficulty visualising
                final outcomes before work begins.
              </p>
              <ul>
                <li>Lack of cohesive space planning</li>
                <li>Multiple contractors causing miscommunication</li>
                <li>Unclear material selection and finishing quality</li>
                <li>Stress during renovation and execution phases</li>
              </ul>
            </div>

            {/* STRATEGY */}
            <div className={styles.contentBlock}>
              <h2>Design Strategy</h2>
              <p>
                The strategy focused on delivering a seamless interior
                experience by offering complete design ownership — from layout
                planning and material selection to on-site execution and final
                styling.
              </p>
            </div>

            {/* PROJECT OBJECTIVES */}
            <div className={styles.contentBlock}>
              <h2>Project Objectives</h2>
              <ul>
                <li>Create interiors that are both visually appealing and practical</li>
                <li>Ensure smooth coordination through a single point of contact</li>
                <li>Maintain consistent quality across materials and finishes</li>
                <li>Reduce execution-related stress for clients</li>
                <li>Deliver interiors that remain relevant and durable over time</li>
              </ul>
            </div>
    
            {/* RESULTS */}
            <div className={styles.contentBlock}>
              <h2>Outcome & Impact</h2>
              <ul className={styles.resultsList}>
                <li>
                  <FaTrophy className={styles.resultIcon} />
                  Successfully delivered refined residential and commercial interiors
                </li>
                <li>
                  <FaMapMarkerAlt className={styles.resultIcon} />
                  Improved space utilisation and functional layouts
                </li>
                <li>
                  <FaTrophy className={styles.resultIcon} />
                  High client satisfaction through transparent communication
                </li>
              </ul>
            </div>

            {/* PROCESS SECTION */}
            <section className={styles.monthProgressSection}>
              <div className={styles.monthProgressContainer}>

                <div className={styles.monthProgressHeader}>
                  <span className={styles.monthProgressMonth}>Execution Phase</span>
                  <h2 className={styles.monthProgressTitle}>
                    Design Development & Interior Execution
                  </h2>
                </div>

                <div className={styles.monthProgressDivider} />

                <div className={styles.monthProgressGrid}>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaFileAlt />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Design Planning
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      Layout planning, material selection, and visual concepts
                      were developed to align with client preferences.
                    </p>
                  </div>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaPaperPlane />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      On-Site Execution
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      Civil work, carpentry, finishes, and installations were
                      executed with close supervision.
                    </p>
                  </div>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaMapMarkerAlt />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Quality Control
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      Each stage was reviewed to ensure finishing quality and
                      alignment with approved designs.
                    </p>
                  </div>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaSlidersH />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Final Styling & Handover
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      Lighting, décor, and finishing touches completed before
                      final handover.
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
                    This case study highlights Ganesh Interior Designs’
                    commitment to thoughtful planning, consistent execution,
                    and client-focused interior solutions.
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
                  Ganesh Interior Designs continues to deliver interiors that
                  balance design clarity, quality craftsmanship, and practical
                  living. This project reflects a commitment to complete
                  ownership, transparent execution, and lasting design value.
                </p>
              </div>

              {/* CTA */}
              <div className={styles.kaCtaSection}>
                <div className={styles.kaCtaInner}>
                  <h3 className={styles.kaCtaTitle}>
                    Transform Your Space With Confidence
                  </h3>
                  <p className={styles.kaCtaText}>
                    Partner with Ganesh Interior Designs for complete interior
                    design and renovation solutions.
                  </p>
                  <Link href="/contact-us" className={styles.kaCtaButton}>
                    Talk to Our Team
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
