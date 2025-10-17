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
      "As a prominent Indiranagar-based Website Development Company in indiranagar, we create robust WordPress websites tailored to meet your objectives. Our team builds responsive, mobile-friendly, and SEO-optimized websites that do not require a technical background for management. We make sure that everything runs smoothly and that the performance is secure, be it a simple blog or a complex e-commerce platform. By choosing our Web Development Company in Indiranagar, you get a user-friendly backend, fast loading, and support that will last for a long time.",
  },
  {
    id: "tab2",
    num: "02",
    title: "React JS Website Development",
    heading: "React JS Website Development",
    body:
      "Nakshatra Namaha Creations is a well-known and a very efficient Indiranagar-based Website Development Company in Indiranagar, which mainly focuses on React JS. Our main focus is on React JS where we create component-based, scalable, and dynamic web applications that can easily interact with the users. The use of React’s virtual DOM is what really makes the transitions and speed of the app very smooth, thus enhancing the user experience to the maximum. Our Web Development Company here in Indiranagar makes use of React JS along with APIs and tools for modern-day requirements to provide the best digital experience to the users.",
  },
  {
    id: "tab3",
    num: "03",
    title: "Node JS Website Development",
    heading: "Node JS Website Development",
    body:
      "Our Website Development Company in Indiranagar uses Node JS to create the backend of the project that is not only robust but also of high-performance and can handle many requests at the same time. Using Node’s event-driven system, we develop web applications that are safe, real-time, and can be scaled. To make sure that there is no interruption of data, we bring together the best database solutions like MongoDB and MySQL. Working with our Web Development Company in Indiranagar will give you a lose-free server-side development that is designed for not only high speed but is also stable and geared towards long-term growth.",
  },
  {
    id: "tab4",
    num: "04",
    title: "CMS Website Development",
    heading: "CMS Website Development",
    body:
      "As an acclaimed Website Development Company in Indiranagar, our specialty is in building CMS platforms that allow the user to be in total control of the content in the easiest way possible. It does not matter whether you choose WordPress, Joomla, or Drupal as your CMS, we will configure it for you in such a way that it will be secure, scalable, as well as good in terms of SEO. With each website that goes out from our Web Development Company in Indiranagar, users get the ability to easily edit the content, the website being responsive, and having dashboards that are user-friendly, which means that users do not need to have coding skills to be in total control.",
  },
];

export default function VerticalTabs() {
  const [active, setActive] = useState("tab1");
  const current = TABS.find((t) => t.id === active) || TABS[0]; // ← safe fallback

  return (<>
    <section className={styles.wrap}>
      <div className={styles.sectionTitle}>
       
        <h2 style={{fontSize:"40px"}}><strong> Our Services as a Website Development Company in Indiranagar</strong></h2>
           </div>
    <p style={{fontSize:"18px"}}>By Nakshatra Namaha Creations, we are a multi-skilled Web Development Company of Indiranagar and offer bespoke solutions suitable for any type of business. Our developers are a perfect blend of innovative design and technical skills, and they develop websites that are not only fast and reliable but also visually appealing. </p>
   

    <p style={{fontSize:"18px"}}> In addition to CMS-based platforms, we also work on full-stack applications which are of high quality and can be easily scaled. If you choose to work with our Web Development Company in Indiranagar, it will be like having a competitive edge in the market of Bangalore through the digital solutions you get.</p>
   
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
