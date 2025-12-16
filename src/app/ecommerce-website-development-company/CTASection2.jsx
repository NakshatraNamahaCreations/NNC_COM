"use client";
import { useState } from "react";
import styles from "../../styles/CTASection1.module.css";
import RequestQuote from "@/components/RequestQuote";

export default function CTASection2() {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <section className={styles.cta} aria-label="Call to action" >
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
        <span className={styles.pill}>Connect with an Expert</span>

<h2 className={styles.title}>
Ready to Launch Your Online Store?
</h2>

<p className={styles.sub}>
      Partner with Nakshatra Namaha Creations, a top E-commerce website development company, and build the e-commerce business you’ve dreamed of.
</p>




        <div className={styles.actions}>
       
          <button
            className={styles.primaryBtn}
            onClick={() => setShowQuote(true)}
          >
            Get Your Free Consultation
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
