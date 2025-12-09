"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
  {
    title: "Explainer Motion Graphics",
    desc: "We create explainer videos that turn complex ideas into clear, engaging stories using visual storytelling, animated icons, and character-based sequences.",
    img: "/media/icons/motion-graphic (1).png",
  },

  {
     title: "Training & SaaS Motion Graphics",
    desc: "Startups, SaaS brands, and training teams use our motion graphics to educate users, simplify workflows, and keep their audiences engaged from start to finish.",
    img: "/media/icons/saas.png",
  },
  {
        title: "Product Promo & Launch Reels",
    desc: "For new product launches, we design high-impact promos and launch reels that highlight features through dynamic animation and eye-catching visuals.",
    img: "/media/icons/backend.png",
  },
  {
       title: "UI Animations & 3D Mockups",
    desc: "Our team produces UI animations and 3D mockups so your digital products look polished and premium across websites, apps, and product demos.",

 img: "/media/icons/animate (1).png",
},
    {
       title: "Kinetic Typography Motion Graphics",
    desc: "We use kinetic typography to deliver powerful, text-driven communication where words move, react, and emphasize your key messages.",
    img: "/media/icons/online-analysis.png",
  },
     {
       title: "Quote, Lyric & Voice-Synced Visuals",
    desc: "With motion graphics, quotes, lyrics, and voice-synced messages become vibrant animated pieces that grab attention even when the content itself is static.",
    img: "/media/icons/song-lyrics.png",
  },

];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
<h2 className="text-center fw-bold mb-2">
 Our Services on Motion Graphics
</h2>


<br />

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
