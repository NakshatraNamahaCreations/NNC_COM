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
    title: "Premium Brand Positioning",
    text: "A clean, luxury-focused digital presence aligned with the premium marble and natural stone industry.",
  },
  {
    icon: <FaBolt />,
    title: "SEO-Driven Architecture",
    text: "Built with structured content and optimised page architecture to support long-term organic growth.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Lead-Focused UX",
    text: "User journeys designed to convert website visitors into serious marble product enquiries.",
  },
  {
    icon: <FaCloud />,
    title: "Scalable Digital Foundation",
    text: "A future-ready platform built to support product expansion, new collections, and ongoing content growth.",
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
                src="/media/casestudies/shreemarmoo1.png"
                alt="Vijaya Home Services Case Study"
              />
            </div>

              {/* STRATEGY */}
            <h2>Technology Stack :</h2> React, Next.js, SEO-Optimised Architecture

<p>
Shreem Marmo is a premium marble and natural stone manufacturer catering to
architects, builders, interior designers, and homeowners seeking high-quality
Indian and imported stone solutions.
</p>


            {/* BUSINESS CHALLENGE */}
            <div className={styles.contentBlock}>
            <h2>Business Challenge</h2>
<p>
As competition increased in the marble and natural stone industry, Shreem Marmo
faced challenges in digital visibility and lead acquisition. Their offline
strength was not translating into online enquiries.
</p>

<ul>
  <li>Low visibility for high-intent marble keywords</li>
  <li>Lack of structured product & category pages</li>
  <li>Limited enquiries from organic search</li>
</ul>

            </div>

            {/* STRATEGY */}
            <div className={styles.contentBlock}>
              <h2>Converting Website Visitors into Qualified Enquiries</h2>
<p>
Shreem Marmo required more than just a visually appealing website. The goal was
to attract serious buyers and convert them into showroom visits and enquiry
leads.
</p>

            </div>

                <div className={styles.contentBlock}>
             <h2>Project Objectives</h2>
<h2>The primary goals of this project were to:</h2>

<ul>
  <li>Build a premium brand-focused website</li>
  <li>Create SEO-ready marble & stone category pages</li>
  <li>Increase organic visibility for competitive keywords</li>
  <li>Generate qualified enquiries from search traffic</li>
  <li>Support long-term digital growth</li>
</ul>


            </div>

            {/* RESULTS */}
            <div className={styles.contentBlock}>
             <h2>Results</h2>
<ul className={styles.resultsList}>
  <li>
    <FaTrophy className={styles.resultIcon} />
    Strong brand positioning in premium marble segment
  </li>
  <li>
    <FaChartLine className={styles.resultIcon} />
    Consistent growth in organic enquiries
  </li>
  <li>
    <FaMapMarkerAlt className={styles.resultIcon} />
    Improved visibility for marble-related keywords
  </li>
</ul>

            </div>

                 <div className={styles.contentBlock}>
             <h2>Our Strategy</h2>
<p>
As a website development and SEO-focused company, Nakshatra Namaha Creations
approached Shreem Marmo’s project with a brand-first and search-first mindset.
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
                  Google Search Console comparison: Last 6 months
                </p>
                 <div className={styles.banner}>
              <img
                src="/media/casestudies/shreemarmoo.png"
                alt="Vijaya Home Services Case Study"
              />
            </div>

                {/* METRICS */}
                <div className={styles.lavishMetricsGrid}>
                  <div className={styles.lavishMetricCard}>
                    <span className={styles.metricLabel}>Total Clicks</span>
                    <h3 className={styles.metricValue}>305</h3>
                    <p className={styles.metricUp}>
                      <FaArrowUp /> consistent growth
                    </p>
                  </div>

                  <div className={styles.lavishMetricCard}>
                    <span className={styles.metricLabel}>Total Impressions</span>
                    <h3 className={styles.metricValue}>26.7K+</h3>
                    <p className={styles.metricUp}>
                      <FaArrowUp /> strong visibility
                    </p>
                  </div>

                  <div className={styles.lavishMetricCard}>
                    <span className={styles.metricLabel}>Average CTR</span>
                    <h3 className={styles.metricValue}>1.1%</h3>
                    <p className={styles.metricUp}>
                      <FaArrowUp /> improved relevance
                    </p>
                  </div>

                  <div className={styles.lavishMetricCard}>
                    <span className={styles.metricLabel}>Average Position</span>
                    <h3 className={styles.metricValue}>17.5</h3>
                    <p className={styles.metricUp}>
                      <FaArrowUp /> across key services
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className={styles.lavishSeoContent}>
                  <p>
SEO-structured marble category pages enabled Shreem Marmo to gain visibility
across competitive natural stone and marble-related search terms.
</p>
                 <p>
Consistent optimisation helped move keywords from page two toward page one,
improving enquiry potential.
</p>
                </div>

              </div>
            </section>

            {/* MONTHLY PROGRESS */}
       {/* MONTHLY PROGRESS */}
<section className={styles.monthProgressSection}>
  <div className={styles.monthProgressContainer}>

    <div className={styles.monthProgressHeader}>
      <span className={styles.monthProgressMonth}>PHASE 3</span>
      <h2 className={styles.monthProgressTitle}>
        Strengthening SEO, Content & Service Page Visibility
      </h2>
      <span className={styles.monthProgressDate}>2025</span>
    </div>

    <div className={styles.monthProgressDivider} />

    <div className={styles.monthProgressGrid}>

      {/* BLOG CONTENT */}
      <div className={styles.monthProgressCard}>
        <div className={styles.monthProgressIconBox}>
          <FaFileAlt />
        </div>
        <h3 className={styles.monthProgressCardTitle}>
          SEO-Focused Blog Content
        </h3>
        <p className={styles.monthProgressCardText}>
          Informative marble and natural stone blogs were created to target
          research-based and buyer-intent keywords.
        </p>
      </div>

      {/* SERVICE / CATEGORY PAGES */}
      <div className={styles.monthProgressCard}>
        <div className={styles.monthProgressIconBox}>
          <FaPaperPlane />
        </div>
        <h3 className={styles.monthProgressCardTitle}>
          Service & Category Page Optimisation
        </h3>
        <p className={styles.monthProgressCardText}>
          Marble and stone category pages were structured with SEO-friendly
          content, clear product intent, and enquiry-driven layouts.
        </p>
      </div>

      {/* LOCAL SEO */}
      <div className={styles.monthProgressCard}>
        <div className={styles.monthProgressIconBox}>
          <FaMapMarkerAlt />
        </div>
        <h3 className={styles.monthProgressCardTitle}>
          Local SEO Visibility
        </h3>
        <p className={styles.monthProgressCardText}>
          Local SEO strategies improved visibility for marble-related searches
          across Bangalore, Hosur, and nearby regions.
        </p>
      </div>

      {/* CONVERSION OPTIMISATION */}
      <div className={styles.monthProgressCard}>
        <div className={styles.monthProgressIconBox}>
          <FaSlidersH />
        </div>
        <h3 className={styles.monthProgressCardTitle}>
          Enquiry Conversion Optimisation
        </h3>
        <p className={styles.monthProgressCardText}>
          CTAs, enquiry forms, and internal linking were optimised to convert
          organic visitors into qualified marble enquiries.
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
  <li>• Built a premium marble-focused website structure</li>
  <li>• Designed SEO-structured category and product pages</li>
  <li>• Strengthened internal linking for better crawlability</li>
  <li>• Focused on enquiry-driven UX design</li>
  <li>• Every decision aligned with brand credibility and long-term growth</li>
</ul>


            </div>
             <div className={styles.contentBlock}>
              <h2>Website Development</h2>
             <ul className={styles.resultsList}>
  <li>• Developed a fast, modern marble brand website</li>
  <li>• Optimised for speed and mobile responsiveness</li>
  <li>• Designed premium visual hierarchy</li>
  <li>• Integrated enquiry-focused CTAs</li>
</ul>
            </div>
             <div className={styles.contentBlock}>
             <h2>SEO & Lead Enablement</h2>
<ul className={styles.resultsList}>
  <li>• Implemented SEO-structured marble content</li>
  <li>• Optimised site architecture for search engines</li>
  <li>• Improved enquiry quality through intent-based pages</li>
</ul>

            </div>
          

        
            <div className={styles.contentBlock}>
             <h2>The new digital platform delivered measurable results :</h2>
<ul className={styles.resultsList}>
  <li>• Increased organic visibility</li>
  <li>• Higher-quality enquiry flow</li>
  <li>• Improved brand trust & authority</li>
  <li>• Strong foundation for future growth</li>
</ul>

            </div>

                 <div className={styles.contentBlock}>
            <h2>Conclusion</h2>
<p>
Shreem Marmo’s digital transformation focused on building a premium brand image
while strengthening organic visibility and enquiry generation.
</p>
<p>
This case study demonstrates how a strategic combination of design, SEO, and
conversion planning can create long-term business value.
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
