"use client";

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import "@/styles/FaqSectionNew.css";
// Import image from public folder (use proper relative path for Next.js)
const faqsImg = "/media/NNCWebsite_V3_FAQ.png";

export default function FAQs({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [inView, setInView] = useState(false);
  const [activeKey, setActiveKey] = useState("0");
  const faqSectionRef = useRef(null);

  const toggleContent = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const leftColumnAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-100%)",
    from: { opacity: 0, transform: "translateX(-100%)" },
    config: { tension: 180, friction: 25 },
  });

  useEffect(() => {
    // This is the intersection observer to track when the FAQ section enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (faqSectionRef.current) {
      observer.observe(faqSectionRef.current);
    }

    return () => {
      if (faqSectionRef.current) {
        observer.unobserve(faqSectionRef.current);
      }
    };
  }, []);

  return (
    <div style={{ marginTop: "2%", marginBottom: "5%" }} ref={faqSectionRef}>
      <Container>
        <Row>
          {/* Left Column */}
          <Col sm={4}>
            <animated.h4
              style={{
                ...leftColumnAnimation,
                lineHeight: "1.5",
                fontWeight: "bolder",
                letterSpacing: "2px",
                fontSize: "30px",
              }}
              className="h1-FAQs"
            >
              FREQUENTLY ASKED QUESTION&apos;S
            </animated.h4>

            <animated.div
              style={{
                ...leftColumnAnimation,
                maxWidth: "45%",
                marginLeft: "50px",
              }}
            >
              {/* Using Next.js Image Component */}
              <Image
                src={faqsImg}
                alt="FAQ Image"
                className="img-fluid img-FAQs"
                width={200}
                height={200}
                unoptimized
              />
            </animated.div>
          </Col>

          {/* FAQ Accordion */}
        <Col md={8}>
  <Accordion
    activeKey={activeKey}
    onSelect={(key) => setActiveKey(key ?? "")}
    className="faq-accordion"
  >
    {faqs.map((faq, index) => {
      const key = index.toString();
      const isOpen = activeKey === key;

      return (
        <Accordion.Item eventKey={key} key={key} className="faq-item">
          <Accordion.Header>
            <div className="faq-header-inner">
              <span className="faq-question">{faq.question}</span>

              {/* Plus / minus or your image on the right */}
              <span className="faq-icon">
                {isOpen ? "−" : "+"}
                {/* or with image:
                <Image src="/assets/plus.png" alt="toggle" width={18} height={18} />
                */}
              </span>
            </div>
          </Accordion.Header>

          <Accordion.Body>
            <p className="faq-answer">{faq.answer}</p>
          </Accordion.Body>
        </Accordion.Item>
      );
    })}
  </Accordion>
</Col>

        </Row>
      </Container>
    </div>
  );
}
