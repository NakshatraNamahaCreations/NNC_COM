"use client"; // Needed for Bootstrap interactive components

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import QuickLinks from "@/components/QuickLinks";
import Link from "next/link";
import styles from "@/styles/PopularSearches.module.css";

const data = [
  {
    label: "In India",
    links: [
   
      { text: "Mumbai", href: "/website-development-company-in-mumbai" },
      { text: "Hyderabad", href: "/website-development-company-in-hyderabad" },
      { text: "Bangalore", href: "/website-development-company-in-bangalore" },
      { text: "Mysore", href: "/" },
    ],
  },
    {
    label: "In Banglore",
    links: [
   
      { text: "Hsr Layout", href: "/website-development-company-in-hsr-layout" },
      { text: "Malleshwaram", href: "/website-development-company-in-malleshwaram" },
       { text: "Jayanagar", href: "/website-designing-company-in-jayanagar" },
        { text: "Indiranagar", href: "/website-development-company-in-indiranagar" },
         { text: "Rajajinagar", href: "/website-development-company-in-rajajinagar" },
          { text: "JP Nagar", href: "/website-development-company-in-jpnagar" },
           { text: "RR Nagar", href: "/website-development-company-in-rr-nagar" },
    ],
  },
    {
    label: "Website Development",
    links: [
      { text: "Website Development Company", href: "/website-development-company" },
      { text: "Website Developers", href: "/website-developers" },
       { text: "Website Designing Company", href: "/website-designing-company" },
            { text: "Website Development Services in Bengaluru", href: "/web-development-services-in-bengaluru" },
                 { text: "Website Developers", href: "/website-developers" },
                 
      { text: "Web Design and Development Company", href: "/" },
      { text: "Professional Web Development Services", href: "/"},
      { text: "Website Development Agency",  href: "/"},
      { text: "Website Design Company",  href: "/" },
      { text: "Web Development Firm",  href: "/" },
      { text: "Best Website Development Company",  href: "/" },
      { text: "Responsive Web Development Company",  href: "/" },
      { text: "Hire Website Developers",  href: "/" },
      { text: "Website Redesign Services",  href: "/" },
      { text: "CMS Website Development Company",  href: "/" },
      { text: "ReactJS Web Development Company",  href: "/" },
        { text: "ReactJS Development Company",  href: "/react-js-development-company" },
      { text: "NodeJS Web Development Company",  href: "/" },
       { text: "NodeJS Development Company",  href: "/node-js-development-company" },
      { text: "PHP Web Development Company",  href: "/" },
      { text: "Full Stack Web Development Company",  href: "/" },
      { text: "MERN Stack Web Development Company",  href: "/" },
        { text: "Website Developers In Mumbai",  href: "/website-developers-in-mumbai" },
    ],
  },
  {
    label: "Mobile App Development",
    links: [
      { text: "Mobile App Development Company", href: "/mobile-app-development-company" },
        { text: "Mobile App Developers", href: "/mobile-app-developers" },
        { text: "Mobile App Development Company In Hyderabad", href: "/mobile-app-development-company-hyderabad" },
        { text: "Mobile App Development Company In Bangalore", href: "/mobile-app-development-company-in-bangalore" },
        { text: "Mobile App Development Company In Mumbai", href: "/mobile-app-development-company-in-mumbai" },
        { text: "Mobile App Development Company in RR Nagar", href: "/mobile-app-development-company-in-rr-nagar" },
      { text: "App Developmers In Banglore",  href: "/app-developers-in-bangalore" },
      { text: "Mobile Application Developers",  href: "/"},
      { text: "Custom Mobile App Development",  href: "/" },
      { text: "Android App Development Company",  href: "/android-app-development" },
      { text: "iOS App Development Company",  href: "/ios-mobile-app-development" },
      { text: "Best App Development Agency",  href: "/" },
      { text: "Flutter App Development Company",  href: "/flutter-app-development" },
      { text: "React Native App Development Company",  href: "/react-native-mobile-app-developers" },
      { text: "Cross-platform App Development Company",  href: "/" },
      { text: "Native Mobile App Developers",  href: "/" },
      { text: "E-commerce App Development Company",  href: "/" },
      { text: "Healthcare Mobile App Development",  href: "/" },
      { text: "Education App Development Company",  href: "/" },
      { text: "Real Estate Mobile App Developers",  href: "/" },
    ],
  },
  {
    label: "Graphic Design",
    links: [
       { text: "Graphic Design Services In Hyderabad",  href: "/graphic-design-services-hyderabad" },
       { text: "Graphic Design Company In Bangalore",  href: "/graphic-design-company-in-bangalore" },
       
      { text: "Graphic Design Company",  href: "/graphic-designing-company" },
      { text: "Logo Design Company", href: "/" },
      { text: "UI UX Design Company",  href: "/"},
      { text: "UI Design Company",  href: "/"},
      { text: "UX Design Company",  href: "/"},
      { text: "Creative Design Studio", href: "/"},
    ],
  },
  {
    label: "2D Animation",
    links: [
      { text: "2D Animation Services",   href: "/" },
      { text: "2D Animation Studio", href: "/2d-animation-studio" },
      { text: "2D Motion Graphics",  href: "/" },
       { text: "Animated Video Creators",   href: "/animated-video-creators" },
      { text: "2D Cartoon Animation",   href: "/" },
      { text: "2D Explainer Video",   href: "/" },
      { text: "2D Character Animation",   href: "/" },
      { text: "2D Animation Company",   href: "/" },
      { text: "2D Animation Production",   href: "/" },
      { text: "Motion Graphics",   href: "/" },
      { text: "2D Animation Studio",   href: "/" },
      { text: "Hire 2D Animators",   href: "/" },
      { text: "Puppet Animation",   href: "/" },
      { text: "2D Animation for Advertising",   href: "/"},
    ],
  },
  {
    label: "Digital Marketing",
    links: [
        { text: "Digital Marketing Agency In Bangalore",   href: "/digital-marketing-agency-in-bangalore" },
          { text: "Digital Marketing Agency In Hyderabad",   href: "/digital-marketing-agency-hyderabad" },
           { text: "Paid Marketing Services",   href: "/paid-marketing-services" },
      { text: "Digital Marketing Agency",   href: "/" },
{ text: "Social Media Marketing",   href: "/social-media-marketing" },
      { text: "SEO Services",   href: "/seo-services" },
     { text: "UI UX Design Agency",   href: "/ui-ux-design-agency" },
      { text: "Digital Marketing Services",   href: "/" },
      { text: "PPC Advertising",   href: "/" },
      { text: "Digital Marketing Company",   href: "/" },
      { text: "Internet Marketing",   href: "/" },
    ],
  },
  {
    label: "Corporate Video Production",
    links: [
        { text: "Corporate Video Production In Bangalore",   href: "/corporate-video-production-company-in-bangalore"},
      { text: "Corporate Video Production In Hyderabad",   href: "/corporate-video-production-company-hyderabad"},  
       { text: "Corporate Film Makers",   href: "/corporate-film-makers"},
          { text: "Corporate Video Makers", href: "/corporate-video-makers" },  
      { text: "Corporate Video Production",   href: "/"},
      { text: "Corporate Ad Shoot",   href: "/" },
    
      { text: "Business Promotional Video",   href: "/"},  
        { text: "Motion Graphics Service",   href: "/motion-graphics-service"}, 
      { text: "Product Video Shoot",   href: "/"},
      { text: "Drone Shoot for Corporate Film",   href: "/" },
    ],
  },
]

export default function Footer() {
  return (

    <>
    <Container style={{ color: "white" }}>
      <Container
        style={{ padding: "50px 0", fontWeight: "600", letterSpacing: "1px" }}
        className="container-footer"
      >
        <Row>
          {/* Quick Links */}
          <Col sm={4} style={{ padding: "0 30px" }} className="col-first">
            <QuickLinks />
            <div>
              <h5
                style={{ color: "white", fontSize: "18px", marginTop: "10%" }}
              >
                Social Media
              </h5>

              <div className="footer-social-icons">
                <a
                  href="https://www.facebook.com/Nakshatranamahacreations/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/media/NNCWebsite_Contact_V2_facebook.png"
                    alt="facebook-icon"
                    className="zoom-in-image"
                  />
                </a>
                <a
                  href="https://www.youtube.com/c/NakshatraNamahaCreations"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/media/NNCWebsite_Contact_V2_youtube.png"
                    alt="youtube-icon"
                    className="zoom-in-image"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/nakshatra-namaha-creation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/media/NNCWebsite_Contact_V2-06.png"
                    alt="linkedin-icon"
                    className="zoom-in-image"
                  />
                </a>
                <a
                  href="https://www.instagram.com/nnc.digitalbengaluru/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/media/NNCWebsite_Contact_V2_Instagram.png"
                    alt="instagram-icon"
                    className="zoom-in-image"
                  />
                </a>
                <a
                  href="https://x.com/nncbengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/media/twitter.png"
                    alt="twitter-icon"
                    className="zoom-in-image"
                  />
                </a>
              </div>
            </div>
          </Col>

          {/* Contact & Services Section */}
          <Col sm={8}>
            <Row>
              {/* Contact Us */}
              <Col
                sm={6}
                style={{ padding: "0 30px" }}
                className="col2-contact"
              >
                <section id="about-section">
                  <h5
                    className="h5-col2"
                    style={{
                      marginBottom: "20px",
                      fontWeight: "bold",
                      letterSpacing: "2px",
                      fontSize: "18px",
                    }}
                  >
                    CONTACT US
                  </h5>
                </section>
                <ul
                  className="ul-li-footer2"
                  style={{
                    listStyle: "none",
                    padding: 0,
                    fontWeight: "400",
                    fontSize: "14px",
                  }}
                >
                  <li
                    style={{ marginBottom: "15px", cursor: "pointer" }}
                    onClick={() => window.open("tel:+919900566466", "_self")}
                  >
                    <FaPhone style={{ marginRight: "10px" }} />
                    +91 9900566466
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <a
                      href="mailto:info@nakshatranamahacreations.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaEnvelope style={{ marginRight: "10px" }} />
                      info@nakshatranamahacreations.com
                    </a>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <a
                      href="https://maps.app.goo.gl/7WjEXPpKFusk5oN67"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <span style={{ display: "flex", alignItems: "baseline" }}>
                        <FaMapMarkerAlt style={{ marginRight: "10px" }} />
                        <h6 style={{ fontWeight: "bold" }}>BENGALURU</h6>
                      </span>
                      1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari,
                      6th Stage 1st Block, Channasandra, Bengaluru, Karnataka -
                      560061
                    </a>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <a
                      href="https://maps.app.goo.gl/v4SqickxVKMRoeq57"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <span style={{ display: "flex", alignItems: "baseline" }}>
                        <FaMapMarkerAlt style={{ marginRight: "10px" }} />
                        <h6 style={{ fontWeight: "bold" }}>MYSURU</h6>
                      </span>
                      SUSWANI TOWERS, Akkamahadevi Rd, JP Nagar 2nd Stage,
                      C-Block, JP Nagar, Mysuru, Karnataka 570008
                    </a>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <a
                      href="https://maps.app.goo.gl/2cBrAJWUcP4jdsma8"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <span style={{ display: "flex", alignItems: "baseline" }}>
                        <FaMapMarkerAlt style={{ marginRight: "10px" }} />
                        <h6 style={{ fontWeight: "bold" }}>HYDERABAD</h6>
                      </span>
                      64/2 RT, Prakashnagar, Begumpet, Hyderabad, Telangana -
                      500016
                    </a>
                  </li>
                </ul>
              </Col>

              {/* Our Services */}
              <Col
                sm={6}
                style={{ padding: "0 30px" }}
                className="col3-contact"
              >
                <h5
                  className="h5-col3"
                  style={{
                    marginBottom: "20px",
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    fontSize: "18px",
                  }}
                >
                  OUR SERVICES
                </h5>
                <ul
                  className="ul-li-footer3"
                  style={{
                    listStyle: "none",
                    padding: 0,
                    fontWeight: "400",
                    fontSize: "14px",
                  }}
                >
                  <Link
                    href="/mobile-app-development-company-in-bangalore"
                    className="removelinkStyle2"
                  >
                    <li style={{ marginBottom: "25px" }}>
                      Mobile App Development
                    </li>
                  </Link>
                  <Link
                    href="/website-development-company-in-bangalore"
                    className="removelinkStyle2"
                  >
                    <li style={{ marginBottom: "25px" }}>
                      Website Development
                    </li>
                  </Link>
                  <Link
                    href="/web-development-services-in-bengaluru"
                    className="removelinkStyle2"
                  >
                    <li style={{ marginBottom: "25px" }}>
                      Website Development Bengaluru
                    </li>
                  </Link>
                  <Link
                    href="/corporate-video-production-company-in-bangalore"
                    className="removelinkStyle2"
                  >
                    <li style={{ marginBottom: "25px" }}>
                      Corporate Video Production
                    </li>
                  </Link>
                  <Link
                    href="/digital-marketing-agency-in-bangalore"
                    className="removelinkStyle2"
                  >
                    <li style={{ marginBottom: "25px" }}>Digital Marketing</li>
                  </Link>
                  <Link
                    href="/graphic-design-company-in-bangalore"
                    className="removelinkStyle2"
                  >
                    <li style={{ marginBottom: "25px" }}>Graphic Designing</li>
                  </Link>
                  <Link
                    href="/2d-animation-studio-in-bangalore"
                    className="removelinkStyle2"
                  >
                    <li style={{ marginBottom: "25px" }}>2D Animation</li>
                  </Link>
                  <Link
                    href="/b2b-marketing-agency-in-bangalore"
                    className="removelinkStyle2"
                  >
                    <li style={{ marginBottom: "25px" }}>B2B Marketing</li>
                  </Link>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

    </Container>

<section className={`${styles.bar} ${styles.themeTeal}`} aria-labelledby="popular-title">
  <div className={styles.inner}>
    <h2 id="popular-title" className={styles.title}>General Website Services</h2>

    <ul className={styles.list}>
      {data.map((row, i) => (
        <li className={styles.row} key={i}>
          <span className={styles.label}>{row.label}:</span>
          <div className={styles.links} aria-label={row.label}>
            {row.links.map((link, j) => (
              <a className={styles.link} href={link.href} key={j}>
                {link.text}
              </a>
            ))}
          </div>
        </li>
      ))}
    </ul>
  </div>
</section>

    </>
  );
}
