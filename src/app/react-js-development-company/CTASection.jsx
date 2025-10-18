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
Partner with Expert React.js Developers
</h2>

<p className={styles.sub}>
Looking for a trusted React.js development company to create fast, interactive, and user-friendly web applications? Our team of skilled React.js developers specializes in building dynamic front-end interfaces, scalable web apps, and high-performing SPAs (Single Page Applications) that deliver exceptional user experiences.
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
