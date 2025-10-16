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
      "Being a trusted Website Development Company in Malleshwaram, we are a bunch of highly talented professionals in WordPress website design and development. Our team makes responsive and SEO-friendly WordPress sites that are easy to use and can be a blog, a corporate website, or an e-commerce store. We code our works by the best coding practices, use the necessary plugins, and change the themes to meet your business requirements. Our WordPress expertise is a promise that your site will be secure, fast, and scalable, thus allowing you complete control of your content and updates. Do not hesitate to team up with our Website Development Company in Malleshwaram to make your dreams come true with ease.",
  },
  {
    id: "tab2",
    num: "02",
    title: "React JS Website Development",
    heading: "React JS Website Development",
    body:
      "Nakshatra Namaha Creations, a top-notch Website Development Company in Malleshwaram, is employing React JS to create dynamic, high-performance, and engaging web applications. The component-based architecture of React and the virtual DOM are the major reasons for the speed and responsiveness of the interfaces, which the users love. It does not matter if you need a single-page app or a complicated frontend, our Website Development Company in Malleshwaram will guarantee the project to be done on time, scalable, and reliable. We utilize React hooks and state management to deliver maintainable, up-to-date web experiences to your end-users.",
  },
  {
    id: "tab3",
    num: "03",
    title: "Node JS Website Development",
    heading: "Node JS Website Development",
    body:
      "We, as a leading and reputable Website Development Company in Malleshwaram, use Node JS in the creation of a robust backend system and API for web applications. The event-driven architecture of Node is what makes the real-time, scalable applications that are capable of high user traffic without performance drops possible. Our developers create server logic that is secure, integrate databases, and produce friendly user interfaces. Go for the services of our Website Development Company in Malleshwaram and get a solid, future-ready web infrastructure that is optimized for speed and performance.",
  },
  {
    id: "tab4",
    num: "04",
    title: "CMS Website Development",
    heading: "CMS Website Development",
    body:
      "Easy content management is the foundation of any business of the present times. Our Website Development Company in Malleshwaram is ready to develop CMS-based websites which will give you, as the owner, the power to run your site without needing a technician’s help. We use platforms like WordPress, Joomla, and others in our projects to create effortless dashboards, editing tools, and user management systems. The CMS solutions that we provide are not only safe, SEO-friendly, and quick but also give your business the power to stay updated and be at the forefront of the still online presence.",
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
    <p style={{fontSize:"18px"}}>At Nakshatra Namaha Creations, we are a comprehensive Website Development Company in Malleshwaram, which is specialized in delivering tailor-made solutions for any kind of business. The experts at our company engineer the websites to be technically flawless and customer engaging, no matter it is a CMS-based site or a React and Node-powered application. </p>
   

    <p style={{fontSize:"18px"}}> Being a top-notch Website Development Company in Malleshwaram, we combine the technical aspects with the creative designs to produce the websites that are not only fast and secure but also visually impressive. We, at your service, are dedicated to making you different and better in the highly competitive digital market of Bangalore by providing you with the scalable and SEO-optimized solutions that fit your requirements.</p>
   
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
