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
            <h2>Client Overview</h2>
            <p>
             Lavish Events is a professional event management company catering to weddings, corporate events, and private celebrations in Bangalore. While the brand had a strong offline reputation and creative portfolio, their digital presence was not contributing meaningfully to business growth.
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2>Business Challenge</h2>
            <p>
             Despite having a functional website, Lavish Events faced a major visibility gap in search engines. Their website was not ranking for high-intent, event-related keywords that potential clients actively search for.
            </p>
            <p>
             Key challenges included:
            </p>
            <ul>
              <li> Low search engine visibility for event services in Bangalore</li>
              <li> No structured service pages targeting specific event categories</li>
               <li> Poor keyword mapping and content optimisation</li>
              <li> Inconsistent organic enquiries despite strong brand credibility</li>
            </ul>
            <p>
              The client needed more than just a design refresh. They required an SEO-driven website strategy that could generate long-term organic leads without depending heavily on paid advertising.
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2>Project Objectives</h2>
            <p>
              The primary goals of this project were to : 
            </p>
              <ul>
              <li> Build an SEO-ready website structure aligned with search intent</li>
              <li> Improve rankings for event-related keywords in Bangalore</li>
               <li> Increase organic enquiries through search engines</li>
              <li> Strengthen local visibility for competitive event searches</li>
               <li> Create a scalable foundation for ongoing SEO growth</li>
            </ul>
          </div>

           <div className={styles.contentBlock}>
            <h2>Our Strategy</h2>
            <p>
              As a website development company specialising in SEO-focused builds, Nakshatra Namaha Creations approached this project with a clear understanding that structure and content drive rankings, not just design.
            </p>
            <p>
              <strong>Strategic Focus Areas</strong>
            </p>
                <ul>
              <li> Rebuilt the website with keyword-mapped service pages</li>
              <li> Structured content around local SEO intent (Bangalore searches)</li>
              <li> Designed clear enquiry funnels to convert organic visitors</li>
              <li> Optimised on-page SEO elements without keyword stuffing</li>
              <li> Created a scalable architecture to support continuous SEO efforts</li>
            </ul>
            <p>
              Every decision was made to align search visibility with user intent and enquiry conversion.
            </p>
          </div>

             <div className={styles.contentBlock}>
            <h2>Execution & Implementation</h2>
           
            <p>
              <strong>Website Development</strong>
            </p>
               <ul>
              <li> Developed a clean, professional website aligned with the events industry</li>
              <li> Created dedicated service pages for better keyword targeting</li>
               <li> Improved internal linking for SEO crawlability</li>
              <li> Ensured mobile responsiveness and fast page load performance</li>
            </ul>

              <p>
              <strong>SEO Implementation</strong>
            </p>
               <ul>
              <li> Optimised service pages for high-intent event keywords</li>
              <li> Structured headings and content for better search relevance</li>
               <li> Implemented local SEO best practices for Bangalore-based searches</li>
              <li> Continuously refined content to improve ranking stability</li>
            </ul>
         
          </div>

          <div className={styles.contentBlock}>
            <h2>Results & Business Impact</h2>
            <p>
              The SEO-focused website development delivered strong, measurable outcomes:
            </p>
         <ul className={styles.resultsList}>
  <li>
    <FaTrophy className={styles.resultIcon} />
    Top-1 Google rankings for 5–6 competitive event-related keywords
  </li>
  <li>
    <FaChartLine className={styles.resultIcon} />
   Significant increase in organic enquiries
  </li>
  <li>
    <FaMapMarkerAlt className={styles.resultIcon} />
    Improved local visibility in Bangalore search results
  </li>
</ul>
<p>
  The website transitioned from a static brand presence into a reliable business acquisition channel.
</p>
          </div>
          {/* <TechStackTabsPremium/> */}

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


     <div className={styles.contentBlock}>
            <h2>Why This Case Study Matters</h2>
            <p>
           This project demonstrates how SEO-first website development can create long-term growth for service-based businesses.
           </p>
             <ul>
              <li> Rankings are built into the foundation, not added later </li>
              <li> Content is designed for both users and search engines</li>
               <li> Websites become lead-generating assets, not brochures</li>
              <li> SEO delivers compounding results over time</li>
            </ul>
          </div>
 <div className={styles.contentBlock}>
            <h2>Conclusion</h2>
            <p>
          By partnering with Nakshatra Namaha Creations, Lavish Events transformed their website into a search-optimised platform capable of driving consistent organic enquiries and strong local visibility.
           </p>
           <p>
          This case study highlights how the right SEO strategy, combined with purposeful website development, can help event businesses dominate search results and attract high-intent customers.
          If your business needs an SEO-ready website built for long-term growth, this project clearly shows what a structured, search-driven approach can achieve.
           </p>
         
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
