"use client";
import { useState } from "react";
import styles from "../../styles/CTASection.module.css";
import RequestQuote from "@/components/RequestQuote";

export default function CTASection() {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <section className={styles.cta} aria-label="Call to action">
      {/* Background video */}
     <video
        className={styles.bgVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="none" // prevents preloading until visible
        aria-hidden="true"
      >
        <source src="./BananerVideo.webm" type="video/webm" />
        {/* <source src="/videos/BannerVideo.mp4" type="video/mp4" /> */}
      </video>

      {/* Dark overlay */}
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <span className={styles.pill}>Talk to our Experts</span>

      <h2 className={styles.title}>
  Partner with Expert Mobile App Developers
</h2>

<p className={styles.sub}>
  Looking for a trusted mobile app developers company to bring your ideas to life? 
  We design and build scalable, user-friendly, and performance-driven mobile applications 
  that help businesses connect with customers and achieve growth on iOS, Android, 
  and cross-platform solutions.
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
