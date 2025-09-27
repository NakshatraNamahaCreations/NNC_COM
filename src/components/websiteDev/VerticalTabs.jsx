"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/VerticalTabs.module.css";


const TABS = [
  {
    id: "tab1",
    num: "01",
    title: "Web Design and Re-design",
    heading: "Web Design and Re-design",
    body:
      "Our team of experienced UI/UX designers possesses versatile skills and have worked with multiple industries. Our Web designers have conducted thorough market research on human behavior and interactions with websites, which has helped them design a clear understanding of how a website should be designed for easy navigation and a clean user interface. By incorporating their expertise, we ensure that your website is created on time with minimal revisions, resulting in an error-free website.",
  },
  {
    id: "tab2",
    num: "02",
    title: "Full stack Web Development",
    heading: "Full stack Web Development",
    body:
      "We are a professional web development company located in HSR Layout. We offer a wide range of website development services for both product and service-based businesses, whether you need a static or dynamic website. We specialize in creating fast and secure websites and our team covers all use cases and technology stacks from MERN to LAMP.",
  },
  {
    id: "tab3",
    num: "03",
    title: "Custom Web Development",
    heading: "Custom Web Development",
    body:
      "Custom web development gives you a site or app built around your exact goals—not a one-size-fits-all template. We start with discovery and UX planning to map user journeys, then design a clean, conversion-focused interface. Under the hood, we use modern stacks and scalable architecture to ensure speed, reliability, and future growth. Complex needs—dashboards, APIs, payments, multi-language, or custom workflows—are handled with robust integrations. Everything ships SEO-ready, accessible, and thoroughly tested with CI/CD for safe, fast releases. You get a tailored product that looks great, performs brilliantly, and moves key metrics for your business.",
  },
  {
    id: "tab4",
    num: "04",
    title: "Web support and maintenance",
    heading: "Web support and maintenance",
    body:
      "Web support and maintenance keeps your site secure, fast, and reliable while you focus on the business. We handle updates, patches, and uptime monitoring, plus proactive security scans to stop threats before they spread. Performance is tuned regularly—caching, image optimization, and Core Web Vitals fixes—so pages load quickly and rank better. Daily off-site backups and a tested restore process protect you from surprises. Need changes? Send requests for content edits, new sections, or form fixes and we’ll turn them around under clear SLAs. You’ll also get a simple monthly health report showing what we fixed, what we found, and what’s next.",
  },
];

export default function VerticalTabs() {
  const [active, setActive] = useState("tab1");
  const current = TABS.find((t) => t.id === active) || TABS[0]; // ← safe fallback

  return (
    <section className={styles.wrap}>
      <div className={styles.sectionTitle}>
        {/* <span className={styles.rule} /> */}
        <h3>OUR WEBSITE DEVELOPMENT SERVICES IN HSR LAYOUT, BANGALORE</h3>
      </div>

      <div className={styles.grid}>
        <div className={styles.tabs}>
          {TABS.map((t) => {
            const isActive = t.id === active;
            return (
              <button
                key={t.id}
                className={`${styles.tabBtn} ${isActive ? styles.active : ""}`}
                onClick={() => setActive(t.id)}
                type="button"
              >
                <code className={styles.num}>{t.num}</code>
                <span className={styles.label}>{t.title}</span>
                <span className={styles.indicator} />
              </button>
            );
          })}
        </div>

        <div className={styles.content}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35, ease: [0.2, 0.7, 0.3, 1] }}
              className={styles.panel}
            >
              <h4 className={styles.heading}>{current.heading}</h4>
              <p className={styles.body}>{current.body}</p>
              <div className={styles.hr} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
