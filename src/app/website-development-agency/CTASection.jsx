"use client";
import { useState } from "react";
import styles from "../../styles/CTASection.module.css";
import RequestQuote from "@/components/RequestQuote";

export default function CTASection() {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <section className={styles.cta} aria-label="Call to action">
      {/* Background video */}
<img
  src="/media/background2.avif"
  alt="Nakshatra Namaha Creations Banner"
  className={styles.bgVideo}
  loading="lazy"
  decoding="async"
/>


      {/* Dark overlay */}
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <span className={styles.pill}>Talk to our Experts</span>

        <h2 className={styles.title}>
       Talk to Our Website Development Experts
        </h2>

        <p className={styles.sub}>
          Partner with a trusted Website Development Agency to build scalable, responsive, and performance-driven websites that support long-term business growth.
        </p>

        <div className={styles.actions}>
          {/* ✅ Only one button visible */}
              <a
              href="tel:+919900566466"
              className={styles.ghostBtn}
              aria-label="Call now 9900566466"
            >
              Call Now 
            </a>
          <button
            className={styles.primaryBtn}
            onClick={() => setShowQuote(true)}
          >
            Request a Free Quote
          </button>
        </div>
      </div>

      {/* Popup form */}
      <RequestQuote showPopup={showQuote} setShowPopup={setShowQuote} />

      {/* ✅ Hide default RequestQuote trigger */}
      <style jsx global>{`
        .popout-animation.hover-button.btn-talk-banner {
          display: none !important;
        }
      `}</style>
    </section>
  );
}
