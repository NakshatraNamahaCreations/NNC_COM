"use client";
import { useState } from "react";
import styles from "../../styles/CTASection.module.css";
import RequestQuote from "@/components/RequestQuote";

export default function CTASection() {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <section className={styles.cta} aria-label="Call to action">
      {/* Background image */}
      <img
        src="/media/background2.avif"
        alt="Puppet Animation Services Banner"
        className={styles.bgVideo}
        loading="lazy"
        decoding="async"
      />

      {/* Dark overlay */}
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <span className={styles.pill}>Bring Stories to Life</span>

        <h2 className={styles.title}>
          Partner with Expert Puppet Animation Creators
        </h2>

        <p className={styles.sub}>
          Looking for a creative puppet animation studio to craft engaging,
          story-driven visuals? Our team specializes in designing expressive
          puppet characters and producing high-quality animations for brands,
          education, marketing, and storytelling that leave a lasting impact on
          audiences.
        </p>

        <div className={styles.actions}>
          {/* Call button */}
          <a
            href="tel:+919900566466"
            className={styles.ghostBtn}
            aria-label="Call now 9900566466"
          >
            Call Now
          </a>

          {/* Quote button */}
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

      {/* Hide default RequestQuote trigger */}
      <style jsx global>{`
        .popout-animation.hover-button.btn-talk-banner {
          display: none !important;
        }
      `}</style>
    </section>
  );
}
