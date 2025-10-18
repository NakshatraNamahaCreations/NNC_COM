"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";
import styles1 from "../../styles/FeaturesGrid2.module.css";

const ITEMS = [
  "Android app development company",
  "hire Android app developers",
  "custom Android app development",
  "Android mobile app development services",
  "Android app development agency",
  "native Android app development",
  "Kotlin app development",
  "Java Android app developers",
  "Android application development services",
  "enterprise Android app development",
  "Android app UI UX design",
  "Play Store app development",
  "Android app maintenance and support",
  "cross-platform Android app development",
  "affordable Android app development",
];



const FEATURES = [

  
  {
    icon:"/media/icons/badge (2).png",
    title: "Reach a Wider Audience",
    desc: "By choosing Android as your platform, you can tap into the worldwide user base as Android is the leading platform in terms of global market share.",
    accent: "#c99a14",
  },
  {
    icon: "/media/icons/financial-profit (1).png",
    title: "Cost-Effective Development",
    desc: "Android app development is made possible at a minimum cost due to the availability of open-source tools and the flexibility of the framework.",
    accent: "#4a8ec4",
  },
  {
    icon: "/media/icons/web.png",
    title: "Easy Customization",
    desc: "Android provides the user with more liberty in terms of adding those features that are only necessary for the business.",
    accent: "#d64a8a",
  },
  {
    icon: "/media/icons/bullhorn.png",
    title: "Faster Time to Market",
    desc: "Due to the less complicated app review process, your Android application can go live in a matter of hours or days.",
    accent: "#6d8fa2",
  },
  {
    icon: "/media/icons/app-settings.png",
    title: "Seamless Integration",
    desc: "There is no hassle in linking your app with third-party tools, APIs, or pre-existing business systems.",
    accent: "#c27b2e",
  },
  {
    icon: "/media/icons/mobile.png",
    title: "Multiple Device Support",
    desc: "Users can also be done via tablets, smart TVs, and wearable devices besides smartphones.",
    accent: "#55b047",
  },
    {
    icon: "/media/icons/ui.png",
    title: "Boost Operational Efficiency",
    desc: "By means of Android apps, one can effortlessly carry out the automation of tasks, improvement of workflows, and elimination of errors that are caused by human intervention.",
    accent: "#6d8fa2",
  },
    {
    icon: "/media/icons/app-development.png",
    title: "Better User Engagement",
    desc: "Push notifications, together with personalized features, enable users to be up-to-date and offer them an opportunity to get involved.",
    accent: "#d64a8a",
  },
    {
    icon: "/media/icons/responsive-design.png",
    title: "Improved Customer Experience",
    desc: "Mobile apps allow customers to carry out different activities wherever they want thus bringing them satisfaction and loyalty.",
    accent: "#6d8fa2",
  },
    {
    icon: "/media/icons/brand (1).png",
    title: "Scalable for Business Growth",
    desc: "You can opt to start off with a small application and scale up gradually as your business grows and changes.",
    accent: "#4a8ec4",
  },


];

export default function Trusted() {
 const track = [...ITEMS, ...ITEMS];
  return (
    <>
 
         <section className={styles1.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-2" style={{width:"70%", margin:"0 auto"}}>
         Benefits of Having a Android Mobile App for Your Business
        </h2>
        <br />
         {/* <p className={styles1.sec3Text}>
    When you choose our mobile app developers, you’re not just hiring coders—you’re partnering with a team of strategists, designers, and problem-solvers who are dedicated to your success. We understand that every business has unique needs, so our approach focuses on creating applications that combine functionality, innovation, and user experience.
By working with experienced mobile app developers, you gain access to a wide range of expertise:
        </p> */}

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
 
        <section className={styles.keywordsMarquee_wrap} aria-label="Capabilities">
      <div className={styles.keywordsMarquee_inner}>
        <div className={styles.keywordsMarquee_marquee}>
          <ul className={styles.keywordsMarquee_track}>
            {track.map((label, i) => (
              <li key={i} className={styles.keywordsMarquee_item}>
                <span className={styles.keywordsMarquee_pill}>{label}</span>
                <span className={styles.keywordsMarquee_dot} aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    
    </>
  );
}
