"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "@/styles/BannerRajajinagar.module.css";
import BannerForm2 from "@/components/websiteDev/BannerForm2";

export default function BannerRajajinagar() {
  const banner = {
    image: "/media/gif/nncbanner3.jpg",
    title:
      "WEBSITE DEVELOPMENT COMPANY IN JP NAGAR",
    desc:
      "We build fast, secure, SEO-ready websites that turn visitors into customers and scale as your business grows.",
    showForm: true,
  };

  return (
    <div className={styles.heroBannerWrapper} id="contact">
      <div className={styles.carouselSlide}>
        <Image
          src={banner.image}
          alt="Banner"
          className={styles.carouselBgImage}
          fill={false}
          width={1920}
          height={1080}
          priority
        />

        <div className={styles.blackOverlay} />

        {/* Left content */}
        <div className={styles.carouselBannerLeft}>
          {/*  Breadcrumbs */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li aria-current="page">
                <span className={styles.breadcrumbsCurrent}>
                  Website Development (JP Nagar)
                </span>
              </li>
            </ol>
          </nav>

          <h1>{banner.title}</h1>
          <p>{banner.desc}</p>

          <div className={styles.bannerButtons}>
            <a href="tel:+919900566466" className={`${styles.btn} ${styles.callBtn}`}>
              <span>Call Now</span>
              <FaPhoneAlt className={styles.bounceIcon} style={{ marginLeft: 8 }} />
            </a>

            <a href="/contact-us" className={`${styles.btn} ${styles.contactBtn}`}>
              Contact Us
            </a>
          </div>
        </div>

        {/* Right form */}
        {banner.showForm && (
          <div className={styles.carouselCaptionRight}>
            <BannerForm2 />
          </div>
        )}
      </div>

      <div className={styles.scrollExplore}>SCROLL TO EXPLORE</div>
    </div>
  );
}
