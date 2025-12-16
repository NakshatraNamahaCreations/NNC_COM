"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";
import styles1 from "../../styles/FeaturesGrid2.module.css";


const FEATURES = [

  
  {
    icon:"/media/icons/ux.png",
    title: "Clear Project Timelines – No Delays, No Guesswork",
    desc: "We outline a well-defined development plan with very clear and achievable goals. Executives are briefed on what is being constructed, the current phase of the project, and when the store will be accessible to the public.",
    accent: "#c99a14",
  },
  {
    icon: "/media/icons/profit-growth.png",  //growth-chart.png
     title: "Transparent Pricing – No Hidden Costs, No Surprises",
    desc: "Our prices are a reflection of the value given. Being an ethical E-commerce website development company, we do not only disclose the cost, the scope, and the deliverables but also reassure you that you are calm and confident in the entire development process.",
    accent: "#4a8ec4",
  },
  {
    icon: "/media/icons/mobile.png",
   title: "Dedicated Support – Before, During & After Launch",
    desc: "Whatever the issue maybe from the provision of technical support to platform upgrades, our support team is always available to you. We don’t disappear after the launch of your store but rather treat your success as our obligation.",
    accent: "#d64a8a",
  },
  {
    icon: "/media/icons/ui.png",
    title: "High-Quality Development – Built for Performance & Scalability  ",
    desc: "Every code segment is crafted with great care and accuracy. We make sure that your online store is quick, safe, can easily be viewed on mobile, and is capable of handling further changes and extensions - which is a hallmark of a trusted E-commerce website development company.",
    accent: "#6d8fa2",
  },
  {
    icon: "/media/icons/app-settings.png",
    title: "Real Results, Not Promises – Proven Success Across Industries",
    desc: "What we do is simply set up online stores that start bringing in sales, increase customer loyalty, and add to brand trustworthiness. Our practice of focusing on results only is the key to the growth being measurable and thus your investment being ​‍​‌‍​‍‌​‍​‌‍​‍‌fruitful",
    accent: "#c27b2e",
  },



];

export default function Trusted() {

  return (
    <>
 
         <section className={styles1.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-2" style={{width:"70%", margin:"0 auto"}}>
         Why Choose Nakshatra Namaha Creations as Your Flutter App Development Company
        </h2>
        <br />
         <p className={styles1.sec3Text}>
    Trust,​‍​‌‍​‍‌​‍​‌‍​‍‌ innovation, and consistent delivery are the main factors that have helped us at Nakshatra Namaha Creations to build our reputation as a Flutter App Development Company.
       </p>

      <div className={styles1.featuresGrid_grid}>
        {FEATURES.map((f, i) => (
          <article
            key={i}
            className={styles1.featuresGrid_card}
            style={{ "--accent": f.accent }}
          >
            <div className={styles1.featuresGrid_iconWrap} aria-hidden="true">
              {/* Replace with your exact sizes; keep 1:1 for best result */}
              <Image
                src={f.icon}
                alt=""
                width={72}
                height={72}
                className={styles1.featuresGrid_icon}
              />
            </div>

            <h3 className={styles1.featuresGrid_title}>
              {f.title.split("\n").map((line, idx) => (
                <span key={idx} className={idx === 0 ? styles1.featuresGrid_strong : ""}>
                  {line}
                  {idx < f.title.split("\n").length - 1 ? <br /> : null}
                </span>
              ))}
            </h3>

            <p className={styles1.featuresGrid_desc}>{f.desc}</p>

            {/* bottom bar */}
            <span className={styles1.featuresGrid_bar} aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
 
       
    </>
  );
}
