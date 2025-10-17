"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/VerticalTabs.module.css";


const TABS = [
  {
    id: "tab1",
    num: "01",
    title: "WordPress Website Development",
    heading: "WordPress Website Development",
    body:
      "We do great customizations of themes, plugins, and system performance to ensure optimum user experience for blogs and online shops. As a local Web Designing Company in Jayanagar, we bring to you the benefits of a seasoned company in the field via full optimization of Core Web Vitals, mobile UX, and on-page SEO.",
  },
  {
    id: "tab2",
    num: "02",
    title: "Front end Development with React.js",
    heading: "Front end Development with React.js",
    body:
      "If it is easy UX and growth of the frontend that you are after, you cannot be wrong in selecting our React.js as well as a front for a Website Designing Company in Jayanagar. In this way, your Website Designing Company in Jayanagar can showcase the limitless nature of their work by building component-based UIs, SPAs, complex dashboards with responsive layouts so your site looks great everywhere, all the things a leading Website Designing Company in Jayanagar is expected to do.",
  },
  {
    id: "tab3",
    num: "03",
    title: "Back end development with Node.js",
    heading: "Back end development with Node.js",
    body:
      "Good design is always followed by great execution at the back end. We, as a Website Designing Company in Jayanagar, utilize Node.js to accomplish the goal of shipping APIs that are fast and secure which lead to real-time, low latency experiences. Such a technologic infrastructure like this tech backbone gives room for a Jayanagar Agency like us to carry on with the mission of progressive change without the hassle of a re-platforming challenge.",
  },
  {
    id: "tab4",
    num: "04",
    title: "CMS Website Development",
    heading: "CMS Website Development",
    body:
      "Without using code, it is possible now to change content. By customizing the CMS dashboard, roles, and workflow, our Website Designing Company in Jayanagar turns your team into a publishing machine. Besides that, security, speed, and SEO are given the highest priority–this is the kind of service you would expect from a professional Website Designing Company in Jayanagar.",
  },
];

export default function VerticalTabs() {
  const [active, setActive] = useState("tab1");
  const current = TABS.find((t) => t.id === active) || TABS[0]; // ← safe fallback

  return (<>
    <section className={styles.wrap}>
      <div className={styles.sectionTitle}>
       
        <h2 style={{fontSize:"40px"}}><strong> Our Service as a Web Design Company in Jayanagar, Bangalore</strong></h2>
           </div>
    <p style={{fontSize:"18px"}}> With the expertise of a local website designing company, you will have a splendidly finished product that runs with power under the hood. Our approach with a Website Designing Company in Jayanagar (on long-term results) is to combine all the security, speed, and scalability features of a future-ready stack with design made for the user experience and the brand. </p>
   
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
    
                        
    </>
  );
}
