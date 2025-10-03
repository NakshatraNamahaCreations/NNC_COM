"use client";

import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
export default function About() {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const headingAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-80px)",
    config: { tension: 80, friction: 40 },
    delay: 200,
    reset: false,
  });

  const textAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-80px)",
    config: { tension: 80, friction: 40 },
    delay: 400,
  });

  const imageAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(80px)",
    config: { tension: 80, friction: 40 },
    delay: 600,
  });

  return (
    <div
      ref={ref}
      className="mx-auto my-5 about-Section"
      style={{
        maxWidth: "1300px",
        // height: "100vh",
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "50px 40px",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Row>
        <Col lg={6}>
          {/* LEFT COLUMN - Text */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingRight: "0px",
            }}
          >
            <animated.h1
              style={{
                ...headingAnimation,
                fontWeight: 900,
                fontSize: "2.5rem",
                lineHeight: 1.2,
                color: "#002A3A",
                borderLeft: "6px solid rgb(42, 170, 228)",
                paddingLeft: "18px",
                marginBottom: "25px",
                letterSpacing: "3px",
              }}
            >
              Website Development Company in Bangalore
            </animated.h1>

            <animated.p
              style={{
                ...textAnimation,
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "rgb(42, 170, 228)",
                marginBottom: "12px",
                letterSpacing: "1.5px",
              }}
            >
              Vision
            </animated.p>

            <animated.p
              style={{
                ...textAnimation,
                fontWeight: 400,
                fontSize: "1.05rem",
                color: "#495057",
                lineHeight: 1.7,
                marginBottom: "25px",
                textAlign: "justify",
              }}
            >
              To be recognised as the best website development company in
              Bangalore and a leading mobile app development company known for
              building meaningful digital experiences. We aim to grow as a
              trusted name for businesses looking to build their online presence
              and expand through reliable, creative and result-oriented digital
              solutions.
            </animated.p>

            <animated.p
              style={{
                ...textAnimation,
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "rgb(42, 170, 228)",
                marginBottom: "12px",
                letterSpacing: "1.5px",
              }}
            >
              Mission
            </animated.p>

            <animated.p
              style={{
                ...textAnimation,
                fontWeight: 400,
                fontSize: "1.05rem",
                color: "#495057",
                lineHeight: 1.7,
                marginBottom: "35px",
                textAlign: "justify",
              }}
            >
              Our mission is to support businesses in their growth with
              practical and smart digital services. Be it website development,
              mobile app development or digital marketing, we are focused on
              providing simple, effective solutions as per the business needs.
              As one of the best website development company in Bangalore, we
              aim to provide value through honest work, quality consistency and
              long-lasting support.
            </animated.p>

            <Button
              variant="outline-success"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => router.push("/about-us")}
              style={{
                borderRadius: "30px",
                fontWeight: 600,
                fontSize: "1rem",
                padding: "14px 48px",
                borderWidth: "2px",
                transition: "all 0.3s ease",
                boxShadow: hovered ? "0 8px 22px rgb(42, 170, 228)" : "none",
                backgroundColor: hovered ? "rgb(42, 170, 228)" : "transparent",
                color: hovered ? "white" : "rgb(42, 170, 228)",
                borderColor: "rgb(42, 170, 228)",
                alignSelf: "flex-start",
                cursor: "pointer",
              }}
            >
              Explore
            </Button>
          </div>
        </Col>
        <Col lg={6}>
          {/* RIGHT COLUMN - Images with overlap */}
          <div
            style={{
              position: "relative",
              height: "400px",
              minHeight: "320px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              perspective: "1200px",
              gap: "15px",
            }}
            className="img-container"
          >
            <animated.div
              style={{
                ...imageAnimation,
                position: "absolute",
                top: "80px",
                left: "30px",
                cursor: "default",
                willChange: "transform",
                transition: "transform 0.3s ease",
                // border: "2px solid black",
                boxShadow: "5px 5px 5px #00000083",
                borderRadius: "20px 0px",
              }}
              className="about-img1-box"
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform =
                  "scale(1.07) translateZ(20px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <Image
                src="/media/teams/NNCGRPPHOTO.avif"
                alt="About visual background"
                width={440}
                height={210}
                className="about-img1"
              
                style={{ borderRadius: "20px 0px" }}
              />
            </animated.div>

            <animated.div
              style={{
                ...imageAnimation,
                position: "relative",
                top: "180px",
                left: "100px",
                cursor: "default",
                willChange: "transform",
                transition: "transform 0.3s ease",
                boxShadow: "5px 5px 5px #00000083",
                // border: "2px solid black",
                borderRadius: "0px 20px",
                zIndex: 10,
              }}
              className="about-img2-box"
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform =
                  "scale(1.07) translateZ(30px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <Image
                // src="/media/aboutImg4.webp"
                src="/media/teams/nncImg3.avif"
                alt="About visual foreground"
                width={440}
                height={210}
                className="about-img2"
                style={{ borderRadius: "0px 20px" }}
              
              />
            </animated.div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
