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
      "Through the discriminating eye of design and with the skillful hand of custom creation, Nakshatra Namaha Creations – a prime Website Development Company in Rajajinagar, – fashions WordPress websites that are perfect for your business. We do everything from corporate sites to online stores handling theme customization, plugin integration, and security updates. The WordPress websites we put together are not only responsive and SEO-friendly but also simple to operate. The moment you bring on board our Website Development Company in Rajajinagar, you walk out with a state-of-the-art website that is the perfect blend of efficiency and ease of use.",
  },
  {
    id: "tab2",
    num: "02",
    title: "React JS Website Development",
    heading: "React JS Website Development",
    body:
      "As a top Website Development Company in Rajajinagar, we use React JS to develop web applications that are fast and with UI components that could be reused. The contemporary structure of React allows us to create single-page applications and control panels that work efficiently and can be extended without any difficulty. Our developers focus on the loading time, user experience, and responsive designs, thus, making sure that your website is attractive visually on all screen sizes. By choosing our Website Development Company in Rajajinagar you ensure that your company website will always be in line with the latest trends and will be easy to maintain.",
  },
  {
    id: "tab3",
    num: "03",
    title: "Node JS Website Development",
    heading: "Node JS Website Development",
    body:
      "Nakshatra Namaha Creations — a professional Website Development Company in Rajajinagar — is proficient in the creation of Node JS for the development of quick and scalable server-side applications. Node’s orchestration of events helps us to be able to handle very high traffic without even a single drop in performance. We develop secure, stable, and easy to integrate APIs, real-time applications, and backends. Collaborating with our Website Development Company in Rajajinagar is the key to the robustness and responsiveness of your website to every customer interaction.",
  },
  {
    id: "tab4",
    num: "04",
    title: "CMS Website Development",
    heading: "CMS Website Development",
    body:
      "As a customer-centric Website Development Company in Rajajinagar, we facilitate website content management through CMS platforms such as WordPress and Joomla. Our CMS websites allow you to add, edit, or rearrange content without needing any technical skills. Every CMS project we bring to completion is SEO-optimized, user-friendly, and secure. Opting for our Website Development Company in Rajajinagar is equivalent to having absolute authority over your website's content while the design and functionality remain at the professional level.",
  },
];

export default function VerticalTabs() {
  const [active, setActive] = useState("tab1");
  const current = TABS.find((t) => t.id === active) || TABS[0]; // ← safe fallback

  return (<>
    <section className={styles.wrap}>
      <div className={styles.sectionTitle}>
       
        <h2 style={{fontSize:"40px"}}><strong> Our Services as a Website Development Company in Rajajinagar, Bangalore</strong></h2>
           </div>
    <p style={{fontSize:"18px"}}>We at Nakshatra Namaha Creations are a full-service Website Development Company in Rajajinagar to offer end-to-end web design and development solutions. We build such platforms that run smoothly with colourful React JS web apps, scalable Node JS backends, and flexible CMS websites. </p>
   

    <p style={{fontSize:"18px"}}> We guarantee that any site made by our staff will be fast, SEO-friendly, and brand-specific. Being a top Website Development Company in Rajajinagar, we use a mixture of design inventiveness and the most recent technology to give your business the necessary online presence and make it easy for the target audience to locate you.</p>
   
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
