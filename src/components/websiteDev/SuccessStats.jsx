"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/SuccessStats.module.css";
import {
  FaTasks,
  FaMobileAlt,
  FaSitemap,
  FaDatabase,
  FaSearch,
  FaShieldAlt,
  FaChartLine,
  FaSyncAlt,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaMapMarkerAlt,
} from "react-icons/fa";

const pillarsData = [
  {
    icon: <FaTasks size={32} />,
    title: "Strategic Planning & Requirements Analysis",
  },
  {
    icon: <FaMobileAlt size={32} />,
    title: "Responsive & User-Centric Design",
  },
  {
    icon: <FaSitemap size={32} />,
    title: "Intuitive Navigation & User Experience Optimization",
  },
  {
    icon: <FaDatabase size={32} />,
    title: "Content Management System Integration",
  },
  {
    icon: <FaSearch size={32} />,
    title: "Search Engine Optimization (SEO) Implementation",
  },
  {
    icon: <FaShieldAlt size={32} />,
    title: "Security & Data Protection Measures",
  },
  {
    icon: <FaChartLine size={32} />,
    title: "Performance Monitoring & Website Maintenance",
  },
  {
    icon: <FaSyncAlt size={32} />,
    title: "Continuous Improvement & Future-Proofing",
  },
];

/* ---- Small helper: animated counter ---- */
function Counter({ to, from = 0, duration = 1200, className }) {
  const ref = useRef(null);
  const [val, setVal] = useState(from);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let started = false;
    let rafId = 0;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const startCounting = () => {
      const t0 = performance.now();
      const step = (now) => {
        const p = Math.min((now - t0) / duration, 1);
        const eased = easeOutCubic(p);
        const next = Math.round(from + (to - from) * eased);
        setVal(next);
        if (p < 1) rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          startCounting();
          io.unobserve(el); // run once
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [to, from, duration]);

  return (
    <span ref={ref} className={className}>
      {new Intl.NumberFormat().format(val)}
    </span>
  );
}

export default function SuccessStats() {
  useEffect(() => {
    document
      .querySelectorAll("[data-aos]")
      .forEach((el) => el.classList.add(styles.aosKick));
  }, []);

  return (
    <>
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div
          className={styles.left}
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <h2 className={styles.heading}>
            <mark className={styles.highlight}>Proven Results,</mark>{" "}
            Trusted by Clients Across India
          </h2>

          <p className={styles.desc}>
            Join us on our journey, providing countless solutions for our
            clients, weaving progress and success together.
          </p>

          <a href="https://anuvicdesigns.in/contact-us/" className={styles.cta}>
            Get in Touch
          </a>
        </div>

        <div className={styles.grid}>
          {/* Years */}
          <article
            className={`${styles.card} ${styles.violet}`}
            data-aos="zoom-out-up"
            data-aos-duration="400"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <div className={styles.icon} aria-hidden="true">
           <svg viewBox="0 0 48 48" className={styles.svg}>
  <path d="M18 36h12M16 40h16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  <path d="M16 12h16v6a8 8 0 0 1-16 0v-6z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
  <path d="M16 16H12a6 6 0 0 0 6 6M32 16h4a6 6 0 0 1-6 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
</svg>
            </div>
            <div className={styles.value}>
              <Counter to={8} duration={1200} />
              <span className={styles.suffix}>+</span>
            </div>
            <div className={styles.label}>Years of Experience</div>
          </article>

          {/* Happy Clients */}
          <article
            className={`${styles.card} ${styles.peach}`}
            data-aos="zoom-out-up"
            data-aos-duration="400"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <div className={styles.icon} aria-hidden="true">
              <svg viewBox="0 0 48 48" className={styles.svg}>
                <circle cx="24" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <path
                  d="M12 36c1-7 7-10 12-10s11 3 12 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path d="M31 18c-.8 1.1-2 1.8-3.5 1.8" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </div>
            <div className={styles.value}>
              <Counter to={500} duration={1200} />
              <span className={styles.suffix}>+</span>
            </div>
            <div className={styles.label}>Happy Clients</div>
          </article>

          {/* Projects */}
          <article
            className={`${styles.card} ${styles.peach}`}
            data-aos="zoom-out-up"
            data-aos-duration="400"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <div className={styles.icon} aria-hidden="true">
              <svg viewBox="0 0 48 48" className={styles.svg}>
                <path
                  d="M22 34v-9l6 2 6-3-6-3-6 2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 38c4-3 8-4 14-4s10 1 14 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className={styles.value}>
              <Counter to={500} duration={1200} />
              <span className={styles.suffix}>+</span>
            </div>
            <div className={styles.label}>Projects Completed</div>
          </article>

          {/* Technologies */}
          <article
            className={`${styles.card} ${styles.violet}`}
            data-aos="zoom-out-up"
            data-aos-duration="400"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <div className={styles.icon} aria-hidden="true">
   <svg viewBox="0 0 48 48" className={styles.svg}>
  <rect x="12" y="12" width="24" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5"/>
  <rect x="18" y="18" width="12" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5"/>
  <path d="M24 6v6M32 6v6M16 6v6M24 36v6M32 36v6M16 36v6M6 24h6M36 24h6M6 16h6M36 16h6M6 32h6M36 32h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
</svg>
            </div>
            <div className={styles.value}>
              <Counter to={25} duration={1200} />
              <span className={styles.suffix}>+</span>
            </div>
            <div className={styles.label}>Technologies</div>
          </article>
        </div>
      </div>
    </section>

    <div className={styles.corePillarWrapper}>
<div className={styles.corePillarWrapper1}>
  <h2 className={styles.corePillarHeading}>
    OUR CORE PILLARS OF WEB <br /> DEVELOPMENT SERVICES IN Bangalore
  </h2>
  <h2 className={styles.corePillarHeadingMob}>
    OUR CORE PILLARS OF WEB DEVELOPMENT SERVICES IN Bangalore
  </h2>

  <div className={styles.pillarGrid}>
    {pillarsData.map((pillar, index) => (
      <div className={styles.pillarBox} key={index}>
        <div className={styles.pillarIcon}>{pillar.icon}</div>
        <div className={styles.pillarTitle}>{pillar.title}</div>
      </div>
    ))}
  </div>
</div>
</div>
        </>
  );
}
