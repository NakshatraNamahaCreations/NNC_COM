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
    title: "Brand-Centric UX Design",
    text: "Clean, skincare-focused UX crafted to highlight product benefits, brand aesthetics, and consumer trust.",
  },
  {
    icon: <FaBolt />,
    title: "SEO-Ready Product Architecture",
    text: "Well-structured product and category pages optimised for skincare and personal care search visibility.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Clear Product Communication",
    text: "Simple, benefit-driven product content designed to educate customers and reduce purchase hesitation.",
  },
  {
    icon: <FaCloud />,
    title: "Scalable E-commerce Platform",
    text: "Performance-optimised setup supporting future product launches, traffic growth, and smooth user journeys.",
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
                src="/media/casestudies/scinado2.png"
                alt="Scinado Skincare Website Case Study"
              />
            </div>

            {/* OVERVIEW */}
            <div className={styles.contentBlock}>
              <h2>Overview</h2>
              <p>
                Scinado is a personal care and skincare brand focused on creating
                everyday products that promote healthy, nourished skin. The
                brand required a modern digital presence that reflected product
                quality, built consumer trust, and supported long-term growth.
              </p>
            </div>

            {/* BUSINESS CHALLENGE */}
            <div className={styles.contentBlock}>
              <h2>Business Challenge</h2>
              <p>
                As a growing skincare brand, Scinado needed a website that could
                clearly communicate product benefits, stand out in a competitive
                market, and build confidence among first-time buyers. The
                challenge was to balance visual appeal with performance,
                discoverability, and clarity.
              </p>
            </div>

            {/* STRATEGY */}
            <div className={styles.contentBlock}>
              <h2>Our Strategy</h2>
              <ul>
                <li>Brand-aligned visual and UI design</li>
                <li>SEO-structured product and category pages</li>
                <li>Clear benefit-driven content for skincare products</li>
                <li>Conversion-focused navigation and enquiry pathways</li>
              </ul>
            </div>

            {/* RESULTS */}
            <div className={styles.contentBlock}>
              <h2>Results</h2>
              <ul className={styles.resultsList}>
                <li>
                  <FaTrophy className={styles.resultIcon} />
                  Strong, premium brand presentation for skincare products
                </li>
                <li>
                  <FaChartLine className={styles.resultIcon} />
                  Increased engagement across product pages
                </li>
                <li>
                  <FaMapMarkerAlt className={styles.resultIcon} />
                  Improved visibility for skincare-related search terms
                </li>
              </ul>
            </div>

            <TechStackTabsPremium />

            {/* SEO PERFORMANCE */}
          <section className={styles.lavishSeoSection}>
  <div className={styles.lavishSeoContainer}>

    <h2 className={styles.lavishSeoTitle}>
      Search Visibility & SEO Foundation
    </h2>
    <p className={styles.lavishSeoSubtitle}>
      Structured SEO implementation focused on long-term discoverability
    </p>

    <div className={styles.lavishMetricsGrid}>
      <div className={styles.lavishMetricCard}>
        <span className={styles.metricLabel}>Keyword Targeting</span>
        <h3 className={styles.metricValue}>Skincare Search Terms</h3>
        <p className={styles.metricUp}>
          Aligned with consumer search intent
        </p>
      </div>

      <div className={styles.lavishMetricCard}>
        <span className={styles.metricLabel}>Content Structure</span>
        <h3 className={styles.metricValue}>Product-Led Pages</h3>
        <p className={styles.metricUp}>
          Clear hierarchy and crawl-friendly layout
        </p>
      </div>

      <div className={styles.lavishMetricCard}>
        <span className={styles.metricLabel}>User Experience</span>
        <h3 className={styles.metricValue}>Intent-Focused UX</h3>
        <p className={styles.metricUp}>
          Designed for clarity and ease of navigation
        </p>
      </div>

      <div className={styles.lavishMetricCard}>
        <span className={styles.metricLabel}>Technical SEO</span>
        <h3 className={styles.metricValue}>Optimised Foundation</h3>
        <p className={styles.metricUp}>
          Clean code, fast loading, and scalable setup
        </p>
      </div>
    </div>

    <div className={styles.lavishSeoContent}>
      <p>
        Scinado’s website was structured with a strong SEO foundation,
        ensuring product pages, categories, and brand content are easily
        discoverable by search engines.
      </p>

      <p>
        The focus on technical optimisation, content clarity, and user
        experience supports sustainable visibility and long-term brand
        growth in the skincare and personal care space.
      </p>
    </div>

  </div>
</section>


            {/* MONTHLY PROGRESS */}
            <section className={styles.monthProgressSection}>
              <div className={styles.monthProgressContainer}>

                <div className={styles.monthProgressHeader}>
                  {/* <span className={styles.monthProgressMonth}>MONTH 3</span> */}
                  <h2 className={styles.monthProgressTitle}>
                    Strengthening Brand Presence & Product Discovery
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
                      Product Content Optimisation
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      Product descriptions were refined to highlight benefits,
                      usage clarity, and consumer-friendly language.
                    </p>
                  </div>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaPaperPlane />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Organic Reach Expansion
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      SEO efforts expanded reach across skincare-related queries,
                      improving product discoverability.
                    </p>
                  </div>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaMapMarkerAlt />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Brand Trust Signals
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      Design consistency and content clarity helped reinforce
                      trust and brand credibility.
                    </p>
                  </div>

                  <div className={styles.monthProgressCard}>
                    <div className={styles.monthProgressIconBox}>
                      <FaSlidersH />
                    </div>
                    <h3 className={styles.monthProgressCardTitle}>
                      Conversion Path Optimisation
                    </h3>
                    <p className={styles.monthProgressCardText}>
                      Navigation and enquiry paths were simplified to support
                      smoother user journeys and conversions.
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
                    This project helped Scinado establish a strong digital
                    foundation, improve product discoverability, and create a
                    trustworthy brand presence in the skincare market.
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
                    Build High-Impact Skincare Websites
                  </h3>
                  <p className={styles.kaCtaText}>
                    Create conversion-focused websites for skincare and personal
                    care brands that drive visibility, trust, and growth.
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
