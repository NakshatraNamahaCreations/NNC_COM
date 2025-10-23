"use client";

import Image from "next/image";
import styles from "../../styles/FeatureGrid.module.css";

const features = [
       {
    title: "Corporate Videos",
    desc: "Focused storytelling that highlights company milestones and culture crafted by professional Corporate Video Makers ",
   img: "/media/icons/imovie.png",
  },
  {
    title: "Podcast Production",
    desc: "Our Corporate Video Makers create professional audio-visual podcasts that build thought leadership and brand authority.",
    // img: "/media/icons/brand.png",
       img: "/media/icons/play.png",
  },
  {
    title: "Commercial / TV Ads",
    desc: "Crisp, engaging films produced by our expert Corporate Video Makers, made for maximum recall on television or digital platforms.",
    img: "/media/icons/brand.png",
  },
  {
    title: "Product Demos",
    desc: "Clear, instructive demos powered by Corporate Video Makers to highlight product features and functionality.",
    img: "/media/icons/training.png",
  },
  {
    title: "Digital Ads",
    desc: "Short, performance-driven content made by Corporate Video Makers for online campaigns and promotions.",
    img: "/media/icons/social-media (2).png",
  },
  {
    title: "Interviews",
    desc: "Cinematic interviews crafted by our Corporate Video Makers to deliver authenticity, depth, and clarity in every frame.",
    img: "/media/icons/testimonials.png",
  },
  {
    title: "Social Media Videos",
    desc: "Feed-ready, shareable visuals conceptualized by our Corporate Video Makers for higher engagement and visibility.Capture conferences, seminars, and important brand events.",
   img: "/media/icons/movie.png",
  },
    {
    title: "Live Streams",
    desc: "Real-time multi-camera productions managed by Corporate Video Makers to capture events, launches, and updates seamlessly.",
   img: "/media/icons/live.png",
  },
      {
    title: " Documentary Videos",
    desc: "Narrative-led visuals built by Corporate Video Makers, combining interviews, b-roll, and storytelling with purpose.",
   img: "/media/icons/filmmaker.png",
  },
      {
    title: "Personal Branding Videos",
    desc: "Our Corporate Video Makers specialize in videos that position leaders and professionals as credible, visionary figures online.",
   img: "/media/icons/identity.png",
  },
      {
    title: "Educational Videos",
    desc: "Instructional and training videos produced by experienced Corporate Video Makers, ensuring knowledge retention and clarity.",
   img: "/media/icons/webinar.png",
  },

  

];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="text-center fw-bold mb-2">
         Our Video Production Process
        </h2>
        <p className="text-center  mb-5">
            Video creation is an experience that blends rhythm, timing, and atmosphere. As experienced Corporate Video Makers, we prioritize planning, communication, and adaptability. Every project is a fresh start shaped by open collaboration and creative energy, resulting in a film that mirrors your brand’s tone and purpose.
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
