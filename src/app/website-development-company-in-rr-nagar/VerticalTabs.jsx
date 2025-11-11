"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/VerticalTabs.module.css";


const TABS = [
  {
    id: "tab1",
    num: "01",
    title: "Responsive​‍​‌‍​‍‌​‍​‌‍​‍‌ Website Development",
    heading: "Responsive​‍​‌‍​‍‌​‍​‌‍​‍‌ Website Development",
    body:
      "We build fully responsive websites that visually adjust are desktops, tablets, and mobiles without any hitch. Being a professional Website Development Company in RR Nagar, we make it a point that your customers are having consistent performance and easy navigation - no matter from which device they are accessing.",
  },
  {
    id: "tab2",
    num: "02",
      title: "Professional Website Development",
    heading: "Professional Website Development",
    body:
      "At Nakshatra Namaha Creations, we implement a brand-first approach in the web design process. Our team is devoted to designing captivating layouts, interactive components, and user-friendly interfaces which emotionally bond with the audience and become the business identity of the client.",
  },
  {
    id: "tab3",
    num: "03",
    title: "Industrial Website Development",
    heading: "Industrial Website Development",
    body:
      "Designed a website for your industrial or manufacturing business will be our focus with emphasis on the product presentation, technical documentation, and managing inquiries. Our Website Development Company in RR Nagar is at your disposal to make sure that your industrial website communicates not only efficiency but also reliability to your partners and customers.",
    },
  {
    id: "tab4",
    num: "04",
      title: "SEO-Friendly Website Development",
    heading: "SEO-Friendly Website Development",
    body:
      "None of the sites we create lack SEO features. By incorporating the correct code, metadata, and structure, Nakshatra Namaha Creations, your dependable Website Development Company in RR Nagar, ensures that your website is placed at a good ranking, attracts the suitable audience, and generates the right kind of ​‍​‌‍​‍‌​‍​‌‍​‍‌leads.",
  },
];

export default function VerticalTabs() {
  const [active, setActive] = useState("tab1");
  const current = TABS.find((t) => t.id === active) || TABS[0]; // ← safe fallback

  return (<>
    <section className={styles.wrap}>
      <div className={styles.sectionTitle}>
       
        <h2 style={{fontSize:"40px"}}><strong> Our Services as a Website Development Company in RR Nagar, Bangalore</strong></h2>
           </div>
    <p style={{fontSize:"18px"}}>We at Nakshatra Namaha Creations are a full-service Website Development Company in RR Nagar to offer end-to-end web design and development solutions. We build such platforms that run smoothly with colourful React JS web apps, scalable Node JS backends, and flexible CMS websites. </p>
   
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
