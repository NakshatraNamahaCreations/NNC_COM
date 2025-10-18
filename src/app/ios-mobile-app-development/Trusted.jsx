"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";
import styles1 from "../../styles/FeaturesGrid2.module.css";

const ITEMS = [
  "iOS app development company",
  "hire iOS app developers",
  "custom iOS app development",
  "iPhone app development services",
  "iPad app development company",
  "Swift app development",
  "SwiftUI developers",
  "iOS mobile app developers",
  "native iOS app development",
  "enterprise iOS app development",
  "iOS application development services",
  "App Store app development",
  "iOS app UI UX design",
  "iOS app maintenance and support",
  "cross-platform iOS app development",
  "affordable iOS app development",
];



const FEATURES = [

  
  {
    icon:"/media/icons/badge (2).png",
    title: "Reach Premium Users",
    desc: "Generally, iOS users are the ones to spend more often and prefer secure, high-quality digital experiences.",
    accent: "#c99a14",
  },
  {
    icon: "/media/icons/brand (1).png",
    title: "Build Brand Credibility",
    desc: "An app with a refined look on the App Store not only elevates the trust but also energizes the brand by enhancing the brand image.",
    accent: "#4a8ec4",
  },
  {
    icon: "/media/icons/mobile.png",
    title: "Deliver Consistent Performance",
    desc: "The lesser the variations of the devices, the iOS apps have the capability to offer the most stable and smooth user experiences.",
    accent: "#d64a8a",
  },
  {
    icon: "/media/icons/high-quality.png",
    title: "Engage with Quality-Conscious Audiences",
    desc: "A good design and performance are two things that Apple users strongly expect from you — thus, loyalty is formed.",
    accent: "#6d8fa2",
  },
  {
    icon: "/media/icons/app-settings.png",
    title: "Leverage Built-in Security Features",
    desc: "Enjoy the security layers that standard Apple features like Face ID and encrypted data handling provide.",
    accent: "#c27b2e",
  },
  {
    icon: "/media/icons/shuttle.png",
    title: "Speed Up Development & Testing",
    desc: "It is this limit on device types that enable faster development cycles and significantly lesser periods of testing.",
    accent: "#55b047",
  },
    {
    icon: "/media/icons/apple (1).png",
    title: "Integrate Apple Ecosystem Services",
    desc: "Make your app be perfectly in sync with each component of the ecosystem individually like Siri, Apple Pay, iCloud, and wearables.",
    accent: "#6d8fa2",
  },
    {
    icon: "/media/icons/app-development.png",
    title: "Boost User Engagement & Retention",
    desc: "Users are usually kept to return through the use of intuitive interfaces, smooth navigation, and app responsiveness",
    accent: "#d64a8a",
  },
    {
    icon: "/media/icons/app-store.png",
    title: "Gain Visibility on the App Store",
    desc: "Your app can be visible to the worldwide iOS community if your listing is well put together.",
    accent: "#6d8fa2",
  },
    {
    icon: "/media/icons/app-settings.png",
    title: "Scale Easily as You Grow",
    desc: "Your app is the one to be able to follow the steps of your business — starting with minor changes and then gradually adding new features.",
    accent: "#4a8ec4",
  },


];

export default function Trusted() {
 const track = [...ITEMS, ...ITEMS];
  return (
    <>
 
         <section className={styles1.featuresGrid_wrap} aria-label="Product features">
          <h2 className="text-center fw-bold mb-2" style={{width:"70%", margin:"0 auto"}}>
         Benefits of Having a IOS Mobile App for Your Business
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
