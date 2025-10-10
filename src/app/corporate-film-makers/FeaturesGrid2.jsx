"use client";

import Image from "next/image";
import styles from "../../styles/FeaturesGrid2.module.css";

const FEATURES = [
  {
    icon: "/media/icons/idea (1).png",
    title: "Creativity and Unique Design",
    desc: "With a focus on creativity and uniqueness as a customer-centric web solutions company, we have an approach that embraces not only creativity but also the unique features that reflect your altered identity and put you in front of the market.",
    accent: "#09c2a3",
  },
  
  {
    icon:"/media/icons/responsive-design.png",
    title: "Responsive Design for All Devices",
    desc: "Our desktop website development company is the one who maintains the quality of experience of your website on desktops, tablets, and smartphones. Hence, you get to unlock customer engagement on every channel.",
    accent: "#c99a14",
  },
  {
    icon: "/media/icons/web.png",
    title: "Professional Web Development Standards",
    desc: "We are in tandem with the industry-best coding conventions and frameworks in achieving our goals. As a reliable web development company, our mission is to make available professional websites that are equipped with security, easy to be upgraded, and future-ready.",
    accent: "#4a8ec4",
  },
  {
    icon: "/media/icons/mobile.png",
    title: "Optimized Web Page Speed",
    desc: "The websites that are fast to load are attractive to more users and have better rankings on search engines. Our website development company builds websites with the optimization that allows them to quickly access, lowers the rate of leaving, and increases the conversion of leads.",
    accent: "#d64a8a",
  },
  {
    icon: "/media/icons/search-engine-optimization.png",
    title: "SEO-Integrated Development",
    desc: "All the websites that we produce are constructed in favor of SEO. We being a proficient web development company ensure that technical SEO, metadata, and content location all work together to create an effortless way for your targeted audience to find you through search engines.",
    accent: "#6d8fa2",
  },
  {
    icon: "/media/icons/web-browser.png",
    title: "Secure and Scalable Platforms",
    desc: "Along with security and scalability as the main aspects of our process, we have built reliable and strong platforms that keep the users' data safe and are able to accommodate gradual business growth in the long term.",
    accent: "#55b047",
  },
  {
    icon: "/media/icons/ui.png",
    title: "User-Friendly Interfaces",
    desc: "Our web designs are ideal for navigation and maintaining customers. As a professional web development company, we uphold easily understandable and visually appealing designs that facilitate user interaction and contribute to their happiness.",
    accent: "#c27b2e",
  },

];

export default function FeaturesGrid2() {
  return (
    <>
    <section className={styles.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-5">
          Key Features of Our Website Development Company
        </h2>

      <div className={styles.featuresGrid_grid}>
        {FEATURES.map((f, i) => (
          <article
            key={i}
            className={styles.featuresGrid_card}
            style={{ "--accent": f.accent }}
          >
            <div className={styles.featuresGrid_iconWrap} aria-hidden="true">
              {/* Replace with your exact sizes; keep 1:1 for best result */}
              <Image
                src={f.icon}
                alt=""
                width={72}
                height={72}
                className={styles.featuresGrid_icon}
              />
            </div>

            <h3 className={styles.featuresGrid_title}>
              {f.title.split("\n").map((line, idx) => (
                <span key={idx} className={idx === 0 ? styles.featuresGrid_strong : ""}>
                  {line}
                  {idx < f.title.split("\n").length - 1 ? <br /> : null}
                </span>
              ))}
            </h3>

            <p className={styles.featuresGrid_desc}>{f.desc}</p>

            {/* bottom bar */}
            <span className={styles.featuresGrid_bar} aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
 
    
    </>
  );
}
