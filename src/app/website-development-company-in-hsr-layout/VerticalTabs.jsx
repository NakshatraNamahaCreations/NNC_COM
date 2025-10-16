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
      "WordPress is the go-to platform for over a million websites, and it is fair to ask why. As a Website Development Company in HSR Layout, we develop mobile-friendly, and user-friendly WordPress websites for blogs, business websites, and online stores. You can look forward to safe builds, and trendy design, and the site will work at high speed. Thanks to user-friendly content management and smooth navigation, you can update pages and products in no time. Use the services of a Website Development Company in HSR Layout that is brand and conversion-focused.",
  },
  {
    id: "tab2",
    num: "02",
    title: "React JS Website Development",
    heading: "React JS Website Development",
    body:
      "With React JS we create a product which is not only fast, but also interactive and scalable. Our Website Development Company in HSR Layout employs a component-based strategy for SPAs and complex UIs that are able to open quickly and make the user feel that they run smoothly. No matter if you want to start a single-page app or a sophisticated web app, we guarantee in-the-moment performance, future-readiness, and easy integration — which are the qualities of a modern Website Development Company in HSR Layout.",
  },
  {
    id: "tab3",
    num: "03",
    title: "Node JS Website Development",
    heading: "Node JS Website Development",
    body:
      "Node JS is what we use as a back-end technology when your project is about speed and scale. As a Website Development Company in HSR Layout, we develop APIs that are not only efficient but also real-time feature are reliable, server logic is robust and together with secure database integrations, we take good care of your project. The upshot is a site that does not sweat heavy traffic and thus, offers a frictionless user experience, which is exactly what you are entitled to as a client of a competent Website Development Company in HSR Layout.",
  },
  {
    id: "tab4",
    num: "04",
    title: "CMS Website Development",
    heading: "CMS Website Development",
    body:
      "Publishing should be a task that can be done by anyone and not necessarily a developer. The CMS solutions that our Website Development Company in HSR Layout install give your staff the liberty to add pages, blogs, pictures, and products easily. As we adjust roles, workflows, and SEO-friendly structures, we also prepare your staff for it. With a CMS from a Website Development Company in HSR Layout that cherishes control and ease, you can be sure of staying fresh, relevant, and efficient.",
  },
];

export default function VerticalTabs() {
  const [active, setActive] = useState("tab1");
  const current = TABS.find((t) => t.id === active) || TABS[0]; // ← safe fallback

  return (<>
    <section className={styles.wrap}>
      <div className={styles.sectionTitle}>
       
        <h2 style={{fontSize:"40px"}}><strong>Our Services as a Website Development Company in Malleshwaram</strong></h2>
           </div>
    <p style={{fontSize:"18px"}}>We strive to provide high-value online solutions that suit the specific requirements of local brands. Being a performance-driven Website Development Company in HSR Layout, we do not only design but also develop functional and interactive websites that create a lasting impact. Take a tour through our essential services provided by your local Website Development Company in HSR Layout.</p>
   

   
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
