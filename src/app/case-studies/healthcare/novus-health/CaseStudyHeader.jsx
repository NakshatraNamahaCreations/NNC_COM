"use client";
import styles from "../../../../styles/CaseStudyHeader.module.css";
import { FaCalendarAlt } from "react-icons/fa";

export default function CaseStudyHeader({
  title,
  date,
  industry,
  platforms,
  services,
}) {
  return (
    <section className={styles.wrapper}>
      {/* background shapes */}
      <div className={styles.bgLeft} />
      <div className={styles.bgRight} />

      <div className={styles.container}>
        <span className={styles.label}>CASE STUDY</span>

        <h1 className={styles.title}>{title}</h1>

        <div className={styles.date}>
          <FaCalendarAlt />
          <span>{date}</span>
        </div>

        {/* Info Cards */}
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <h4>Industry</h4>
            <p>{industry}</p>
          </div>

          <div className={styles.infoCard}>
            <h4>Platforms</h4>
            <p>{platforms}</p>
          </div>

          <div className={styles.infoCard}>
            <h4>Services Provided</h4>
            <p>{services}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
