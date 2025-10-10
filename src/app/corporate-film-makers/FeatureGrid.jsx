"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "Brand Story Films",
    desc: "Highlight your journey, mission, and values.",
    img: "/media/icons/brand.png",
  },
  {
    title: "Product Launch Films",
    desc: "Generate excitement and awareness for new product introductions.",
     img: "/media/icons/imovie.png",
  },
  {
    title: "CSR Films",
    desc: "Showcase your corporate social responsibility initiatives and community impact.",
    img: "/media/icons/csr.png",
  },
  {
    title: "Training & Induction Films",
    desc: "Provide consistent onboarding materials for employees.",
    img: "/media/icons/training.png",
  },
  {
    title: "Testimonial Films",
    desc: "Build trust and credibility with client and employee testimonials.",
    img: "/media/icons/testimonials.png",
  },
  {
    title: "Event Coverage Films",
    desc: "Capture conferences, seminars, and important brand events.",
   img: "/media/icons/movie.png",
  },
   {
    title: "Corporate Ad Films",
    desc: "Promote your services or products with polished ad-ready visuals.",
   img: "/media/icons/play.png",
  },
];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="text-center fw-bold mb-2">
         Types of Corporate Films We Create
        </h2>
        <p className="text-center  mb-5">
As professional corporate film makers, Nakshatra Namaha Creations delivers a range of films to suit various business needs
        </p>

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
