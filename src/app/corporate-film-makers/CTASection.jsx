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
  Partner with Leading Corporate Ad Film Makers
</h2>

<p className={styles.sub}>
  Looking for professional corporate ad film makers to bring your brand story
  to life? We craft high-quality ad films that capture attention, communicate
  your message clearly, and leave a lasting impression on your audience.
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
