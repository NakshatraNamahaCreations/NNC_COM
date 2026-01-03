"use client";
import styles from "../../../../styles/CaseStudyLayout.module.css";
import CaseStudyHeader from "./CaseStudyHeader";
import EnquiryForm from "../../EnquiryForm";
import { FaTrophy, FaChartLine, FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import TechStackTabsPremium from "../../TechStackTabsPremium";
import Link from "next/link"
import {
  FaFileAlt,
  FaPaperPlane,
  FaSlidersH,
  FaCrosshairs,
  FaBolt,
  FaNetworkWired,
  FaCloud,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaCrosshairs />,
    title: "Pinpoint Accuracy",
    text: "High-precision geolocation for exact coordinates.",
  },
  {
    icon: <FaBolt />,
    title: "Real-time Event Detection",
    text: "Instant alerts for environmental and risk-related events.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Streamlined Vendor Services",
    text: "Vendor modules with KPIs, analytics, and monetization flows.",
  },
  {
    icon: <FaCloud />,
    title: "Serverless Scalability",
    text: "Fully serverless infrastructure delivering speed and cost efficiency.",
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
              src="/media/casestudies/lavish21.png"
              alt="Lavish Events Case Study"
            />
          </div>

          {/* Content Sections */}
          <div className={styles.contentBlock}>
            <h2>Overview</h2>
            <p>
              Lavish Events had a strong brand presence but limited search
              visibility. Their website failed to rank for high-intent
              event-related keywords, resulting in low organic enquiries.
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2>Business Challenge</h2>
            <p>
              The website lacked SEO-friendly architecture, local intent
              optimisation, and clear enquiry funnels—limiting discoverability
              in Bangalore-based searches.
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2>Our Strategy</h2>
            <ul>
              <li>SEO-first website architecture</li>
              <li>Keyword-mapped service pages</li>
              <li>Local SEO optimisation for Bangalore</li>
              <li>Conversion-focused enquiry funnels</li>
            </ul>
          </div>

          <div className={styles.contentBlock}>
            <h2>Results</h2>
         <ul className={styles.resultsList}>
  <li>
    <FaTrophy className={styles.resultIcon} />
    Top-1 Google rankings for 5–6 keywords
  </li>
  <li>
    <FaChartLine className={styles.resultIcon} />
    Significant increase in organic enquiries
  </li>
  <li>
    <FaMapMarkerAlt className={styles.resultIcon} />
    Strong local visibility in Bangalore
  </li>
</ul>
          </div>
          <TechStackTabsPremium/>

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
            <h3 className={styles.metricValue}>3.2K</h3>
            <p className={styles.metricUp}>
              <FaArrowUp /> from 1.17K
            </p>
          </div>

          <div className={styles.lavishMetricCard}>
            <span className={styles.metricLabel}>Total Impressions</span>
            <h3 className={styles.metricValue}>93.5K</h3>
            <p className={styles.metricUp}>
              <FaArrowUp /> from 10.5K
            </p>
          </div>

          <div className={styles.lavishMetricCard}>
            <span className={styles.metricLabel}>Average CTR</span>
            <h3 className={styles.metricValue}>3.4%</h3>
            <p className={styles.metricDown}>
              <FaArrowDown /> from 11.2%
            </p>
          </div>

          <div className={styles.lavishMetricCard}>
            <span className={styles.metricLabel}>Average Position</span>
            <h3 className={styles.metricValue}>8.8</h3>
            <p className={styles.metricUp}>
              <FaArrowUp /> improved from 17.6
            </p>
          </div>
        </div>

        {/* ANALYTICS IMAGE */}
        <div className={styles.lavishAnalyticsBox}>
          <img
            src="/media/casestudies/lavish3.png"
            alt="Lavish Events SEO performance comparison"
            className={styles.lavishAnalyticsImage}
          />
        </div>

        {/* CONTENT */}
        <div className={styles.lavishSeoContent}>
          <p>
            Over the last three months, Lavish Events experienced a strong surge
            in organic visibility and search-driven traffic. Clicks increased
            significantly as the website began ranking for high-intent,
            event-related keywords.
          </p>

          <p>
            The improvement in average position highlights the impact of
            SEO-focused website optimisation, structured content, and local SEO
            efforts, resulting in sustainable long-term growth.
          </p>
        </div>

      </div>
    </section>

    <section className={styles.monthProgressSection}>
      <div className={styles.monthProgressContainer}>

        {/* HEADER */}
        <div className={styles.monthProgressHeader}>
          <span className={styles.monthProgressMonth}>MONTH 3</span>

          <h2 className={styles.monthProgressTitle}>
            Expanding Digital Reach & Strengthening SEO Performance
          </h2>

          <span className={styles.monthProgressDate}>May, 2024</span>
        </div>

        <div className={styles.monthProgressDivider} />

        {/* GRID */}
        <div className={styles.monthProgressGrid}>

          {/* CARD 1 */}
          <div className={styles.monthProgressCard}>
            <div className={styles.monthProgressIconBox}>
              <FaFileAlt />
            </div>

            <h3 className={styles.monthProgressCardTitle}>
              Content Refinement
            </h3>

            <p className={styles.monthProgressCardText}>
              Website content was refined using real search performance insights,
              ensuring better keyword alignment, improved clarity, and higher
              relevance for event-related search queries.
            </p>
          </div>

          {/* CARD 2 */}
          <div className={styles.monthProgressCard}>
            <div className={styles.monthProgressIconBox}>
              <FaPaperPlane />
            </div>

            <h3 className={styles.monthProgressCardTitle}>
              Audience Expansion
            </h3>

            <p className={styles.monthProgressCardText}>
              Reach was expanded by optimising service pages and improving
              discoverability across multiple search touchpoints, helping
              LavishEventz attract a wider audience organically.
            </p>
          </div>

          {/* CARD 3 */}
          <div className={styles.monthProgressCard}>
            <div className={styles.monthProgressIconBox}>
              <FaMapMarkerAlt />
            </div>

            <h3 className={styles.monthProgressCardTitle}>
              Local Search Visibility
            </h3>

            <p className={styles.monthProgressCardText}>
              Location-focused SEO enhancements strengthened visibility in
              Bangalore searches, improving local rankings and increasing
              enquiries from nearby event clients.
            </p>
          </div>

          {/* CARD 4 */}
          <div className={styles.monthProgressCard}>
            <div className={styles.monthProgressIconBox}>
              <FaSlidersH />
            </div>

            <h3 className={styles.monthProgressCardTitle}>
              Conversion Improvement
            </h3>

            <p className={styles.monthProgressCardText}>
              Landing page layouts and enquiry paths were optimised to reduce
              friction, resulting in better engagement and higher-quality
              organic leads.
            </p>
          </div>

        </div>
      </div>
    </section>


     <section className={styles.kaSection}>
      <div className={styles.kaContainer}>

        {/* CONTENT AREA */}
        <div className={styles.kaContentArea}>
          <h2 className={styles.kaHeading}>Key Achievements & Impact</h2>
          <div className={styles.kaDivider} />

          <p className={styles.kaIntro}>
            Our solution enabled a powerful shift in how insurers and customers
            interact with hazard risk data.
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

      {/* CTA BANNER */}
      <div className={styles.kaCtaSection}>
        <div className={styles.kaCtaInner}>
          <h3 className={styles.kaCtaTitle}>
            Build Smarter Apps with Us
          </h3>
          <p className={styles.kaCtaText}>
            Turn bold ideas into powerful web and mobile applications—faster,
            smarter, and built to scale.
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
