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
      "Our work involves development of tailored WordPress sites that are not only easy to manage but also scalable. So, whether it is a corporate site, blog, or store, we deliver responsive design, fast loading, and SEO-friendly structures - just the right thing you’d expect from a website development company in JP Nagar. We offer plugin integration, security hardening, and post-launch support, thus your team will be able to update content without any technical assistance.",
  },
  {
    id: "tab2",
    num: "02",
    title: "React JS Website Development",
    heading: "React JS Website Development",
    body:
      "We leverage React to build SPAs and user interfaces that are extremely fast, attractive, and of high-performance. Our component-based methodology allows for code that is easy to maintain and a user interface that is seamless. This is the extent of front-end work you would expect from a contemporary website development company in JP Nagar and is perfect for dashboards, portals, and real-time experiences.",
  },
  {
    id: "tab3",
    num: "03",
    title: "Node JS Website Development",
    heading: "Node JS Website Development",
    body:
      "Using Node.js, we build the backends that are strong and reliable, thus are good for APIs, real-time features, and sites with a large number of visitors. Non-blocking I/O, secure coding, and efficient database interactions together guarantee the scalability of the system. Collaborate with a website development company in JP Nagar that is capable of providing full-stack solutions.",
  },
  {
    id: "tab4",
    num: "04",
    title: "CMS Website Development",
    heading: "CMS Website Development",
    body:
      "Non-technical teams become capable of content creation with the provision of user-friendly controls. We set up CMS solutions (either custom or platforms like Joomla/Drupal) that come with access based on user roles, media management, and scheduling. A website development company in JP Nagar should give you the freedom that you desire without compromising on the performance, and that is exactly what we do.",
  },
];

export default function VerticalTabs() {
  const [active, setActive] = useState("tab1");
  const current = TABS.find((t) => t.id === active) || TABS[0]; // ← safe fallback

  return (<>
    <section className={styles.wrap}>
      <div className={styles.sectionTitle}>
       
        <h2 style={{fontSize:"40px"}}><strong>Our Service as a Web Design Company in JP Nagar</strong></h2>
           </div>
    <p style={{fontSize:"18px"}}> At our Web Design Company in JP Nagar, Bangalore, we create websites that are scalable, secure, and high-performing, and at the same time, they are in harmony with your objectives. In every construction, there is a reflection of the norms you anticipate from a reliable website development company in JP Nagar - clean code, responsive layouts, and SEO-ready architecture, thus enabling you to effectively engage customers from the very first day. </p>
   
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
