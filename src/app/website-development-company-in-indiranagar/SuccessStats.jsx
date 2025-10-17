"use client";

import { useEffect, useRef, useState } from "react";
import InternalContactModal from "@/components/websiteDev/InternalContactModal";
const bgpink = "/media/webdev/group2.png";
const bgYellow = "/media/webdev/group1.png";
const bgblue = "/media/webdev/group3.png";
const StaticOnePageWebsiteIcon =
  "/media/webdev/Static One Page Website_Icon.png";
  const MultipageWordPressWebsite =
  "/media/webdev/Multipage WordPress Website.png";
  const mostPoptag = "/media/webdev/mostPoptag.png";
  const ECommerceWebsite = "/media/webdev/E - Commerce Website.png";
import PlanBtn from "@/components/websiteDev/PlanBtn";
import styles from "@/styles/SuccessStats.module.css";
import {
  FaCogs, 
  FaUsers, 
  FaComments, 
  FaHeadset, 
  FaTags 

} from "react-icons/fa";

const pillarsData = [
{
    icon: <FaCogs size={32} />,
    title: "Customized Solutions",
    description:
      "Our Website Development Company in Indiranagar develops custom websites that are the perfect match for your business goals and the target audience.",
  },
  {
    icon: <FaUsers size={32} />,
    title: "Experienced Team",
    description:
      "As a reputed Website Development Company in Indiranagar, we have the creative, technical, and SEO know-how for the successful execution of any project.",
  },
  {
    icon: <FaComments size={32} />,
    title: "Transparent Communication",
    description:
      "We are always available to share information and updates with our clients, thus ensuring a pleasant experience. There are no misunderstandings, only transparency, when you work with our Website Development Company in Indiranagar.",
  },
  {
    icon: <FaHeadset size={32} />,
    title: "Post-Launch Support",
    description:
      "Our Website Development Company in Indiranagar is always ready to assist you with the site updates, the ongoing technical support, and the gradual maintenance of your web page.",
  },
  {
    icon: <FaTags size={32} />,
    title: "Competitive Pricing",
    description:
      "We produce high-quality websites at reasonable prices. The main reasons for businesses to select our Website Development Company in Indiranagar are great value and quantifiable outcomes.",
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
   const [showPopup, setShowPopup] = useState(false);
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
   Why Choose Nakshatra Namaha Creations for Your Website Development
  </h2>
 <p style={{fontSize:"18px", width:"70%", margin:"0 auto", paddingBottom:"40px"}}>Choosing Nakshatra Namaha Creations a leading Website Development Company in Indiranagar is synonymous with innovation, quality, and a continuous partnership. The main reasons are:</p>

<div className={styles.pillarGrid}>
  {pillarsData.map((pillar, index) => (
    <div className={styles.pillarBox} key={index}>
      <div className={styles.pillarIcon}>{pillar.icon}</div>
      <div className={styles.pillarTitle}>{pillar.title}</div>
      <p className={styles.pillarDescription}>{pillar.description}</p>
    </div>
  ))}
</div>

</div>
</div>


     <div
              style={{
                backgroundColor: "#F6F6F6",
                padding: "80px",
                textAlign: "center",
              }}
            >
           
                <h2
                  style={{
                    fontWeight: "600",
                    // marginBottom: "1.5%",
                    fontSize: "26px",
                    margin: 0,
                  }}
                >
                  PICK YOUR PLAN
                </h2>
    
                <div
                  className="d-flex justify-content-between align-items-center "
                  style={{ gap: "20px", flexDirection: "row", flexWrap: "wrap" }}
                >
                  {/* First Plan Section */}
                  <div
                    style={{
                      flex: "1",
                      maxWidth: "400px",
                      position: "relative",
                      minWidth: "250px",
                      marginBottom: "20px",
                    }}
                    className="plan1"
                  >
                    <img
                      src={bgYellow}
                      alt="bg-blue"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <div style={{ position: "absolute", top: "15%", left: "5%" }}>
                      <img
                        src={StaticOnePageWebsiteIcon}
                        alt="building-icon"
                        style={{
                          width: "35%",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "52%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <h3 style={{ fontSize: "20px", color: "white", margin: 0 }}>
                        Static One Page Website
                      </h3>{" "}
                      {/* Single line text */}
                    </div>
    
                    <div
                      style={{
                        position: "absolute",
                        top: "65%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                      }}
                    >
                      <p style={{ fontSize: "16px" }}>Starting from</p>
                      <h2 style={{ fontSize: "30px", fontWeight: "600" }}>
                        ₹14,499
                      </h2>{" "}
                      {/* Reduced font size */}
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "5%",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <PlanBtn setShowPopup={setShowPopup} />
                      {showPopup && (
                        <InternalContactModal
                          showPopup={showPopup}
                          setShowPopup={setShowPopup}
                        />
                      )}
                    </div>
                  </div>
    
                  {/* Second Plan Section */}
                  <div
                    style={{
                      flex: "1",
                      maxWidth: "400px",
                      position: "relative",
                      minWidth: "250px",
                      marginBottom: "20px",
                    }}
                  >
                    <img
                      src={bgblue}
                      alt="bg-yellow"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <img
                      src={mostPoptag}
                      style={{
                        position: "absolute",
                        top: "1%",
                        right: "-6%",
                        width: "36%",
                      }}
                    />
                    <div style={{ position: "absolute", top: "16%", left: "5%" }}>
                      <img
                        src={MultipageWordPressWebsite}
                        alt="building-icon"
                        style={{
                          width: "35%",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "55%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <h3 style={{ fontSize: "20px", color: "white", margin: 0 }}>
                        Dynamic WordPress Website
                      </h3>{" "}
                      {/* Single line text */}
                    </div>
    
                    <div
                      style={{
                        position: "absolute",
                        top: "68%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                      }}
                    >
                      <p style={{ fontSize: "16px" }}>Starting from</p>
                      <h2 style={{ fontSize: "30px", fontWeight: "600" }}>
                        ₹24,999
                      </h2>{" "}
                      {/* Reduced font size */}
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "5%",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <PlanBtn setShowPopup={setShowPopup} />
                      {showPopup && (
                        <InternalContactModal
                          showPopup={showPopup}
                          setShowPopup={setShowPopup}
                        />
                      )}
                    </div>
                  </div>
    
                  {/* Third Plan Section */}
                  <div
                    style={{
                      flex: "1",
                      maxWidth: "400px",
                      position: "relative",
                      minWidth: "250px",
                      marginBottom: "20px",
                    }}
                    className="plan3"
                  >
                    <img
                      src={bgpink}
                      alt="bg-yellow"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <div style={{ position: "absolute", top: "15%", left: "5%" }}>
                      <img
                        src={ECommerceWebsite}
                        alt="building-icon"
                        style={{
                          width: "35%",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "52%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <h3 style={{ fontSize: "20px", color: "white", margin: 0 }}>
                        E - Commerce Website
                      </h3>{" "}
                      {/* Single line text */}
                    </div>
    
                    <div
                      style={{
                        position: "absolute",
                        top: "65%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                      }}
                    >
                      <p style={{ fontSize: "16px" }}>Starting from</p>
                      <h2 style={{ fontSize: "30px", fontWeight: "600" }}>
                        ₹45,999
                      </h2>
                    </div>
                      </div>
                      </div>

                    
                      </div>
        </>
  );
}
