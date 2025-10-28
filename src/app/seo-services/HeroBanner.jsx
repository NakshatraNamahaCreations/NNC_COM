"use client";

import { useState } from "react";
import styles from "../../styles/hero-banner.module.css";
import { FiMail, FiPhone, FiUser, FiBriefcase, FiChevronRight } from "react-icons/fi";
import ContactForm from "@/components/ContactForm";
// import AnimatedNetwork from "@/components/AnimatedNetwork";

export default function HeroBanner() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: Hook up your API here (fetch/axios). Keep the UX snappy.
    setTimeout(() => setSubmitting(false), 1200);
  };

  return (
    <>
      {/* <AnimatedNetwork/> */}
      <section className={`${styles.hero} py-5`}>
        <div className="container position-relative">
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" className={styles.breadcrumbWrap}>
            <ol className={`breadcrumb mb-4 ${styles.breadcrumb}`}>
              <li className="breadcrumb-item">
                <a href="/" className={styles.crumbLink}>Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/services" className={styles.crumbLink}>Services</a>
              </li>
              <li className={`breadcrumb-item active ${styles.crumbActive}`} aria-current="page">
                Social Media Marketing Services 

              </li>
            </ol>
          </nav>

          {/* Content */}
          <div className="row align-items-start g-5 d-flex justify-content-between">

            {/* LEFT */}
            <div className="col-lg-6">
              {/* Heading */}
              <h1 className={`display-5 fw-bold lh-sm  ${styles.heroTitle}`} style={{marginBottom:"2px"}}>
              Social Media Marketing Services </h1>
               
                <h2>
                <span className={`display-5 fw-bold mb-3 ${styles.heroSubtitle}`}>Design. Develop. Deliver Excellence.</span>
              </h2>

              {/* Stats */}
              <div className="row g-3">
                {[
                  { n: "500+", l: "Projects Delivered" },
                  { n: "8+", l: "Years Experience" },
                  { n: "98%", l: "Client Retention" },
                  { n: "500+", l: "Happy Clinets" },
                ].map((s, i) => (
                  <div className="col-6" key={i}>
                    <div className={`${styles.statCard} text-center p-3 rounded-4`}>
                      <div className="h2 fw-bold mb-0">{s.n}</div>
                      <div className="small opacity-75">{s.l}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="col-lg-4 ms-auto">
              
              
                 <ContactForm />
           
            </div>
          </div>

          {/* Decorative strips overlay */}
          <div className={styles.stripes} aria-hidden="true" />
        </div>
      </section>
    </>
  );
}
