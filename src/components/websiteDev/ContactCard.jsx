"use client";

import styles from "@/styles/ContactCard.module.css";

export default function ContactCard() {
  return (
    <section className={styles.visitSection1}>
        <div className={styles.visitSection}>
      <h2 className={styles.heading}>
        VISIT OUR WEB DESIGNING <br /> COMPANY IN Bangalore
      </h2>

      <div className={styles.container}>
        {/* Google Map */}
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.662399833922!2d77.566!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1403b2b1ad!2sBangalore!5e0!3m2!1sen!2sin!4v1685432100000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className={styles.info}>
          <div className={styles.iconCircle}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 
             2.5 2.5 0 0 1 0 5z" />
  </svg>
</div>

          <h3>Nakshatra Namaha Creations</h3>
          <p>
            1st floor, Darshan Plaza, Dwaraka Nagar, Banashankari 6th Stage 1st
            Block, Channasandra, Bangalore, Karnataka 560061
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@nakshatranamahacreations.com">
              info@nakshatranamahacreations.com
            </a>
          </p>
          <p>
            <strong>Call:</strong>{" "}
            <a href="tel:+919900566466">9900566466</a>
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
