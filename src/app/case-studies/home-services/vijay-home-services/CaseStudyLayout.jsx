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
    title: "Conversion-Focused UX",
    text: "User journeys designed to drive service bookings and high-intent enquiries across web and mobile.",
  },
  {
    icon: <FaBolt />,
    title: "Scalable Architecture",
    text: "Built to handle high traffic volumes, growing service requests, and increasing user demand.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Integrated Booking System",
    text: "Seamless booking and enquiry workflows across website and mobile app.",
  },
  {
    icon: <FaCloud />,
    title: "Future-Ready Platform",
    text: "Technology stack designed for long-term scalability, performance, and feature expansion.",
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
                src="/media/casestudies/vijayahome2.png"
                alt="Vijaya Home Services Case Study"
              />
            </div>

            {/* OVERVIEW */}
            {/* <div className={styles.contentBlock}>
              <h2>Overview</h2>
              <p>
                Vijaya Home Services required a scalable digital platform to
                support rapid growth in customer demand. The objective was to
                build a robust website and mobile application capable of
                handling high traffic, service bookings, and lead management
                efficiently.
              </p>
            </div> */}

              {/* STRATEGY */}
            <div className={styles.contentBlock}>
              <h2>Technology Stack : </h2> React, Node.js, Scalable Backend Architecture

              <p>
               Vijaya Home Services is a fast-growing home services provider catering to urban customers who expect quick bookings, seamless communication, and reliable service delivery.
               </p>
            </div>

            {/* BUSINESS CHALLENGE */}
            <div className={styles.contentBlock}>
              <h2>Business Challenge</h2>
              <p>
                As customer demand increased, Vijaya Home Services began facing operational and digital limitations. Their existing online presence was not designed to scale and struggled with:

              </p>
               <ul>
                <li> Handling high traffic volumes during peak demand</li>
                 <li> Supporting app-based service bookings</li>
                  <li> Tracking leads effectively across channels</li>
              </ul>
            </div>

            {/* STRATEGY */}
            <div className={styles.contentBlock}>
              <h2>Converting website visitors into qualified enquiries</h2>
              <p>
                The client was not looking for just another website vendor they needed a long-term technology partner who could build a scalable digital ecosystem.
              </p>
            </div>

                <div className={styles.contentBlock}>
              <h2>Project Objectives</h2>
               <h2>The primary goals of this project were to:</h2>
             <ul>
                <li>Create a high-performance, scalable website </li>
                 <li>Develop a mobile application for seamless service bookings </li>
                 <li>Improve lead generation and enquiry tracking </li>
                 <li>Build SEO-ready service pages to drive organic traffic </li>
                 <li> Enable future expansion without rebuilding the platform</li>
              </ul>

            </div>

            {/* RESULTS */}
            <div className={styles.contentBlock}>
              <h2>Results</h2>
              <ul className={styles.resultsList}>
                <li>
                  <FaTrophy className={styles.resultIcon} />
                  1,00,000+ mobile app downloads
                </li>
                <li>
                  <FaChartLine className={styles.resultIcon} />
                  Improved lead flow across website and mobile app
                </li>
                <li>
                  <FaMapMarkerAlt className={styles.resultIcon} />
                  Strong organic visibility for service-related keywords
                </li>
              </ul>
            </div>

                 <div className={styles.contentBlock}>
              <h2>Our Strategy</h2>
              <p>
                As a website and app development company in Bangalore, Nakshatra Namaha Creations approached this project with a product-driven mindset rather than a short-term development approach.
                </p>
            </div>
            

            {/* <TechStackTabsPremium /> */}

            {/* SEO PERFORMANCE */}
            <section className={styles.lavishSeoSection}>
              <div className={styles.lavishSeoContainer}>

                <h2 className={styles.lavishSeoTitle}>
                  Organic Growth Performance – Last 3 Months
                </h2>
                <p className={styles.lavishSeoSubtitle}>
                  Google Search Console comparison: Last 3 months vs previous 3 months
                </p>

                {/* METRICS */}
                <div className={styles.lavishMetricsGrid}>
                  <div className={styles.lavishMetricCard}>
                    <span className={styles.metricLabel}>Total Clicks</span>
                    <h3 className={styles.metricValue}>5K+</h3>
                    <p className={styles.metricUp}>
                      <FaArrowUp /> consistent growth
                    </p>
                  </div>

                  <div className={styles.lavishMetricCard}>
                    <span className={styles.metricLabel}>Total Impressions</span>
                    <h3 className={styles.metricValue}>300K+</h3>
                    <p className={styles.metricUp}>
                      <FaArrowUp /> strong visibility
                    </p>
                  </div>

                  <div className={styles.lavishMetricCard}>
                    <span className={styles.metricLabel}>Average CTR</span>
                    <h3 className={styles.metricValue}>Optimised</h3>
                    <p className={styles.metricUp}>
                      <FaArrowUp /> improved relevance
                    </p>
                  </div>

                  <div className={styles.lavishMetricCard}>
                    <span className={styles.metricLabel}>Average Position</span>
                    <h3 className={styles.metricValue}>Top 10</h3>
                    <p className={styles.metricUp}>
                      <FaArrowUp /> across key services
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className={styles.lavishSeoContent}>
                  <p>
                    SEO-ready service pages helped Vijaya Home Services achieve
                    strong organic visibility for high-intent home service
                    keywords.
                  </p>

                  <p>
                    The combination of scalable technology and structured SEO
                    content ensured consistent traffic and lead generation.
                  </p>
                </div>

              </div>
            </section>

            {/* MONTHLY PROGRESS */}
            <section className={styles.monthProgressSection}>
              <div className={styles.monthProgressContainer}>

                <div className={styles.monthProgressHeader}>
                  <span className={styles.monthProgressMonth}>PHASE 3</span>
                  <h2 className={styles.monthProgressTitle}>
                    Scaling Digital Operations & User Acquisition
                  </h2>
                  <span className={styles.monthProgressDate}>2025</span>
                </div>

                <div className={styles.monthProgressDivider} />

                <div className={styles.monthProgressGrid}>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaFileAlt />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Service Page Optimisation
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      Service pages were structured for clarity, SEO, and
                      conversion-focused user journeys.
                    </p>
                  </div>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaPaperPlane />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Mobile App Adoption
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      The mobile app gained rapid adoption, supporting
                      app-based service bookings and repeat usage.
                    </p>
                  </div>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaMapMarkerAlt />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Local Search Visibility
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      Local SEO strengthened visibility across Bangalore for
                      multiple home service categories.
                    </p>
                  </div>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaSlidersH />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Lead Conversion Optimisation
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      Booking flows and enquiry paths were refined to maximise
                      lead quality and conversion rates.
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
                    This project demonstrates our expertise in building scalable
                    digital ecosystems that support rapid growth—not just
                    websites or mobile apps.
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

               <div className={styles.contentBlock}>
              <h2>Strategic Focus Areas</h2>
               <ul className={styles.resultsList}>
                <li>
                 • Designed a conversion-focused website structure with clear service pathways
                </li>
                <li>
                 • Planned a mobile-first architecture to support rapid user growth
                </li>
                <li>
               • Built SEO-structured service pages from day one
                </li>
                  <li>
                 • Ensured backend scalability to handle increasing bookings and enquiries
                </li>
                <li>
               • Every decision was aligned with performance, usability, and long-term business growth.
                </li>
                <li>
               • Execution & Implementation

                </li>
              </ul>

            </div>
             <div className={styles.contentBlock}>
              <h2>Website Development</h2>
              <ul className={styles.resultsList}>
                <li>
                • Developed a fast, responsive business website
                </li>
            <li>
                • Optimized for speed, usability, and cross-device compatibility
                </li>
                <li>
                • Implemented clear enquiry and booking workflows
                </li>
                <li>
                • Structured content for SEO visibility and lead conversion
                </li>
          
              </ul>
            </div>
             <div className={styles.contentBlock}>
              <h2>Mobile App Development</h2>
                <ul className={styles.resultsList}>
                <li>
                • Built a customer-friendly mobile application
                </li>
            <li>
              • Simplified service booking and request flow  
                </li>
                <li>
                • Ensured smooth performance even during high user activity
                </li>
                
          
              </ul>
            </div>
             <div className={styles.contentBlock}>
              <h2>SEO & Lead Enablement</h2>
               <ul className={styles.resultsList}>
                <li>
               •  Implemented SEO-structured content and service pages
                </li>
            <li>
                • Optimized site architecture for search engine crawling
                </li>
                <li>
               •  Integrated enquiry tracking to improve lead quality
                </li>
                <li>
                • Results & Business Impact

                </li>
          
              </ul>
            </div>

                <div className={styles.contentBlock}>
              <h2>The new digital platform delivered measurable results : </h2>
               <ul className={styles.resultsList}>
                <li>
                 • 1,00,000+ mobile app downloads
                </li>
            <li>
                 • Improved lead flow through website and mobile app
                </li>
                <li>
                 • Strong organic visibility for competitive service keywords
                </li>
                <li>
                 • Enhanced customer experience and engagement
                </li>
                <li>
                 • Scalable infrastructure ready for future growth
                </li>
          
              </ul>
            </div>
            <div className={styles.contentBlock}>
              <h2>Why This Case Study Matters</h2>
               <ul className={styles.resultsList}>
                <li>
                 • This project highlights Nakshatra Namaha Creations’ strength in building scalable digital ecosystems, not just websites or apps.
                </li>
               <li>
                 • We combine technology, SEO, and conversion strategy
                </li>
                <li>
                 • We design platforms that grow with the business
                </li>
                 <li>
                 • We focus on performance, stability, and long-term ROI
                </li>
          
              </ul>
            </div>

                 <div className={styles.contentBlock}>
              <h2>Conclusion</h2>
              <p>
                    By partnering with Nakshatra Namaha Creations, Vijaya Home Services successfully transformed its digital presence into a high-performance website and mobile app ecosystem capable of supporting rapid growth and increasing customer demand.
                    </p>
                    <p>
                    If your business requires a scalable website, mobile app, or full digital transformation, this case study demonstrates what the right strategy and execution can achieve.
                    </p>
            </div>

              {/* CTA */}
              <div className={styles.kaCtaSection}>
                <div className={styles.kaCtaInner}>
                  <h3 className={styles.kaCtaTitle}>
                    Build Scalable Digital Platforms
                  </h3>
                  <p className={styles.kaCtaText}>
                    Partner with us to build high-performance websites and
                    mobile applications designed for growth.
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
