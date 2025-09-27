import React, { useEffect, useState } from "react";
import styles from "@/styles/hero-anuvic.module.css";

const IMAGES_TOP = [
   "/media/teams/Satish.jpeg",
 "/media/teams/Dashu.jpeg",
"/media/teams/Guru.jpeg",
 "/media/teams/Jayanth.jpeg",
 "/media/teams/Sonali.jpeg",
 "/media/teams/Kiruthika.jpeg",
 "/media/teams/Kavana.jpeg",
"/media/teams/Suman.jpeg",
 "/media/teams/Yogesh.jpeg",
  "/media/teams/Anil.jpeg",
  
];

const IMAGES_BOTTOM = [
  "/media/teams/Anil.jpeg",
  "/media/teams/Yogesh.jpeg",
  "/media/teams/Suman.jpeg",
  "/media/teams/Kavana.jpeg",
  "/media/teams/Kiruthika.jpeg",
  "/media/teams/Sonali.jpeg",
  "/media/teams/Jayanth.jpeg",
  "/media/teams/Guru.jpeg",
  "/media/teams/Dashu.jpeg",
  "/media/teams/Satish.jpeg",
];

const SocialIcon = ({ href, label, children }) => (
  <li className={styles.socialItem}>
    <a
      className={styles.socialLink}
      href={href}
      target="_blank"
      rel="noopener nofollow"
      aria-label={label}
    >
      {children}
    </a>
  </li>
);

export default function HeroAnuvic() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: "-10% 0px -10% 0px" }
    );
    const el = document.querySelector(`.${styles.observeAnchor}`);
    if (el) io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        {/* LEFT */}
        <div
          className={`${styles.left} ${styles.aosFadeRight} ${
            visible ? styles.isVisible : ""
          }`}
        >
          <span className={styles.observeAnchor} />
          <h2 className={styles.title}>
            Build Your
            <mark> Brand</mark> With
            <mark>Designs that Drive Growth</mark>
          </h2>
          <p className={styles.desc}>
            One stop solution for all your design needs.
          </p>

          <div className={styles.ctas}>
            <a
              className={styles.btnAccent}
              href="/about-us"
              rel="follow noopener"
              target="_self"
            >
              More Info
            </a>
            <a
              className={styles.btnAccent}
              href="https://www.google.com/search?sca_esv=37dc570b99b93daa&sxsrf=AE3TifMeyhiRO1aHtqwCXmFAKlaJLbCYFw:1755605332019&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EyPKFCtVY3d7C_bl9oXbhaaxYZ16Rc4ExzTJE-AGheULa0LQSe2duYhvo4Z58yIX6Pd184uxng6piPORs2RSBhMv1hAyHxMGZyFDwLoiLR0gio9kTw%3D%3D&q=Nakshatra+Namaha+Creations+Reviews&sa=X&ved=2ahUKEwjr87jB65aPAxWuRmwGHRP3NVYQ0bkNegQISBAE&biw=1536&bih=703&dpr=1.25"
              rel="follow noopener"
              target="_blank"
            >
              Google Review
            </a>
          </div>

          <ul className={styles.socials}>
            <SocialIcon
              href="https://www.instagram.com/nnc.digitalbengaluru/"
              label="Instagram"
            >
              <svg viewBox="0 0 24 24">
                <path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c.877.04,1.354.187,1.671.31.42.163.72.358,1.035.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.949.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.671-.163.42-.358.72-.673 1.035-.315.315-.615.51-1.035.673-.317.123-.794.27-1.671.31-.949.043-1.233.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.671-.31-.42-.163-.72-.358-1.035-.673-.315-.315-.51-.615-.673-1.035-.123-.317-.27-.794-.31-1.671C4.631,14.688,4.622,14.403,4.622,12s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.671.163-.42.358-.72.673-1.035.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31C9.312,4.631,9.597,4.622,12,4.622 M12,3C9.556,3,9.249,3.01,8.289,3.054 7.331,3.098,6.677,3.25,6.105,3.472 5.513,3.702,5.011,4.01,4.511,4.511c-.5.5-.808 1.002-1.038 1.594C3.25,6.677,3.098,7.331,3.054,8.289 3.01,9.249,3,9.556,3,12c0,2.444.01,2.751.054,3.711.044.958.196,1.612.418,2.185.23.592.538 1.094,1.038,1.594.5.5 1.002.808 1.594 1.038.572.222 1.227.375 2.185.418C9.249,20.99,9.556,21,12,21s2.751-.01,3.711-.054c.958-.044,1.612-.196,2.185-.418.592-.23 1.094-.538 1.594-1.038.5-.5.808-1.002 1.038-1.594.222-.572.375-1.227.418-2.185C20.99,14.751,21,14.444,21,12s-.01-2.751-.054-3.711c-.044-.958-.196-1.612-.418-2.185-.23-.592-.538-1.094-1.038-1.594-.5-.5-1.002-.808-1.594-1.038-.572-.222-1.227-.375-2.185-.418C14.751,3.01,14.444,3,12,3zM12,7.378c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378zM12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3 3,1.343,3,3S13.657,15,12,15zM16.804,6.116c-.596,0-1.08.484-1.08,1.08s.484,1.08,1.08,1.08c.596,0,1.08-.484,1.08-1.08s-.484-1.08-1.08-1.08z" />
              </svg>
            </SocialIcon>

            <SocialIcon
              href="https://www.facebook.com/Nakshatranamahacreations/"
              label="Facebook"
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z" />
              </svg>
            </SocialIcon>

            <SocialIcon
              href="https://www.linkedin.com/company/nakshatra-namaha-creation/"
              label="LinkedIn"
            >
              <svg viewBox="0 0 24 24">
                <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c.718,0,1.3-.582,1.3-1.3V4.3C21,3.582,20.418,3,19.7,3zM8.339,18.338H5.667v-8.59h2.672V18.338zM7.004,8.574c-.857,0-1.549-.694-1.549-1.548 0-.855.691-1.548,1.549-1.548.854,0,1.547.694,1.547,1.548 0,.855-.693,1.548-1.547,1.548zM18.339,18.338h-2.669v-4.177c0-.996-.017-2.278-1.387-2.278-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675,1.227-1.387,2.526-1.387 2.703,0,3.203,1.779,3.203,4.092V18.338z" />
              </svg>
            </SocialIcon>


            <SocialIcon
              href="https://www.youtube.com/c/NakshatraNamahaCreations"
              label="YouTube"
            >
              <svg viewBox="0 0 24 24">
                <path d="M21.8,8.001s-.195-1.378-.795-1.985c-.76-.797-1.613-.801-2.004-.847-2.799-.202-6.997-.202-6.997-.202h-.009s-4.198,0-6.997.202C4.608,5.216,3.756,5.22,2.995,6.016 2.395,6.623,2.2,8.001,2.2,8.001S2,9.62,2,11.238v1.517c0,1.618.2,3.237.2,3.237s.195,1.378.795,1.985c.761.797,1.76.771,2.205.855 1.6.153,6.8.201,6.8.201s4.203-.006,7.001-.209c.391-.047,1.243-.051,2.004-.847.6-.607.795-1.985.795-1.985s.2-1.618.2-3.237V11.238C22,9.62,21.8,8.001,21.8,8.001zM9.934,14.594l-.001-5.62 5.404,2.82-5.403,2.8z" />
              </svg>
            </SocialIcon>

            <SocialIcon href="https://x.com/nncbengaluru" label="X">
              <svg viewBox="0 0 24 24">
                <path d="M13.982 10.622 20.54 3h-1.554l-5.693 6.618L8.745 3H3.5l6.876 10.007L3.5 21h1.554l6.012-6.989L15.868 21h5.245l-7.131-10.378Zm-2.128 2.474-.697-.997-5.543-7.93H8l4.474 6.4.697.996 5.815 8.318h-2.387l-4.745-6.787Z" />
              </svg>
            </SocialIcon>
          </ul>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={`${styles.blob} ${styles.blobA}`} aria-hidden="true" />
          <div className={`${styles.blob} ${styles.blobB}`} aria-hidden="true" />

          <div className={styles.slopy}>
            <div className={styles.carouselTrack} role="list" aria-label="gallery row 1">
              {[...IMAGES_TOP, ...IMAGES_TOP].map((src, i) => (
                <div className={styles.tile} role="listitem" key={`top-${i}`}>
                  <img src={src} alt="" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.slopy2}>
            <div className={styles.carouselTrack} role="list" aria-label="gallery row 2">
              {[...IMAGES_BOTTOM, ...IMAGES_BOTTOM].map((src, i) => (
                <div className={styles.tile} role="listitem" key={`bot-${i}`}>
                  <img src={src} alt="" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
