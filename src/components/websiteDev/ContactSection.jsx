"use client";

import { motion } from "framer-motion";
import styles from "@/styles/ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.contactSection1}>
        <div className={styles.contactSection}>
      {/* LEFT: Contact Form */}
      <form className={styles.contactForm}>
        <input
          type="text"
          placeholder="Your Name*"
          required
          className={styles.inputField}
        />
        <input
          type="email"
          placeholder="Your Email*"
          required
          className={styles.inputField}
        />
        <input
          type="tel"
          placeholder="Your Contact Number*"
          required
          className={styles.inputField}
        />
        <select className={styles.inputField}>
          <option>Select a Service</option>
          <option>Website Development</option>
          <option>Mobile App Development</option>
          <option>Digital Marketing</option>
          <option>Graphic Design</option>
        </select>
        <textarea
          placeholder="Your Message Here"
          rows="4"
          className={styles.textArea}
        ></textarea>

        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>
      </form>

      {/* RIGHT: Animated Content */}
      <div className={styles.contactInfo}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={styles.contactHeading}
        >
          Let’s Talk About Your Project 🚀
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className={styles.contactText}
        >
          Share your ideas with us and our team will bring them to life with
          smart digital solutions. We’re here to help you succeed online.
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1, type: "spring" }}
          className={styles.animatedIcon}
        >
          💡
        </motion.div>
      </div>
      </div>
    </section>
  );
}
