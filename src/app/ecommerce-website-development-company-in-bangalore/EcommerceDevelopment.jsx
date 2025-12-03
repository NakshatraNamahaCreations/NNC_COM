"use client";

import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const websitedevBannerImg1 = "/media/webdev/bannerImg.png";
const websitedevBannerImg2 = "/media/webdev/bannerImg2.png";
const UnderstandingBusinessGoals =
  "/media/webdev/Understanding Business Needs.png";
const MarketResearchStrategyDevelopment =
  "/media/webdev/Research&Strategy.png";
const Wireframe = "/media/webdev/Wireframing & Prototyping.png";
const UXUI = "/media/webdev/UI_UX Design.png";
const Websitedevelopment = "/media/webdev/Website Development.png";
const contentIntegration = "/media/webdev/Content Integration.png";
const TestingQualityCheck = "/media/webdev/Testing & Quality Check.png";
const DeploymentLaunch = "/media/webdev/Deployment & Launch.png";
const PostLaunchSupport = "/media/webdev/Post-Launch Support.png";
const StaticOnePageWebsiteIcon =
  "/media/webdev/Static One Page Website_Icon.png";
const MultipageWordPressWebsite =
  "/media/webdev/Multipage WordPress Website.png";
const ECommerceWebsite = "/media/webdev/E - Commerce Website.png";

// import bgservicesyellow from "/media/YellowPriceCard_DigitalMarketing.png";
const bgpink = "/media/webdev/group2.png";
const bgYellow = "/media/webdev/group1.png";
const bgblue = "/media/webdev/group3.png";
import IndustriesServedMobileApp from "@/components/IndustriesServedMobileApp";
import ClientImagesMobileApp from "@/components/websiteDev/ClientImagesMobileApp";

import { useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

import PlanBtn from "@/components/websiteDev/PlanBtn";

import ContactFrom from "@/components/ContactForm";
const testimonalImages = "/media/NNCWebsite_V3_Testimonials.png";
const testimonalImages1 = "/media/NNCWebsite_V3_Testimonials1.png";

import Breadcrumbs from "@/components/BreadCrumbs";
import InternalContactModal from "@/components/websiteDev/InternalContactModal";
import IconsModal from "@/components/IconsModal";
import WebsiteDevCards from "@/components/websiteDev/WebsiteDevCards";
const mostPoptag = "/media/webdev/mostPoptag.png";
import TestimonialsSlick from "@/components/websiteDev/TestimonialsSlick";

const service1 = "/media/webdev/E-Commerce Website Development.png";
const service2 = "/media/webdev/Custom Web Development.png";
const service3 = "/media/webdev/Landing Page Design.png";
const service4 = "/media/webdev/WordPress Development.png";
const service5 = "/media/webdev/Dynamic Website Development.png";
const service6 = "/media/webdev/CMS Website Development.png";
const service7 = "/media/webdev/Static One Page Website_Icon.png";
const service8 = "/media/webdev/Website Re-Designing.png";
import Script from "next/script";
import FAQs from "@/components/home/FAQs";
import KeywordsSection from "@/components/KeywordsSection";
import Link from "next/link";

// Testimonial Data
const testimonials = [
  {
    image: testimonalImages,
    name: "- Arjun Mehta",
    text: "Nakshatra Namaha Creations built a custom ERP system for our manufacturing business that streamlined our operations and reporting. The team ensured seamless integration with our existing tools, and their attention to detail was exceptional.",
  },
  {
    image: testimonalImages1,
    name: "- Sneha Reddy",
    text: "We needed a scalable SaaS platform for our startup, and they delivered beyond expectations. The software is secure, easy to use, and built with future growth in mind. Their expertise in software development truly stands out.",
  },
  {
    image: testimonalImages,
    name: "- Karan Malhotra",
    text: "Our business faced challenges with outdated systems. Nakshatra Namaha Creations modernized our software infrastructure and automated several processes, which saved us time and improved productivity significantly.",
  },
  {
    image: testimonalImages1,
    name: "- Divya Patel",
    text: "They developed a custom booking application for our hospitality business that works flawlessly on all devices. From UI design to backend development, the entire experience was professional and hassle-free.",
  },
];

const services = [
  {
    img: "/media/webdev/Custom Web Development.png",//service2
    title: "Custom Website Design for E-commerce",
   points: [
  "We help you stay ahead of competitors with our expert Ecommerce design services in Mysore.",
  "Our team creates attractive and engaging website designs that captivate your audience.",
  "We design platforms that leverage all features to deliver the best user experience.",
],

  },
  {
    img: "/media/CampaignExecutionManagement.png",//service4
    title: "Dedicated Development Teams",
    points: [
      "Our expert developers seamlessly integrate with your in-house team to drive collaboration.",
      "We bring deep technical expertise and hands-on project ownership to every task.",
      "Our focus is on delivering excellence with precision, reliability, and innovation.",
    ],
  },
  {
    img: "/media/iOSMobileAppDevelopment.png", //  service1
    title: "Mobile App Development",
    points: [
      "We develop high-performance mobile apps for Android, iOS, and hybrid platforms.",
      "Our designs feature seamless UI/UX for an engaging and intuitive user experience.",
      "We build apps with business-driven functionalities to achieve your growth goals.",
    ],
  },
  {
    img: "/media/webdev/Content Integration.png",  //service3
    title: "Cloud Development & Migration",
    points: [
      "We build and migrate applications to leading cloud platforms like AWS, Azure, and Google Cloud.  ",
      "Our solutions ensure scalability and flexibility to support evolving business needs.",
      "We focus on delivering cost-efficient cloud infrastructure for optimal performance.",
    ],
  },
  {
    img: "/media/webdev/E-Commerce Website Development.png",  //service7
    title: "Ecommerce Development",
    points: [
      "We deliver eCommerce solutions that create seamless and engaging customer experiences.",
      "Our platforms are designed to boost conversions and drive higher sales.",
      "We support business growth by optimizing performance across all digital channels.",
    ],
  },
  {
    img: "/media/webdev/Dynamic Website Development.png",  // service5
    title: "Web Application Development",
    points: [
      "We use modern frameworks like React, Angular, and Node.js to build advanced web applications.",
      "Our solutions are secure, responsive, and optimized for performance.",
      "We create feature-rich platforms designed to deliver seamless user experiences.",
    ],
  },
  {
    img: "/media/webdev/Testing & Quality Check.png", //service8
    title: "Software Testing & QA",
    points: [
      "Our QA experts conduct thorough testing to ensure software quality and reliability.",
      "We deliver secure, bug-free products optimized for performance.",
      "Our focus is on providing seamless user experiences through meticulous QA processes.",
    ],
  },
  {
    img: "/media/2DAnimation/Customized Design.png", //service6
    title: "DevOps & Continuous Integration",
    points: [
      "We streamline development with DevOps automation and efficient workflows.",
      "Our CI/CD pipelines enable faster, more consistent, and reliable software releases.",
      "We implement continuous monitoring to ensure stability and optimal performance.",
    ],
  },
];

const processvideo = [
  {
    img: UnderstandingBusinessGoals,
    title: "Requirement Analysis",
    points: [
      "We gather and define your project objectives, technical needs, and target outcomes.",
    ],
  },
  {
    img: MarketResearchStrategyDevelopment,
    title: "Resource Allocation",
    points: [
      "Our team of skilled developers, designers, and project managers is assigned based on your project’s needs.",
    ],
  },
  {
    img: Wireframe,
    title: "Planning & Design",
    points: [
      "We create detailed project roadmaps and UI/UX designs to ensure a clear development blueprint.",
    ],
  },
  {
    img: "media/MarketResearch&StrategyDevelopment.png",
    title: "Agile Development",
    points: [
      "Using Agile methodology, we build in sprints and keep you updated throughout, allowing continuous feedback and improvements.",
    ],
  },
  {
    img: Websitedevelopment,
    title: "Website Development",
    points: [
      "We develop a fully functional website using the latest technologies, ensuring the website is responsive and secure.",
    ],
  },
  {
    img: TestingQualityCheck,
    title: "Testing & QA",
    points: [
      "Each feature is rigorously tested to ensure functionality, security, and performance.",
    ],
  },
  {
    img: contentIntegration,   //TestingQualityCheck,
    title: "Deployment & Supportk",
    points: [
      "After successful deployment, we offer ongoing support and maintenance to keep your software running smoothly.",
    ],
  },
  {
    img: DeploymentLaunch,
    title: "Deployment & Launch",
    points: [
      "We deploy the website on our live server where users can access it from anywhere in the world.",
    ],
  },
  {
    img: PostLaunchSupport,
    title: "Post-Launch Support",
    points: [
      "We continue to support, uses, update, and maintain the website, so it runs at optimal performance status forever.",
    ],
  },
];

const faqs = [
  // FAQ List
  {
    question: "What software development services do you offer?",
    answer:
      "We provide custom software development, SaaS solutions, ERP and CRM systems, mobile app development, API integrations, cloud migration, and maintenance services.",
  },
  {
    question: "Do you build scalable and future-ready software?",
    answer:
      "Yes, our software solutions are designed to be scalable, secure, and easily adaptable as your business grows and your needs evolve.",
  },
  {
    question: "Can you modernize or upgrade existing software systems?",
    answer:
      "Absolutely! We specialize in software modernization, improving system performance, upgrading technology stacks, and adding new features while ensuring minimal downtime.",
  },
  {
    question: "What technologies do you use for software development?",
    answer:
      "We work with technologies like React, Angular, Vue, Node.js, Python, Java, .NET, and cloud platforms such as AWS, Azure, and Google Cloud to build robust solutions.",
  },
  {
    question: "How do you ensure software security?",
    answer:
      "We follow industry-standard security practices, including data encryption, secure authentication, regular vulnerability assessments, and secure coding standards.",
  },
  {
    question: "What is your approach to project delivery?",
    answer:
      "We follow an agile development process, ensuring timely updates, transparent communication, and delivery within agreed timelines without compromising quality.",
  },
];

export default function EcommerceDevelopment() {
  const [showPopup, setShowPopup] = useState(false);
  const [inView] = useInView({ triggerOnce: true, threshold: 0.2 });

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.nakshatranamahacreations.com/#org",
      "name": "Nakshatra Namaha Creations",
      "url": "https://www.nakshatranamahacreations.com/",
      "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png",
      "sameAs": [
        "https://www.facebook.com/Nakshatranamahacreations/",
        "https://www.instagram.com/nnc.digitalbengaluru/",
        "https://www.linkedin.com/company/nakshatra-namaha-creation/",
        "https://x.com/nncbengaluru"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9900566466",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Kannada"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th Stage 1st Block, Channasandra",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560061",
        "addressCountry": "IN"
      }
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://www.nakshatranamahacreations.com/ecommerce-website-development-company-in-bangalore#biz",
      "name": "Nakshatra Namaha Creations",
      "image": "https://www.nakshatranamahacreations.com/media/ecommerce/bannerImg.png",
      "url": "https://www.nakshatranamahacreations.com/ecommerce-website-development-company-in-bangalore",
      "telephone": "+91-9900566466",
      "email": "info@nakshatranamahacreations.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th Stage 1st Block, Channasandra",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560061",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.264056680993265,
        "longitude": 76.6444222231926
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:30",
          "closes": "19:00"
        }
      ],
      "priceRange": "₹₹",
      "paymentAccepted": "Cash, Credit Card, Online Payment",
      "sameAs": [
        "https://www.facebook.com/nakshatranamahacreations",
        "https://www.linkedin.com/company/nakshatra-namaha-creation/"
      ],
      "areaServed": "IN",
      "parentOrganization": { "@id": "https://www.nakshatranamahacreations.com/#org" }
    },

    {
      "@type": "Service",
      "@id": "https://www.nakshatranamahacreations.com/ecommerce-website-development-company-in-bangalore#service",
      "name": "Ecommerce Website Development Services",
      "provider": { "@id": "https://www.nakshatranamahacreations.com/#org" },
      "serviceType": [
        "Custom Ecommerce Website Development",
        "Shopify Development",
        "WooCommerce Development",
        "Magento Development",
        "Headless Ecommerce Solutions",
        "Payment Gateway Integration",
        "Ecommerce SEO & Optimization"
      ],
      "areaServed": "IN",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "INR"
        }
      }
    },

    /* --- Reviews (Ecommerce specific) --- */
    {
      "@type": "Review",
      "itemReviewed": { "@id": "https://www.nakshatranamahacreations.com/ecommerce-website-development-company-in-bangalore#service" },
      "author": { "@type": "Person", "name": "Megha Rao" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
      "reviewBody": "Nakshatra Namaha Creations developed our Shopify store with flawless payment integration and mobile responsiveness. Their expertise made our online launch seamless.",
      "datePublished": "2025-05-12"
    },
    {
      "@type": "Review",
      "itemReviewed": { "@id": "https://www.nakshatranamahacreations.com/ecommerce-website-development-company-in-bangalore#service" },
      "author": { "@type": "Person", "name": "Rahul Nair" },
      "reviewRating": { "@type": "Rating", "ratingValue": "4.9", "bestRating": "5", "worstRating": "1" },
      "reviewBody": "They created a WooCommerce store with fast checkout and optimized speed. Sales improved noticeably within weeks of launch.",
      "datePublished": "2025-04-22"
    },
    {
      "@type": "Review",
      "itemReviewed": { "@id": "https://www.nakshatranamahacreations.com/ecommerce-website-development-company-in-bangalore#service" },
      "author": { "@type": "Person", "name": "Pooja Singh" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
      "reviewBody": "They customized our Magento store to handle heavy traffic and automated inventory. Excellent technical expertise and support.",
      "datePublished": "2025-03-28"
    },
    {
      "@type": "Review",
      "itemReviewed": { "@id": "https://www.nakshatranamahacreations.com/ecommerce-website-development-company-in-bangalore#service" },
      "author": { "@type": "Person", "name": "Vikrant Kapoor" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
      "reviewBody": "Our new Ecommerce platform is visually appealing and performance-driven. Their integration of third-party tools helped us scale faster.",
      "datePublished": "2025-05-05"
    },

    /* --- FAQ (Ecommerce specific) --- */
    {
      "@type": "FAQPage",
      "@id": "https://www.nakshatranamahacreations.com/ecommerce-website-development-company-in-bangalore#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What Ecommerce development services do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer custom Ecommerce website development, Shopify and WooCommerce setup, Magento customization, headless Ecommerce, payment gateway integration, and ongoing maintenance."
          }
        },
        {
          "@type": "Question",
          "name": "Can you build a mobile-friendly Ecommerce website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we design mobile-responsive Ecommerce stores that deliver a seamless experience across devices to boost conversions and engagement."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide SEO services for Ecommerce sites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We implement on-page SEO best practices and optimize site speed, structure, and schema to improve search engine rankings."
          }
        },
        {
          "@type": "Question",
          "name": "Can you integrate multiple payment gateways?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we integrate secure gateways like Razorpay, Stripe, PayPal, and PayU for smooth and secure transactions."
          }
        },
        {
          "@type": "Question",
          "name": "Do you support large product catalogs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We build scalable solutions that handle large inventories and high traffic, ensuring smooth performance and easy management."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with my Ecommerce project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact us via email, phone, or website. Our team will consult with you, understand your requirements, and propose a detailed plan."
          }
        }
      ]
    },

    /* --- Breadcrumbs --- */
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.nakshatranamahacreations.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Ecommerce Website Development",
          "item": "https://www.nakshatranamahacreations.com/ecommerce-website-development-company-in-bangalore"
        }
      ]
    }
  ]
};



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    {
      name: "Software Development Company in Bangalore",
      link: "/software-development-company-in-bangalore",
    },
  ];

  // Buttons list
  const buttons = [
    {
      title: "Graphic Designer in Bangalore",
      link: "/graphic-design-company-in-bangalore",
    },
    {
      title: "Mobile App Developers in Bangalore",
      link: "/mobile-app-development-company-in-bangalore",
    },
    {
      title: "Digital Marketing Agency in Bangalore",
      link: "/digital-marketing-agency-in-bangalore",
    },
    {
      title: "Corporate Video Production in Bangalore",
      link: "/corporate-video-production-company-in-bangalore",
    },
    {
      title: "2D Animation Service in Bangalore",
      link: "/2d-animation-studio-in-bangalore",
    },
    {
      title: "B2B Marketing Service in Bangalore",
      link: "/b2b-marketing-agency-in-bangalore",
    },
     {
      title: "Website Development Service in Bangalore",
      link: "/website-development-company-in-bangalore",
    },
  ];

  // Sequential animation for buttons using useTrail
  const buttonTrail = useTrail(buttons.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.8)",
    from: { opacity: 0, transform: "scale(0.8)" },
    config: { tension: 200, friction: 12 },
    delay: 200,
  });

  return (
    <>

        {/* Schema Markup */}
        <Script type="application/ld+json"
         id="nnc-ecommerce-schema">
          {JSON.stringify(schemaMarkup)}
        </Script>



      <div>
        <Breadcrumbs paths={breadcrumbPaths} />

        <Container style={{ marginBottom: "5%", marginTop: "3%" }}>
          <Row className="d-flex justify-content-between align-items-center gap-5">
            <Col sm={6}>
              <div style={{ marginTop: "2%", marginBottom: "5%" }}>
                <h2 style={{ fontWeight: "600" }}>
                 ECOMMERCE WEBSITE DEVELOPMENT COMPANY{" "}
                </h2>
                <h6>
                 Effective Ecommerce website development empowers businesses with secure, scalable, and user-friendly online stores designed to boost sales and customer engagement.
                </h6>
              </div>
              <img
                src="/media/ecommercewebsite.jpg"
                alt="mobileapp-icon"
                className="img-fluid"
                style={{ width: "70%", height: "auto", objectFit: "cover" }}
              />
            </Col>
            <Col sm={4}>
              <ContactFrom />
            </Col>
          </Row>
        </Container>

        {/* COMPANY IN BANGALORE */}
        <div style={{ paddingTop: "5%" }}>
          <Container>
            <h1
              style={{
                fontWeight: "600",
                letterSpacing: "1px",
                marginBottom: "5%",
                textTransform: "uppercase",
              }}
            >
             Best Ecommerce Website Development Company In Bangalore
            </h1>
            <Row className="d-flex justify-content-between align-items-center">
              <Col sm={8}>
                <p
                  style={{
                    lineHeight: "1.7",
                    fontSize: "16px",
                    letterSpacing: "1px",
                    fontWeight: "400",
                  }}
                >
                  Nakshatra Namaha Creations believes in delivering clean and efficiently functioning e-commerce solutions to our clients worldwide.  We create mobile responsive online store and apps which are compatible across all the platforms including iOS and Android platforms. Our highly skilled team of experienced ecommerce developers who work closely with the clients on their requirements to provide scalable and robust online stores for both web and mobile. <br />
            
            We offer comprehensive custom ecommerce services to various SMEs and large-scale businesses across the globe which help them offer their products and services vividly on the internet and outshine in the digital marketplace. We have substantial experience in every aspect of E-Commerce development which gives you a significant off-the-shelf solution to your Ecommerce requirements. From simple Ecommerce website development to complex B2B, B2C Ecommerce portal development, shopping cart development and payment gateway integration, we have competency to cater to all your Ecommerce needs.
            
                    </p>
              </Col>
              <Col sm={4}>
                <img
                  src={websitedevBannerImg2}
                  alt="mobile-icon"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </Col>
            </Row>
            <h2
              style={{
                fontWeight: "600",
                letterSpacing: "1px",
                marginTop: "10%",
                marginBottom: "3%",
                textTransform: "uppercase",
              }}
            >
              Our Services in Ecommerce Website Development Company in Bangalore
            </h2>
            <p
              style={{
                lineHeight: "1.7",
                fontSize: "16px",
                letterSpacing: "1px",

                fontWeight: "400",
              }}
            >
             As one of the top e-commerce website development companies in Bengaluru, we know how to create the most secure and featured packed e-commerce platform. We spend a good amount of time optimizing the user interface and the overall data flow on each page. Users approach the code set through the user interface and we believe that a great interface needs minimal training and is just intuitive. Our team of UI (User Interface) experts do design, story boarding and testing to an extend where we ourselves would love to use your app every day.
            </p>

            {/*  Our Services on the Mobile App Development Company in Bangalore */}

            <Container style={{ marginTop: "10%" }}>
              <Row>
                {services.map((service, index) => (
                  <Col
                    key={index}
                    xs={12}
                    sm={6}
                    md={4}
                    className="d-flex justify-content-left"
                  >
                    <div
                      style={{
                        backgroundColor: "white",
                        boxShadow: "1px 1px 5px lightgrey",
                        padding: "20px",
                        borderRadius: "10px",
                        width: "100%",
                        minHeight: "320px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "left",
                        marginBottom: "20px",
                      }}
                    >
                      <img
                        src={service.img}
                        alt={service.title}
                        style={{
                          width: "30%",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />
                      <h6
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginTop: "5%",
                        }}
                      >
                        {service.title}
                      </h6>
                      <ul
                        style={{
                          fontSize: "12px",
                          lineHeight: "1.7",
                          textAlign: "left",
                          paddingLeft: "15px",
                        }}
                      >
                        {service.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </Container>
        </div>

        {/* Our Video Production Process: */}
        <div style={{ margin: "5% 10% 0% 10%" }}>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "3%",
              fontSize: "30px",
              maxWidth: "700px",
              marginInline: "auto",
            }}
          >
            Our Software Development Process: Innovative Software Solutions
          </h2>

          <Row>
            {processvideo.map((processvideo, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                md={4}
                className="d-flex justify-content-left"
              >
                <div
                  style={{
                    padding: "20px",
                    width: "100%",
                    minHeight: "320px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "left",
                    // marginBottom: "20px",
                  }}
                >
                  <img
                    src={processvideo.img}
                    alt={processvideo.title}
                    style={{
                      width: "30%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                  <h6
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginTop: "5%",
                    }}
                  >
                    {processvideo.title}
                  </h6>
                  <div
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.7",
                      textAlign: "left",
                      paddingLeft: "15px",
                    }}
                  >
                    {processvideo.points.map((point, i) => (
                      <p key={i}>{point}</p>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div style={{ marginBottom: "5%" }}>
          <WebsiteDevCards />
        </div>

        <Container>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            What can you expect from Nakshatra Namaha Creations?
          </h2>
          <p
            style={{
              lineHeight: "1.7",
              fontSize: "16px",
              letterSpacing: "1px",
              textAlign: "center",
              fontWeight: "400",
              marginBottom: "5%",
            }}
          >
            At Nakshatra Namaha Creations, we deliver professional software development services with dependable support and complete transparency at every stage of the project. As a leading Software Development Company in Bangalore, we focus on building high-quality, secure, and scalable software solutions tailored to your business needs. Our team ensures robust functionality, seamless performance, and user-friendly interfaces that enhance productivity and strengthen your brand’s digital presence.
          </p>
          <div>
            <Row>
              <Col sm={4}>
                <div style={{ display: "flex" }}>
                  <h2
                    style={{
                      marginRight: "10px",
                      fontWeight: "600",
                      color: "#006EA6",
                    }}
                  >
                    01
                  </h2>

                  <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                    <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                      Custom and Scalable Solutions
                    </p>
                    <p>
                      We develop tailored software solutions that are scalable, secure, and built to support your business growth and evolving needs.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <div style={{ display: "flex" }}>
                  <h2
                    style={{
                      marginRight: "10px",
                      fontWeight: "600",
                      color: "#006EA6",
                    }}
                  >
                    02
                  </h2>
                  <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                    <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                      Cross-Platform Compatibility
                    </p>
                    <p>
                     Our software is designed to run seamlessly across multiple platforms and devices, ensuring consistent performance everywhere.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <div style={{ display: "flex" }}>
                  <h2
                    style={{
                      marginRight: "10px",
                      fontWeight: "600",
                      color: "#006EA6",
                    }}
                  >
                    03
                  </h2>
                  <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                    <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                       Optimized Architecture
                    </p>
                    <p>
                      We follow best practices in software engineering to create efficient, reliable, and future-proof architectures.
                    </p>
                  </div>
                </div>
              </Col>

              <div className="d-lg-flex justify-content-center my-lg-5 gap-4">
                <Col sm={4}>
                  <div style={{ display: "flex" }}>
                    <h2
                      style={{
                        marginRight: "10px",
                        fontWeight: "600",
                        color: "#006EA6",
                      }}
                    >
                      04
                    </h2>
                    <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                      <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                        {" "}
                       High Performance and Security
                      </p>
                      <p>
                       Our solutions are optimized for speed and include advanced security measures to safeguard your data and operations.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col sm={4}>
                  <div style={{ display: "flex" }}>
                    <h2
                      style={{
                        marginRight: "10px",
                        fontWeight: "600",
                        color: "#006EA6",
                      }}
                    >
                      05
                    </h2>
                    <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                      <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                        Timely Project Delivery
                      </p>
                      <p>
                        With a well-defined development process, we deliver projects on schedule without compromising on quality.
                      </p>
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
          </div>
        </Container>

        {/* PICK YOUR PLAN */}
        <div
          style={{
            backgroundColor: "#F6F6F6",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <Container>
            <h2
              style={{
                fontWeight: "600",
                // marginBottom: "1.5%",
                fontSize: "26px",
                margin: 0,
              }}
            >
              PICK YOUR PLAN
            </h2>

            <div
              className="d-flex justify-content-between align-items-center "
              style={{ gap: "20px", flexDirection: "row", flexWrap: "wrap" }}
            >
              {/* First Plan Section */}
              <div
                style={{
                  flex: "1",
                  maxWidth: "400px",
                  position: "relative",
                  minWidth: "250px",
                  marginBottom: "20px",
                }}
                className="plan1"
              >
                <img
                  src={bgYellow}
                  alt="bg-blue"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <div style={{ position: "absolute", top: "15%", left: "5%" }}>
                  <img
                    src={StaticOnePageWebsiteIcon}
                    alt="building-icon"
                    style={{
                      width: "35%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "52%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  <h3 style={{ fontSize: "20px", color: "white", margin: 0 }}>
                    Website Development
                  </h3>{" "}
                  {/* Single line text */}
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "65%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "16px" }}>Starting from</p>
                  <h2 style={{ fontSize: "30px", fontWeight: "600" }}>
                    ₹14,499
                  </h2>{" "}
                  {/* Reduced font size */}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "5%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <PlanBtn setShowPopup={setShowPopup} />
                  {showPopup && (
                    <InternalContactModal
                      showPopup={showPopup}
                      setShowPopup={setShowPopup}
                    />
                  )}
                </div>
              </div>

              {/* Second Plan Section */}
              <div
                style={{
                  flex: "1",
                  maxWidth: "400px",
                  position: "relative",
                  minWidth: "250px",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={bgblue}
                  alt="bg-yellow"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <img
                  src={mostPoptag}
                  style={{
                    position: "absolute",
                    top: "1%",
                    right: "-6%",
                    width: "36%",
                  }}
                />
                <div style={{ position: "absolute", top: "16%", left: "5%" }}>
                  <img
                    src="/media/MobileAppDevelopment_Icon.png"
                    alt="building-icon"
                    style={{
                      width: "35%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "55%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  <h3 style={{ fontSize: "20px", color: "white", margin: 0 }}>
                    Mobile App Development
                  </h3>{" "}
                  {/* Single line text */}
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "68%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "16px" }}>Starting from</p>
                  <h2 style={{ fontSize: "30px", fontWeight: "600" }}>
                    ₹1,49,000
                  </h2>{" "}
                  {/* Reduced font size */}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "5%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <PlanBtn setShowPopup={setShowPopup} />
                  {showPopup && (
                    <InternalContactModal
                      showPopup={showPopup}
                      setShowPopup={setShowPopup}
                    />
                  )}
                </div>
              </div>

              {/* Third Plan Section */}
              <div
                style={{
                  flex: "1",
                  maxWidth: "400px",
                  position: "relative",
                  minWidth: "250px",
                  marginBottom: "20px",
                }}
                className="plan3"
              >
                <img
                  src={bgpink}
                  alt="bg-yellow"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <div style={{ position: "absolute", top: "15%", left: "5%" }}>
                  <img
                    src="/media/CorporateVideoProductionIcon.png"
                    alt="building-icon"
                    style={{
                      width: "35%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "52%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  <h3 style={{ fontSize: "20px", color: "white", margin: 0 }}>
                    Corporate Video Production
                  </h3>{" "}
                  {/* Single line text */}
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "65%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "16px" }}>Starting from</p>
                  <h2 style={{ fontSize: "30px", fontWeight: "600" }}>
                    ₹65,000
                  </h2>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "5%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <PlanBtn setShowPopup={setShowPopup} />
                  {showPopup && (
                    <InternalContactModal
                      showPopup={showPopup}
                      setShowPopup={setShowPopup}
                    />
                  )}
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Industries Mobile App Development */}

        <Container style={{ margin: "10% auto"}}>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            Industries We Serve as Website Developers in Bangalore
          </h2>
          <p
            style={{
              lineHeight: "1.7",
              fontSize: "16px",
              letterSpacing: "1px",
              textAlign: "center",
              fontWeight: "400",
              marginBottom: "5%",
            }}
          >
            We provide website development solutions to businesses in several
            industries to ensure high quality design, functionality and user
            experience. As skilled website developers in Bangalore we build
            websites that meet industry standards while achieving business
            objectives and brand visibility.
          </p>

          {/* <IndustriesServed /> */}
          <IndustriesServedMobileApp />
        </Container>

        <Container style={{ margin: "10% auto" }}>
          <h2
            style={{
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            WE WORK WITH REMARKABLE BRANDS
          </h2>

          <ClientImagesMobileApp />
        </Container>

        {/* TESTIMONIALS */}
        <Container style={{ margin: "7% auto" }}>
          <TestimonialsSlick testimonials={testimonials} />
        </Container>

        <div
          style={{
            backgroundColor: "#F6F6F6",
            padding: "25px",
            textAlign: "center",
            margin: "5% 0%",
            // height: "40vh"
          }}
        >
          <h2
            style={{
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            {" "}
            Our Other Related Services
          </h2>
          <div className="d-flex flex-wrap justify-content-center gap-3 gap-space gapreduce">
            {buttons.map((button, index) => (
              <div key={index}>
                <Link href={button.link}>
                <Button
                  variant="outline-dark"
                  className="rounded-pill px-3 py-2"
                  style={{ fontSize: "14px" }}
                >
                    {button.title}
                </Button>
                    </Link>
              </div>
            ))}
          </div>
        </div>

        <FAQs faqs={faqs} />
        <KeywordsSection />

        <div style={{ marginTop: "10%" }}>
          <Container>
            <IconsModal />
          </Container>
        </div>
      </div>
    </>
  );
}
