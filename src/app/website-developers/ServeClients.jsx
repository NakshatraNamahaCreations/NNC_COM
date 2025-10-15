"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [


  {
    title: "Retail & E-Commerce",
    desc: "We provide skilled website developers who understand the unique needs of online retailers. From secure payment gateways to smooth checkout experiences, we create shopping platforms that encourage customer trust and boost conversions.",
    img: "/media/icons/growth-chart.png",
  },
  {
    title: "Education & E-Learning",
    desc: "Our expert website developers build student-friendly learning portals with intuitive dashboards, interactive content delivery, and seamless integration of video lessons and assessments, helping institutions provide effective online education.",
      img: "/media/icons/education.png",
  },
  {
    title: "Healthcare & Wellness",
    desc: "By hiring our professional website developers, healthcare providers gain patient-centric, compliant websites with features like appointment scheduling, secure data handling, and responsive interfaces that enhance user experience and trust.",
   img: "/media/icons/healthcare.png",
  },
  {
    title: "Real Estate & Property Portals",
    desc: "Specialized website developers create real estate platforms equipped with advanced search filters, interactive maps, and dynamic property listings to streamline property discovery and attract potential buyers or tenants.",
    img: "/media/icons/apartments.png",
  },



    {
    title: "Startups & Enterprises",
    desc: "Once the site is live, we provide ongoing support, updates, and performance monitoring to ensure it continues to deliver a reliable user experience.",
    img: "/media/icons/shuttle.png",
  },
];

export default function ServeClients() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
         Industries We Serve
        </h2>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={styles.card}>
              <h4 className={styles.title}>{f.title}</h4>
              <p className={styles.desc}>{f.desc}</p>
              <br />
              
              <div className={styles.imgWrap}>
                <Image
                  src={f.img}
                  alt={f.title}
                  width={80}
                  height={80}
                  className={styles.img}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
