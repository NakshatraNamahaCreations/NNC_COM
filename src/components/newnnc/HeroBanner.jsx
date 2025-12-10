// src/components/HeroBanner.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "@/styles/HeroBanner.css";
import Link from "next/link";  

const HeroBanner = () => {
  return (
    <section className="hero-section hero-bg d-flex align-items-center">
      <img
        src="/media/websiteBengaluru/slidee (1).avif"
        alt="Hero Background"
        className="hero-bg-img"
      />

      <div className="hero-bg-overlay"></div>

      <Container className="position-relative text-center hero-content">
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="hero-glass-box">

              <div
                className="hero-badge animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="hero-badge-dot-wrapper">
                  <span className="hero-badge-dot-ping" />
                  <span className="hero-badge-dot" />
                </span>
                <span className="hero-badge-text">
                  Leading Company in Bangalore
                </span>
              </div>

              <h1
                className="hero-title animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="animated-gradient">
                  Best Website Development
                </span>
                <br className="d-none d-lg-inline" />
                Company in Bangalore
              </h1>

              <p
                className="hero-subtitle animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                Creating{" "}
                <span className="fw-semibold text-white">
                  modern, responsive, and high-performing websites
                </span>{" "}
                that are built to help your brand grow. Our{" "}
                <span className="fw-semibold text-white">in-house team</span>{" "}
                ensures your website is{" "}
                <span className="hero-highlight">
                  fast, mobile-friendly, and SEO optimized
                </span>{" "}
                so your business gets seen by the right customers.
              </p>

              {/* CTA BUTTONS */}
              <div className="hero-cta-swipe d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">

                {/* Start Your Project Button */}
                <Link
                  href="/contact-us"   // <-- change to your route or #section
                  className="hero-btn-swipe"
                >
                  <span>Start Your Project</span>
                  <svg
                    className="hero-btn-icon hero-btn-icon-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                {/* WhatsApp Inquiry Button */}
                <Link
                  href="https://api.whatsapp.com/send/?phone=919900566466&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn-dark"
                >
                  <img
                    src="/media/icons/whatsapp.png"
                    alt="WhatsApp"
                    className="hero-btn-img"
                  />
                  <span >WhatsApp Inquiry</span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroBanner;
