"use client";
import styles from "../../../../styles/CaseStudyLayout.module.css";
import CaseStudyHeader from "./CaseStudyHeader";
import EnquiryForm from "../../EnquiryForm";
import { FaTrophy, FaChartLine, FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import TechStackTabsPremium from "../../TechStackTabsPremium";
import Link from "next/link";
import {
  FaFileAlt,
  FaPaperPlane,
  FaSlidersH,
  FaCrosshairs,
  FaBolt,
  FaNetworkWired,
  FaCloud,
} from "react-icons/fa";

/* ================= ACHIEVEMENTS ================= */
const achievements = [
  {
    icon: <FaCrosshairs />,
    title: "Accurate Documentation Handling",
    text: "Each application is handled with precision to avoid errors, rejections, and unnecessary delays.",
  },
  {
    icon: <FaBolt />,
    title: "Faster Processing Support",
    text: "Streamlined workflows help speed up document submission and follow-ups.",
  },
  {
    icon: <FaNetworkWired />,
    title: "All Services Under One Roof",
    text: "PAN, Passport, Visa, PCC, Insurance, and agreements managed from a single platform.",
  },
  {
    icon: <FaCloud />,
    title: "Reliable & Scalable Operations",
    text: "Digitally organised systems ensure consistency, security, and long-term service reliability.",
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
                src="/media/casestudies/makemydocument2.png"
                alt="Make My Documents Case Study"
              />
            </div>

            {/* OVERVIEW */}
            <div className={styles.contentBlock}>
              <h2>Overview</h2>
              <p>
                Make My Documents simplifies the process of obtaining essential
                government and personal documents. The goal was to create a
                clear, trustworthy digital presence that communicates services
                effectively while building confidence among users seeking
                document assistance.
              </p>
            </div>

            {/* BUSINESS CHALLENGE */}
            <div className={styles.contentBlock}>
              <h2>Business Challenge</h2>
              <p>
                Document-related services often involve complex procedures and
                unclear information. Make My Documents needed a structured
                website that could clearly explain services, reduce user
                confusion, and establish trust for sensitive documentation
                processes.
              </p>
            </div>

            {/* STRATEGY */}
            <div className={styles.contentBlock}>
              <h2>Our Strategy</h2>
              <ul>
                <li>Clear service categorisation for easy understanding</li>
                <li>User-friendly content explaining document processes</li>
                <li>Trust-focused website structure and messaging</li>
                <li>Simplified enquiry and support flow</li>
              </ul>
            </div>

            {/* RESULTS */}
            <div className={styles.contentBlock}>
              <h2>Results</h2>
              <ul className={styles.resultsList}>
                <li>
                  <FaTrophy className={styles.resultIcon} />
                  Improved trust and credibility among users
                </li>
                <li>
                  <FaChartLine className={styles.resultIcon} />
                  Increase in genuine document-related enquiries
                </li>
                <li>
                  <FaMapMarkerAlt className={styles.resultIcon} />
                  Strong local visibility for document services
                </li>
              </ul>
            </div>

            <TechStackTabsPremium />

            {/* PERFORMANCE SECTION */}
          <section className={styles.lavishSeoSection}>
  <div className={styles.lavishSeoContainer}>

    <h2 className={styles.lavishSeoTitle}>
      Organic Search Growth Performance – Google Search Console
    </h2>
    <p className={styles.lavishSeoSubtitle}>
      Comparison: Last 6 months vs previous 6 months
    </p>

    {/* METRICS */}
    <div className={styles.lavishMetricsGrid}>
      <div className={styles.lavishMetricCard}>
        <span className={styles.metricLabel}>Total Clicks</span>
        <h3 className={styles.metricValue}>5.07K</h3>
        <p className={styles.metricUp}>
          <FaArrowUp /> from 1.44K
        </p>
      </div>

      <div className={styles.lavishMetricCard}>
        <span className={styles.metricLabel}>Total Impressions</span>
        <h3 className={styles.metricValue}>363K</h3>
        <p className={styles.metricUp}>
          <FaArrowUp /> from 97.5K
        </p>
      </div>

      <div className={styles.lavishMetricCard}>
        <span className={styles.metricLabel}>Average CTR</span>
        <h3 className={styles.metricValue}>1.4%</h3>
        <p className={styles.metricDown}>
          <FaArrowDown /> from 1.5%
        </p>
      </div>

      <div className={styles.lavishMetricCard}>
        <span className={styles.metricLabel}>Average Position</span>
        <h3 className={styles.metricValue}>18.3</h3>
        <p className={styles.metricUp}>
          <FaArrowUp /> improved from 29
        </p>
      </div>
    </div>

    {/* ANALYTICS IMAGE */}
    <div className={styles.lavishAnalyticsBox}>
      <img
        src="/media/casestudies/makemydocreport.png"
        alt="Make My Documents Google Search Console performance"
        className={styles.lavishAnalyticsImage}
      />
    </div>

    {/* CONTENT */}
    <div className={styles.lavishSeoContent}>
      <p>
        Over the last six months, Make My Documents recorded a significant
        increase in organic search visibility. Total clicks and impressions
        grew substantially as more users discovered document-related services
        through Google Search.
      </p>

      <p>
        The improvement in average position reflects stronger keyword relevance
        and content structure, helping the website rank higher for
        documentation-related searches and drive consistent, high-intent
        enquiries.
      </p>
    </div>

  </div>
</section>


            {/* MONTHLY PROGRESS */}
          <section className={styles.monthProgressSection}>
  <div className={styles.monthProgressContainer}>

    <div className={styles.monthProgressHeader}>
      <span className={styles.monthProgressMonth}>MONTH 6</span>
      <h2 className={styles.monthProgressTitle}>
        Improving Search Visibility & Building User Trust
      </h2>
      <span className={styles.monthProgressDate}>January, 2026</span>
    </div>

    <div className={styles.monthProgressDivider} />

    <div className={styles.monthProgressGrid}>

      {/* CARD 1 */}
      <div className={styles.monthProgressCard}>
        <div className={styles.monthProgressIconBox}>
          <FaFileAlt />
        </div>
        <h3 className={styles.monthProgressCardTitle}>
          Clear & Structured Service Content
        </h3>
        <p className={styles.monthProgressCardText}>
          Document-related services were rewritten with simple, structured
          explanations to improve understanding and reduce user confusion
          during the enquiry stage.
        </p>
      </div>

      {/* CARD 2 */}
      <div className={styles.monthProgressCard}>
        <div className={styles.monthProgressIconBox}>
          <FaPaperPlane />
        </div>
        <h3 className={styles.monthProgressCardTitle}>
          Increased Organic Reach
        </h3>
        <p className={styles.monthProgressCardText}>
          Optimised service pages began appearing for a wider range of
          document-related search queries, driving consistent organic
          traffic growth.
        </p>
      </div>

      {/* CARD 3 */}
      <div className={styles.monthProgressCard}>
        <div className={styles.monthProgressIconBox}>
          <FaMapMarkerAlt />
        </div>
        <h3 className={styles.monthProgressCardTitle}>
          Stronger Local Search Presence
        </h3>
        <p className={styles.monthProgressCardText}>
          Local optimisation efforts improved visibility for users searching
          for document services in nearby locations, increasing relevant
          enquiries.
        </p>
      </div>

      {/* CARD 4 */}
      <div className={styles.monthProgressCard}>
        <div className={styles.monthProgressIconBox}>
          <FaSlidersH />
        </div>
        <h3 className={styles.monthProgressCardTitle}>
          Higher Enquiry Confidence
        </h3>
        <p className={styles.monthProgressCardText}>
          Improved enquiry flows, trust indicators, and guidance helped users
          submit enquiries with greater confidence and clarity.
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
                    Make My Documents successfully established a trustworthy
                    digital presence that simplifies complex document services
                    and supports confident user decisions.
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
                    Need Help with Documents?
                  </h3>
                  <p className={styles.kaCtaText}>
                    Get expert assistance for PAN, Passport, Visa, PCC,
                    Insurance, and more—handled efficiently and reliably.
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
