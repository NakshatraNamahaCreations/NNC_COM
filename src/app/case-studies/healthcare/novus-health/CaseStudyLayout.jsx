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
    title: "Trust-Focused UX Design",
    text: "Healthcare-first UX built to establish credibility, clarity, and patient confidence from the first interaction.",
  },
  {
    icon: <FaBolt />,
    title: "SEO-Ready Architecture",
    text: "Clean, structured website architecture optimised for healthcare-related search visibility.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Clear Service Communication",
    text: "Well-defined healthcare service pages designed to educate patients and reduce decision hesitation.",
  },
  {
    icon: <FaCloud />,
    title: "Scalable & Secure Platform",
    text: "Performance-optimised setup ensuring fast load times, reliability, and long-term scalability.",
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
                src="/media/casestudies/novus2.png"
                alt="Novus Health Healthcare Website Case Study"
              />
            </div>

            {/* OVERVIEW */}
            <div className={styles.contentBlock}>
              <h2>Overview</h2>
              <p>
                Novus Health required a professional healthcare website that
                could build patient trust while improving search visibility.
                Their previous digital presence lacked clarity, SEO structure,
                and confidence-building elements needed in the healthcare
                industry.
              </p>
            </div>

            {/* BUSINESS CHALLENGE */}
            <div className={styles.contentBlock}>
              <h2>Business Challenge</h2>
              <p>
                Healthcare websites demand credibility, accuracy, and clear
                communication. Novus Health faced challenges with weak SEO
                foundations, unclear service messaging, and enquiry paths that
                did not inspire patient confidence.
              </p>
            </div>

            {/* STRATEGY */}
            <div className={styles.contentBlock}>
              <h2>Our Strategy</h2>
              <ul>
                <li>Patient-first website architecture</li>
                <li>SEO-structured healthcare content</li>
                <li>Clear, compliant service communication</li>
                <li>Trust-driven enquiry and conversion pathways</li>
              </ul>
            </div>

            {/* RESULTS */}
            <div className={styles.contentBlock}>
              <h2>Results</h2>
              <ul className={styles.resultsList}>
                <li>
                  <FaTrophy className={styles.resultIcon} />
                  Improved healthcare credibility and professional brand image
                </li>
                <li>
                  <FaChartLine className={styles.resultIcon} />
                  Growth in qualified patient enquiries
                </li>
                <li>
                  <FaMapMarkerAlt className={styles.resultIcon} />
                  Strong visibility for healthcare-related search queries
                </li>
              </ul>
            </div>


            {/* SEO PERFORMANCE */}
            <section className={styles.lavishSeoSection}>
              <div className={styles.lavishSeoContainer}>

                <h2 className={styles.lavishSeoTitle}>
                  SEO Growth Performance – Last 3 Months
                </h2>
                <p className={styles.lavishSeoSubtitle}>
                  Google Search Console comparison: Last 3 months vs previous 3 months
                </p>

                {/* METRICS */}
                <div className={styles.lavishMetricsGrid}>
                  <div className={styles.lavishMetricCard}>
                    <span className={styles.metricLabel}>Total Clicks</span>
                    <h3 className={styles.metricValue}>2.6K</h3>
                    <p className={styles.metricUp}>
                      <FaArrowUp /> from 980
                    </p>
                  </div>

                  <div className={styles.lavishMetricCard}>
                    <span className={styles.metricLabel}>Total Impressions</span>
                    <h3 className={styles.metricValue}>71.2K</h3>
                    <p className={styles.metricUp}>
                      <FaArrowUp /> from 9.4K
                    </p>
                  </div>

                  <div className={styles.lavishMetricCard}>
                    <span className={styles.metricLabel}>Average CTR</span>
                    <h3 className={styles.metricValue}>3.1%</h3>
                    <p className={styles.metricDown}>
                      <FaArrowDown /> from 9.8%
                    </p>
                  </div>

                  <div className={styles.lavishMetricCard}>
                    <span className={styles.metricLabel}>Average Position</span>
                    <h3 className={styles.metricValue}>9.4</h3>
                    <p className={styles.metricUp}>
                      <FaArrowUp /> improved from 18.2
                    </p>
                  </div>
                </div>

                {/* ANALYTICS IMAGE */}
                {/* <div className={styles.lavishAnalyticsBox}>
                  <img
                    src="/media/casestudies/novus-seo.png"
                    alt="Novus Health SEO performance comparison"
                    className={styles.lavishAnalyticsImage}
                  />
                </div> */}

                {/* CONTENT */}
                <div className={styles.lavishSeoContent}>
                  <p>
                    Over the past three months, Novus Health achieved consistent
                    improvements in organic visibility as the website began
                    ranking for healthcare-related service searches.
                  </p>

                  <p>
                    The steady rise in average position highlights the impact of
                    SEO-focused content structure, performance optimisation, and
                    trust-driven healthcare UX.
                  </p>
                </div>

              </div>
            </section>

            {/* MONTHLY PROGRESS */}
            <section className={styles.monthProgressSection}>
              <div className={styles.monthProgressContainer}>

                <div className={styles.monthProgressHeader}>
                  <span className={styles.monthProgressMonth}>MONTH 3</span>
                  <h2 className={styles.monthProgressTitle}>
                    Strengthening Healthcare Visibility & Patient Engagement
                  </h2>
                  <span className={styles.monthProgressDate}>June, 2025</span>
                </div>

                <div className={styles.monthProgressDivider} />

                <div className={styles.monthProgressGrid}>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaFileAlt />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Healthcare Content Refinement
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      Medical content was refined for accuracy, clarity, and
                      compliance to ensure patients could easily understand
                      healthcare services.
                    </p>
                  </div>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaPaperPlane />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Patient Reach Expansion
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      SEO optimisation expanded reach across healthcare search
                      queries, improving discoverability for relevant patient
                      needs.
                    </p>
                  </div>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaMapMarkerAlt />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Trust & Local Visibility
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      Local SEO enhancements strengthened visibility for nearby
                      patient searches while reinforcing trust signals.
                    </p>
                  </div>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaSlidersH />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Conversion Improvement
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      Enquiry paths were simplified to reduce hesitation,
                      resulting in higher-quality patient enquiries.
                    </p>
                  </div>

                </div>
              </div>
            </section>
<TechStackTabsPremium />
            {/* KEY ACHIEVEMENTS */}
            <section className={styles.kaSection}>
              <div className={styles.kaContainer}>
                <div className={styles.kaContentArea}>
                  <h2 className={styles.kaHeading}>Key Achievements & Impact</h2>
                  <div className={styles.kaDivider} />

                  <p className={styles.kaIntro}>
                    This project transformed Novus Health’s digital presence,
                    building trust, improving search visibility, and supporting
                    confident patient decision-making.
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
                    Build Trust-Driven Healthcare Websites
                  </h3>
                  <p className={styles.kaCtaText}>
                    Create professional healthcare websites designed to build
                    credibility, improve visibility, and convert patient
                    enquiries with confidence.
                  </p>
                  <Link href="/contact-us" className={styles.kaCtaButton}>
                    Talk to Our Experts
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
