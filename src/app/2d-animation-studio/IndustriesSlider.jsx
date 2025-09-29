"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/industries.module.css";

// Top row
const rowA = [
  { title: "Explainer Videos", icon: "/media/icons/multimedia.png", desc: "A 2D animation studio uses 2D animation to create explainer videos that take complicated concepts and turn them into visual stories that everybody can understand and even enjoy. Such videos can only be drawn up by an animation studio because it drastically simplifies and immerses at the same time a new idea into the audience structure in a few minutes, thus being very useful, for example, in startups who want to introduce new concepts." , color:"ind--blue"},
  { title: "Product Demos", icon: "/media/icons/business.png", desc: "Usually the easiest and most efficient way for customers to see the product's functions is by animation. Our 2D animation studio creates the professional product demos in a way that the benefits come to the customers through functionalities, and if potential customers are show-backed instructions to a preferred action, thus they are guided to take location.", color:"ind--purple"},
  { title: "Educational Animations", icon: "/media/icons/animate.png", desc: "The study of hard concepts could be made more entertaining and accessible by implementing interactive visuals. Using our 2D animation studios with years of experience is the right decision to make educational content easy in e-learning platforms, training programs, and school content.", color:"ind--mint"},
  { title: "Brand Storytelling", icon: "/media/icons/storytelling.png", desc: "Though every product and service in this world is already associated with a brand, it's all the same brands in the end that people love telling stories about. We are one of the most reliable 2D animation studios that turn brands into animated characters that not only entertain but also inform people about the brand, build loyalty and most of all make emotional bonds with consumers.", color:"ind--cyan"},
    { title: "Advertising & Marketing Animations", icon: "/media/icons/bullhorn.png", desc: "The only reason for such a world would be the existence of content, that is the world in which brands would have everything possible to bring animation to help them make themselves noticed. With the help of our 2D animation studios, businesses can create eye-catching, engaging, and creative advertising and marketing animations to energize their campaigns, get a long-lasting impression on their target audience, and turn the traffic into sales at multiple online platforms.", color:"ind--orange"},

  { title: "Character Animation", icon: "/media/icons/canadian.png", desc: "The thing about characters is that they are the most effective way to engage emotionally with an audience. Creative 2D animation studios provide a well-polished product of carefully conceived animated characters that are of your brand, which on the one hand simplify the processes, and on the other, provide fun and education at the same time.", color:"ind--cyan"},

];

// Bottom row (scrolls opposite) img: "/media/icons/ui.png",
const rowB = [
       { title: "Explainer Videos", icon: "/media/icons/multimedia.png", desc: "A 2D animation studio uses 2D animation to create explainer videos that take complicated concepts and turn them into visual stories that everybody can understand and even enjoy. Such videos can only be drawn up by an animation studio because it drastically simplifies and immerses at the same time a new idea into the audience structure in a few minutes, thus being very useful, for example, in startups who want to introduce new concepts." , color:"ind--blue"},
  { title: "Product Demos", icon: "/media/icons/business.png", desc: "Usually the easiest and most efficient way for customers to see the product's functions is by animation. Our 2D animation studio creates the professional product demos in a way that the benefits come to the customers through functionalities, and if potential customers are show-backed instructions to a preferred action, thus they are guided to take location.", color:"ind--purple"},
  { title: "Educational Animations", icon: "/media/icons/animate.png", desc: "The study of hard concepts could be made more entertaining and accessible by implementing interactive visuals. Using our 2D animation studios with years of experience is the right decision to make educational content easy in e-learning platforms, training programs, and school content.", color:"ind--mint"},
  { title: "Brand Storytelling", icon: "/media/icons/storytelling.png", desc: "Though every product and service in this world is already associated with a brand, it's all the same brands in the end that people love telling stories about. We are one of the most reliable 2D animation studios that turn brands into animated characters that not only entertain but also inform people about the brand, build loyalty and most of all make emotional bonds with consumers.", color:"ind--cyan"},
    { title: "Advertising & Marketing Animations", icon: "/media/icons/bullhorn.png", desc: "The only reason for such a world would be the existence of content, that is the world in which brands would have everything possible to bring animation to help them make themselves noticed. With the help of our 2D animation studios, businesses can create eye-catching, engaging, and creative advertising and marketing animations to energize their campaigns, get a long-lasting impression on their target audience, and turn the traffic into sales at multiple online platforms.", color:"ind--orange"},

  { title: "Character Animation", icon: "/media/icons/canadian.png", desc: "The thing about characters is that they are the most effective way to engage emotionally with an audience. Creative 2D animation studios provide a well-polished product of carefully conceived animated characters that are of your brand, which on the one hand simplify the processes, and on the other, provide fun and education at the same time.", color:"ind--cyan"},

];

function Row({ items, reverse=false }) {
  return (
    <div className={`${styles.marquee} ${reverse ? styles.marqueeB : styles.marqueeA}`}>
      <ul className={styles.track}>
        {[...items, ...items].map((card, i) => (
          <li
            key={`${card.title}-${i}`}
            className={`${styles.indCard} ${styles[card.color]}`}
            aria-hidden={i >= items.length ? "true" : "false"}
          >
            <Image
              src={card.icon}
              alt={i >= items.length ? "" : card.title}
              width={72}
              height={72}
              className={styles.indIcon}
            />
            <h4 className={styles.indTitle}>{card.title}</h4>
            <span className={styles.indLine} />
            <p className={`${styles.indDesc} ${styles.clamp3}`}>{card.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function IndustriesSlider() {
  // Optional: pause when user prefers reduced motion
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(`.${styles.track}`).forEach(el => (el.style.animation = "none"));
    }
  }, []);

  return (
    <section className={styles.industries}>
      <div className="container">
      <h2 className={styles.sec3Heading}>Services Offered by Our 2D Animation Studios</h2>
<p className={styles.sec3Text}>
  Creative 2D animation studios are the ideal places where you can find the best animators to bring your 2D storyboard to life. We offer all the necessary services to satisfy the animators, clients, educators, and creators who need to attract and communicate effectively. With the appropriate and balanced usage of imagination and strategy, the art of animation can make your final animation really worth the while and also leave a long-term memory trace in the user's mind.
</p>

      </div>

      {/* Row A (left) */}
      <Row items={rowA} />

      {/* Row B (right) */}
      <Row items={rowB} reverse />
    </section>
  );
}
