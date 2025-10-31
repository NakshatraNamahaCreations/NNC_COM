"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";
import styles1 from "../../styles/FeaturesGrid2.module.css";

const ITEMS = [
 "flutter app development company",
  "flutter app developers",
  "flutter app development services",
  "cross platform mobile app development",
  "flutter mobile app development",
  "hire flutter developers",
  "flutter application development company",
  "flutter app development agency",
  "custom flutter app development",
  "enterprise flutter app development",
  "flutter app development for startups",
  "flutter app UI UX design",
  "flutter app maintenance and support",
  "flutter app migration services",
  "flutter app backend integration",
  "flutter app consulting services",

  "flutter app development in bangalore",

];



const FEATURES = [

  
  {
    icon:"/media/icons/idea (1).png",
    title: "Faster Time to Market",
    desc: "Make, and then roll out, your app at a rapid pace thanks to Flutter’s single codebase that is valid for both Android and iOS.",
    accent: "#c99a14",
  },
  {
    icon: "/media/icons/growth-chart.png",
    title: "Reduced Development Costs",
    desc: "It is possible to save the money and time that would otherwise be spent on two codebases if you choose to work with one flutter app development company for the development of a Flutter app.",
    accent: "#4a8ec4",
  },
  {
    icon: "/media/icons/mobile.png",
    title: "Consistent User Experience",
    desc: "You can ensure that the look and feel of your app is the same for the users of all the platforms by employing flutter app development company UI components.",
    accent: "#d64a8a",
  },
  {
    icon: "/media/icons/ui.png",
    title: "High Performance",
    desc: "By converting Flutter to native code, the app will have almost the same level of performance, speed, and responsiveness as the native one.",
    accent: "#6d8fa2",
  },
  {
    icon: "/media/icons/app-settings.png",
    title: "Simplified Maintenance",
    desc: "The hot reload in Flutter serves as a very handy tool where it is possible to update, fix, and launch new features in an app instantly.",
    accent: "#c27b2e",
  },
  {
    icon: "/media/icons/science.png",
    title: "Access to Native Features",
    desc: "With lots of great plugins in the Flutter package, using device-specific features in your app is now more straightforward than ever.",
    accent: "#55b047",
  },
    {
    icon: "/media/icons/growth-chart.png",
    title: "Scalability for Future Growth",
    desc: "Our Flutter App Development Company is powered by the vision of turning your business into one that can grow indefinitely with the help of our modular architectures.",
    accent: "#4a8ec4",
  },
  {
    icon: "/media/icons/search.png",
    title: "Backed by Google & Strong Community",
    desc: "The future of your app is secured by the joint effort of Google and the energetic community of Flutter developers that are always looking to innovate and ​‍​‌‍​‍‌​‍​‌‍​‍‌help.",
    accent: "#d64a8a",
  },


];

export default function Trusted() {
 const track = [...ITEMS, ...ITEMS];
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
