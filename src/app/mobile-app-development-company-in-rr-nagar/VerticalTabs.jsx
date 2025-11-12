"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/VerticalTabs.module.css";


const TABS = [
  {
    id: "tab1",
    num: "01",
    title: "Android​‍​‌‍​‍‌​‍​‌‍​‍‌ App Development",
    heading: "Android​‍​‌‍​‍‌​‍​‌‍​‍‌ App Development",
    body:
      "Our developer team are skilled in building Android applications which are not only scalable, secure, and visually attractive but also customer-oriented by integrating the most recent technologies. Being a leading Mobile App Development Company in RR Nagar, we guarantee that your app is efficient and of top quality on every Android device and that it complies with the standards of the Google Play Store.",
  },
  {
    id: "tab2",
    num: "02",
       title: "iOS App Development",
    heading: "iOS App Development",
    body:
      "At Nakshatra Namaha Creations, elegant and high-performance iOS apps are what we focus on. As a Mobile App Development Company in RR Nagar, we are technically proficient and strictly adhere to Apple's best coding standards, thus, ensuring that your apps for iPhone and iPad are compatible and run smoothly.",
      },
  {
    id: "tab3",
    num: "03",
      title: "React Native App Development",
    heading: "React Native App Development",
    body:
      "We are skilled in using the React Native framework that allows us to efficiently develop solutions that are compatible with both Android and iOS devices. This strategy suits businesses that are keen to save time, cut down on costs, and keep quality at a consistent level. As a well-established Mobile App Development Company in RR Nagar, we assure you that the performance of your hybrid app will be on par with that of a native one.",
  },
  {
    id: "tab4",
    num: "04",
        title: "Flutter App Development",
    heading: "Flutter App Development",
    body:
      "One of our competences is creating attractive, fast, and flexible mobile applications by the use of Google’s Flutter. Being the premier Mobile App Development Company in RR Nagar, we assist enterprises to speed up their digital transformation through apps that deliver top-notch performance on any device.",
  },
    {
    id: "tab5",
    num: "05",
        title: "E-Commerce App Development",
    heading: "E-Commerce App Development",
    body:
      "Make the most of the mobile revolution by transforming your online store into a mobile-first experience with our powerful e-commerce app solutions. Be it cart integration or payment gateways, Nakshatra Namaha Creations, the best Mobile App Development Company in RR Nagar, facilitating user-friendly shopping journeys is our commitment to you.",
  },
];

export default function VerticalTabs() {
  const [active, setActive] = useState("tab1");
  const current = TABS.find((t) => t.id === active) || TABS[0]; // ← safe fallback

  return (<>
    <section className={styles.wrap}>
      <div className={styles.sectionTitle}>
       
        <h2 style={{fontSize:"40px"}}><strong>Our Services – Mobile App Development Company in RR Nagar</strong></h2>
           </div>
    <p style={{fontSize:"18px"}}>
  We at Nakshatra Namaha Creations are a full-service Mobile App Development Company in RR Nagar offering end-to-end app design and development solutions. We build powerful Android, iOS, and cross-platform applications with seamless performance, scalable backends, and engaging user interfaces.
</p>

   
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
