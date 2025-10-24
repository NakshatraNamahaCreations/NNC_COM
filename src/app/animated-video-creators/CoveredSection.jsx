"use client";

import Image from "next/image";
import styles from "../../styles/covered-section.module.css";

export default function CoveredSection() {


  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left copy */}
          <div className="col-lg-7">
            <h2 className={styles.title}>Animated Video Creators </h2>
            <p className={styles.lead}>
            One of the most effective means of communication is visual storytelling it helps establish an emotional bond and increase engagement. In today’s fast-moving digital space, Animated Video Production has become one of the most powerful ways for brands to communicate. It conveys complex messages simply and effectively. Our creators specialize in transforming dry concepts into lively visuals through professional Animated Video Production, using eye-catching graphics, smooth transitions, and engaging storytelling that connects with audiences.
            </p>
             <p className={styles.lead}>
            Our Animated Video Production services make your content memorable, whether introducing a product, explaining a process, or sharing an educational message. We don’t just animate we craft stories that resonate with your audience and drive results. Every Animated Video Production we create is designed to help businesses achieve measurable success.
            </p>
          </div>

          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.imageCard}>
              <Image
                src="/tech24.gif"
                alt="Ionic app development — UI graph and neural network illustration"
                fill
                sizes="(max-width: 992px) 100vw, 520px"
                priority
                className="object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
