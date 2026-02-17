
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaYoutube, FaInstagram } from "react-icons/fa";
import Our_Service from "@/components/home/Our_Service";
import Head from "next/head";
import { Typewriter } from "react-simple-typewriter";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { FaWhatsapp, FaStar, FaGoogle } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  FaGraduationCap,
  FaFilm,
  FaCar,
  FaUniversity,
  FaDumbbell,
  FaHeartbeat,
  FaHotel,
  FaBuilding,
  FaTruck,
  FaUserTie,
} from "react-icons/fa";
import { FaPlus, FaTimes } from "react-icons/fa";

import { FaUserClock } from "react-icons/fa";
import {
  FaRegHandshake,
  FaChartLine,
  FaHandshake,
  FaUsers,
  FaSearch,
  FaRocket,
} from "react-icons/fa";

import Slider from "react-slick";
import Link from "next/link";

import { IoIosHeartEmpty } from "react-icons/io";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";
import axios from "axios";
import Header from "@/components/Header";
import LandingFooter from "@/components/LandingFooter";
import HeroContactForm from "../app-developers-in-mumbai/HeroContactForm";
// ✅ Brands
const brands = [
  { name: "Brigade", src: "/logo1.webp" },
  { name: "Playboy", src: "/logo2.webp" },
  { name: "Baggit", src: "/logo3.webp" },
  { name: "Sharp", src: "/logo5.webp" },
  { name: "AUE", src: "/logo6.webp" },
  { name: "AUE", src: "/logo7.webp" },
  { name: "AUE", src: "/logo8.webp" },
];

// ✅ Industries
// ✅ Industries with Bootstrap colors
const industries = [
  { name: "Service Industry", icon: <FaUserTie />, color: "bg-danger" }, // red
  {
    name: "Education Industry",
    icon: <FaGraduationCap />,
    color: "bg-primary",
  }, // blue
  { name: "Entertainment", icon: <FaFilm />, color: "bg-secondary" }, // neutral/gray
  { name: "Automobile", icon: <FaCar />, color: "bg-warning" }, // yellow/orange
  { name: "Finance", icon: <FaUniversity />, color: "bg-success" }, // green
  { name: "Fitness", icon: <FaDumbbell />, color: "bg-info" }, // cyan/light blue
  { name: "Health", icon: <FaHeartbeat />, color: "bg-success" }, // green (healthy)
  { name: "Hospitality", icon: <FaHotel />, color: "bg-warning" }, // warm yellow
  { name: "Real Estate", icon: <FaBuilding />, color: "bg-dark" }, // dark/serious
  { name: "Logistics", icon: <FaTruck />, color: "bg-secondary" }, // neutral
];

const serviceOptions = [
  "Static Website Development",
  "Dynamic Website Development",
  "Ecommerce Website Development",
  "React JS Website Development",
  "Next JS Website Development",
  "Custom Website Development",
];
const clients = [
  { name: "Brigade", src: "/logo1.webp" },
  { name: "Sharp", src: "/logo2.webp" },
  { name: "Baggit", src: "/logo3.webp" },
  { name: "Playboy", src: "/logo4.webp" },
  { name: "My Flower Gift", src: "/logo5.webp" },
  { name: "Magical Nest", src: "/logo6.webp" },
  { name: "Kids Castle", src: "/logo7.webp" },
  { name: "Aanvii Hearing", src: "/logo8.webp" },

  { name: "Kanva Group", src: "/logo10.png" },
  { name: "Street9", src: "/logo11.png" },
  { name: "Formonix", src: "/logo12.png" },
  { name: "NeoLacta", src: "/logo13.png" },
  { name: "Agiomix", src: "/logo14.png" },
  { name: "Ethnix", src: "/logo15.png" },
  { name: "Abersoft", src: "/logo16.png" },
  { name: "ISME", src: "/logo17.png" },
  { name: "AUE", src: "/logo18.png" },
  { name: "RaceEl Technologies", src: "/logo19.png" },
  { name: "VStudioz", src: "/logo20.png" },
  { name: "Pelorus", src: "/logo21.png" },
  { name: "360 Frames", src: "/logo22.png" },
  { name: "Fai Caf", src: "/logo23.png" },
  { name: "Fai Caf", src: "/logo24.png" },
  { name: "Fai Caf", src: "/logo25.png" },
  { name: "Fai Caf", src: "/logo26.webp" },
  { name: "Fai Caf", src: "/logo27.png" },
  { name: "Fai Caf", src: "/logo28.png" },
  { name: "Fai Caf", src: "/logo35.png" },
  { name: "Fai Caf", src: "/logo30.png" },
  { name: "Fai Caf", src: "/logo28.png" },
  { name: "Fai Caf", src: "/logo31.png" },
  { name: "Fai Caf", src: "/logo32.png" },
  { name: "Fai Caf", src: "/logo33.png" },
  { name: "Fai Caf", src: "/logo34.webp" },
];

// ✅ Testimonials
const testimonials = [
  {
    name: "Chandu durga prasad Katta",
    review:
      "Our sincere thanks go to the NNC team for their excellent understanding and development of our application...",
  },
  {
    name: "Ravi Kiran Kambhampati",
    review:
      "The best e-commerce website design company in Mysore. We had the pleasure of working with NNC – one of the best...",
  },
  {
    name: "Ganesh Bellamkonda",
    review:
      "Excellent website design services and a wonderful experience. I would consider them to be the best web design...",
  },
  {
    name: "Santhu Obbalareddy",
    review:
      "We worked with the best web design company in Mysore. The quality and design of our website were very important...",
  },
  {
    name: "Mustala Siddhartha",
    review:
      "It was our pleasure to work with a premium website design company in Mysore that developed our e-commerce...",
  },
  {
    name: "Laxama Dharmireddi",
    review:
      "The team is very supportive and cooperative, and they provide good professional website design services...",
  },
  {
    name: "Prasad anakapalli",
    review:
      "The professional web designers in Mysore and NNC met all our website design requirements, more than we expected...",
  },
  {
    name: "Jagan Koduru",
    review:
      "This is the right decision we made to choose NNC as our web designer. We trust your services completely...",
  },
];

// ✅ FAQs
const faqs = [
  {
    question:
      "What services does your Website Development Company provide?",
    answer:
      "We offer static and dynamic website development, e-commerce solutions, React/Next.js development, and custom web applications along with ongoing support.",
  },
  {
    question: "Do you build mobile-friendly websites?",
    answer:
      "Yes, all our websites are fully responsive and optimized for mobile, tablet, and desktop to ensure the best user experience across devices.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely! We can revamp your old website with modern design, improved performance, and SEO-friendly structure while retaining important content.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer:
      "Yes, we follow SEO best practices like optimized coding, fast load times, and mobile compatibility to help your website rank better on search engines.",
  },
  {
    question: "Do you provide hosting and domain services?",
    answer:
      "We guide clients in choosing the right hosting and domain providers. We can also help set them up as part of our end-to-end service.",
  },
  {
    question: "Do you offer custom website development?",
    answer:
      "Yes, we provide fully customized websites built specifically around your business goals and industry requirements.",
  },
  {
    question: "Do you provide website maintenance and support?",
    answer:
      "Yes, we offer ongoing support for updates, troubleshooting, and improvements to keep your website secure and high-performing.",
  },
  {
    question: "Do you provide content writing for websites?",
    answer:
      "We can assist with content creation, or work with your team to ensure your website has engaging, SEO-friendly content.",
  },
];
const services = [
  {
    title: "User-Friendly Design",
    description:
      "We create websites with intuitive navigation and engaging layouts that make it easy for visitors to explore. A seamless user experience keeps your audience connected. Our designs are crafted to convert visitors into loyal customers.",
    icon: <FaRegHandshake className="text-4xl text-gray-700" />,
  },
  {
    title: "High Performance",
    description:
      "Our websites are optimized for speed, responsiveness, and reliability across all devices. Fast-loading pages enhance user satisfaction and reduce bounce rates. With advanced coding practices, we ensure top-notch performance every time.",
    icon: <FaChartLine className="text-4xl text-gray-700" />,
  },
  {
    title: "End-to-End Expertise",
    description:
      "From strategy and design to development and deployment, we manage every stage of your website journey. Our full-cycle expertise ensures consistency and quality. You get a complete solution without the hassle of juggling multiple vendors.",
    icon: <FaHandshake className="text-4xl text-gray-700" />,
  },
  {
    title: " Scalable and Secure",
    description:
      "We build websites that grow with your business while ensuring strong security at every layer. Scalable architecture supports increasing traffic and features. Advanced security measures protect your data and customer trust.",
    icon: <FaUsers className="text-4xl text-gray-700" />,
  },
  {
    title: "Proven Track Records",
    description:
      "Our portfolio showcases successful projects across industries with measurable results. Clients trust us for our reliability, innovation, and delivery excellence. Each project reflects our commitment to driving business growth.",
    icon: <FaSearch className="text-4xl text-gray-700" />,
  },
  {
    title: "Ongoing Support",
    description:
      " We don’t just deliver a website, we stay with you to keep it running smoothly. Our dedicated support includes updates, troubleshooting, and enhancements. With continuous assistance, your website remains secure and future-ready.",
    icon: <FaRocket className="text-4xl text-gray-700" />,
  },
];
const portfolio = [
  { img: "/serv1.webp", title: "Project 1" },
  { img: "/serv2.webp", title: "Project 2" },
  { img: "/serv3.webp", title: "Project 3" },
];

const ourworkData = [
  {
    ui_uxdesign: "/media/ourwork/vijayhome.webp",
    logo: "/media/NNCWebsite_Works_MobileApp_PNG_VijayHomeLogo.png",
    title: "Vijaya Home Services",
    description:
      "This was created spcifically keeping the client’s requirments. We stood upto their expectations.",
    link: "https://play.google.com/store/apps/details?id=com.vhs1&pcampaignid=web_share",
  },
  {
    ui_uxdesign: "/media/ourwork/puranInterior.webp",
    logo: "/media/NNCWebsite_Works_PNG_Puranlogo.png",
    title: "Puran Interiors",
    description:
      "We have implemented our full creativity for the website of this Interior design company.",
    link: "https://puraninteriors.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/cdn.webp",
    logo: "/media/NNCWebsite_Works_MobileApp_PNG-06.png",
    title: "CND Play",
    description:
      "CND PLAY is an emerging streaming platform dedicated to providing a vast library of movies to audiences worldwide.",
    link: "https://play.google.com/store/apps/details?id=com.clockndail.clockndail&hl=en_IN",
  },
  {
    ui_uxdesign: "/media/ourwork/aadhya.webp",
    logo: "/media/NNCAadiyalogo.png",
    title: "Aadhya Instruments",
    description:
      "We have designed a simple and minimalist website for this project.",
    link: "https://aadhyainstruments.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/vijayhomeweb.webp",
    logo: "/media/NNCVijayHomeServicesLogo.png",
    title: "Vijay Home Services",
    description:
      "We have implemented our full creativity for the website of this Interior design company.",
    link: "https://www.vijayhomeservices.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/proleverage.webp",

    logo: "/media/NNCWebsite_Works_MobileApp_PNG_Proleveragelogo.png",
    title: "Pro Leverage",
    description:
      "This was created spcifically keeping the client’s requirments. We stood upto their expectations.",
    link: "https://play.google.com/store/apps/details?id=com.ecom_gyan.pro_leverage&pcampaignid=web_share",
  },
  {
    ui_uxdesign: "/media/ourwork/sarang.webp",
    logo: "/media/NNCSarangCreationsLogo.png",
    title: "Sarang Creations",
    description:
      "We have implemented our full creativity for the website of this Interior design company.",
    link: "https://sarangcreations.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/rrPrecision.webp",
    logo: "/media/NNCPrecisionLogo.png",
    title: "RR Precision",
    description:
      "We have implemented our full creativity for the website of this Interior design company.",
    link: "https://rr-precision.com/",
  },

  {
    ui_uxdesign: "/media/ourwork/nesra.webp",
    logo: "/media/NesaraAyurvedaLogo.png",
    title: "Nesara Ayurveda",
    description:
      "We have implemented our full creativity for the website of this Interior design company.",
    link: "https://nesaraayurveda.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/mmd.webp",
    logo: "/media/Mydocumentslogo.png",
    title: "Make my documents",
    description:
      "We have implemented our full creativity for the website of this Interior design company.",
    link: "https://www.makemydocuments.com/",
  },
];

const cards = [
  {
    title: "Static Website Development",
    description:
      "Our static website solutions are designed to be fast, lightweight, and budget-friendly, making them ideal for startups and small businesses.",
    image: "/static.png",
    alt: "Static",
  },
  {
    title: "Dynamic Website Development",
    description:
      "Dynamic websites offer flexibility, interactivity, and easy content management, allowing updates without technical expertise.",
    image: "/Dynamic.png",
    alt: "Dynamic",
  },
  {
    title: "Ecommerce Website Development",
    description:
      "We build secure, scalable ecommerce platforms with smooth checkouts and integrated payment gateways for maximum conversion.",
    image: "/Ecommerce.png",
    alt: "Ecommerce",
  },
  {
    title: "React JS Website Development",
    description:
      "We deliver highly interactive React.js websites that are fast, component-based, and optimized for performance.",
    image: "/React.png",
    alt: "React",
  },
  {
    title: "Next JS Website Development",
    description:
      "Next.js websites are high-performance with server-side rendering and better SEO — great for fast-loading apps.",
    image: "/Next.png",
    alt: "Next.js",
  },
  {
    title: "Custom Website Development",
    description:
      "We offer tailor-made solutions including APIs, industry-specific features, and completely custom designs.",
    image: "/Custom.png",
    alt: "Custom",
  },
];

function getBootstrapColor(colorClass) {
  const colors = {
    "bg-primary": "#0d6efd",
    "bg-secondary": "#6c757d",
    "bg-success": "#198754",
    "bg-danger": "#dc3545",
    "bg-warning": "#ffc107",
    "bg-info": "#0dcaf0",
    "bg-light": "#f8f9fa",
    "bg-dark": "#212529",
    "bg-body": "#ffffff",
  };

  return colors[colorClass] || "#0d6efd"; // fallback to primary
}
// Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-[-10px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-black/80 rounded-full w-10 h-10 flex items-center justify-center"
  >
    <FaChevronRight className="text-white" />
  </div>
);

// Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-[-10px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-black/80 rounded-full w-10 h-10 flex items-center justify-center"
  >
    <FaChevronLeft className="text-white" />
  </div>
);

const images = ["/serv1.webp", "/serv2.webp", "/serv3.webp"];

//Meta description

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const router = useRouter();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // Handle change
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const { name, email, phone, service, message } = formData;
    const errors = {};

    // Validation
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    if (!name || !nameRegex.test(name.trim()))
      errors.name = "Enter a valid name (min 3 letters)";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) errors.email = "Enter a valid email";
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) errors.phone = "Enter a valid 10-digit phone";
    if (!service) errors.service = "Please select a service";
    if (!message.trim()) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);
    setMsg("");

    try {
      const res = await axios.post(
        "https://api.nakshatranamahacreations.in/api/enquiries",
        {
          name,
          email,
          phoneNo: phone,
          service,
          message,
          referenceFrom: "landingpage",
          city: "Bangalore",
        }
      );

      if (res.status === 200 || res.status === 201) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setFormErrors({});
        setMsg("✅ Form submitted successfully!");
        setTimeout(() => router.push("/thankyou"), 800);
      } else {
        setMsg("⚠️ Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      setMsg("❌ Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
    
      <Header />
      {/* ================= HERO SECTION ================= */}
      <section
        style={{ position: "relative", width: "100%", height: "110vh" }}
        className="d-none d-lg-flex align-items-center justify-content-end"
      >
        {/* Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: -1,
            overflow: "hidden",
          }}
        >
          <Image
            src="/bann.jpg"
            alt="Hero Background"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              // subtle overlay
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="text-dark w-75 px-4   ">
          <Row className=" justify-content-end">
            {/* Left Text */}
            <Col lg={7} md={12} className="text-center text-m-start mt-5 pt-3">
              <h4 className="fw-bold display-6 text-dark">
                We Build Your{" "}
                <span className="text-primary">
                  <Typewriter
                    words={["Creativity", "Confidence", "Community", "Company"]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={70}
                    delaySpeed={1500}
                  />
                </span>
              </h4>
              <h2 className="fw-bold display-6 text-dark mt-3">
                Presence in Digital World.
              </h2>
            </Col>

            
            <Col lg={4} md={10}>
              {/* <Card className="shadow-lg p-4">
                <h4 className="fw-bold mb-3 text-center">Get in Touch</h4>
                <Form onSubmit={handleSubmit}>
                 
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      isInvalid={!!formErrors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formErrors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                 
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      isInvalid={!!formErrors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formErrors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      isInvalid={!!formErrors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formErrors.phone}
                    </Form.Control.Feedback>
                  </Form.Group>

                  
                  <Form.Group className="mb-3">
                    <Form.Select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      isInvalid={!!formErrors.service}
                    >
                      <option value="">Select Service</option>
                      {serviceOptions.map((s, i) => (
                        <option key={i} value={s}>
                          {s}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {formErrors.service}
                    </Form.Control.Feedback>
                  </Form.Group>

                 
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      isInvalid={!!formErrors.message}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formErrors.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                </Form>

                {msg && (
                  <p className="mt-3 text-center text-success fw-semibold">
                    {msg}
                  </p>
                )}
              </Card> */}
              <HeroContactForm/>
            </Col>
          </Row>
        </div>
      </section>

      {/* ===== Mobile Section (below lg) ===== */}
      <section
        className="d-flex d-lg-none flex-column w-100 mt-5"
        style={{ position: "relative" }}
      >
        {/* Banner with background + text */}
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: "40vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#000000ff",
          }}
        >
          {/* Background */}
          <Image
            src="/bann.jpg"
            alt="Hero Background"
            fill
            priority
            style={{
              objectFit: "contain",
              objectPosition: "center",
              zIndex: -1,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              // background: "rgba(0,0,0,0.4)", // overlay for readability
              zIndex: -1,
            }}
          ></div>
        </div>

        {/* Text */}
        <div className="px-3">
          <h4
            className="fw-bold "
            style={{ fontSize: "clamp(20px, 5vw, 28px)" }}
          >
            We Build Your{" "}
            <span className="text-primary">
              <Typewriter
                words={["Creativity", "Confidence", "Community", "Company"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={1500}
              />
            </span>
          </h4>
          <h2
            className="fw-bold"
            style={{ fontSize: "clamp(18px, 4.8vw, 24px)" }}
          >
            Presence in Digital World.
          </h2>
        </div>

        {/* Form below banner */}
        <div className="container my-5">
          <Card className="shadow-lg p-4">
            <h4 className="fw-bold mb-3 text-center">Get in Touch</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  isInvalid={!!formErrors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  isInvalid={!!formErrors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  isInvalid={!!formErrors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.phone}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  isInvalid={!!formErrors.service}
                >
                  <option value="">Select Service</option>
                  {serviceOptions.map((s, i) => (
                    <option key={i} value={s}>
                      {s}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {formErrors.service}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  isInvalid={!!formErrors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                type="submit"
                variant="primary"
                className="w-100"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </Form>

            {msg && (
              <p className="mt-3 text-center text-success fw-semibold">{msg}</p>
            )}
          </Card>
        </div>
      </section>

      {/* ================= TRUSTED BY ================= */}
      <section className="bg-white py-5">
        <Container className="text-center">
          {/* Title */}
          <h4 className="fw-bold text-primary position-relative d-inline-block mb-4">
            TRUSTED BY
            <span
              style={{
                position: "absolute",
                bottom: "-8px",
                left: "50%", // move to the center
                transform: "translateX(-50%)", // adjust back by half
                width: "50%",
                height: "3px",
                backgroundColor: "#0d6efd", // Bootstrap primary blue
              }}
            ></span>
          </h4>

          {/* Brands Grid */}
          <div className="d-flex  gap-5 justify-content-center align-items-center flex-wrap mt-4 gy-4">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="d-flex justify-content-center align-items-center"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={100}
                  height={60}
                  style={{
                    objectFit: "contain",
                    filter: "grayscale(100%)",
                    transition: "0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = "none")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.filter = "grayscale(100%)")
                  }
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
      {/* ====== About us ======= */}
      <div className="bg-white py-5">
        <Container>
          {/* Heading */}
          <div className="text-center mb-4">
            <h1
              className="fw-bold text-dark"
              style={{ fontSize: "30px", margin: 0 }}
            >
              Best Website Design and Development Company 
            </h1>

            <div
              style={{
                width: "120px",
                height: "3px",
                backgroundColor: "#0d6efd",
                margin: "10px auto",
              }}
            ></div>
          </div>

          {/* Content Row */}
          <Row className="align-items-center">
            {/* Left Side Text */}
            <Col lg={6} className="mb-4 mb-lg-0">
              <p className="text-muted fs-6 lh-lg">
                Nakshatra Namaha Creations is a trusted Website Development
                Company with over 8+ years of experience and 500+
                successful projects delivered across industries. We help
                businesses build scalable, user-friendly, and high-performance
                websites that strengthen their digital presence. From crafting
                static and dynamic websites to developing secure e-commerce
                platforms and advanced applications using React and Next.js, our
                expertise ensures every solution is built to deliver real
                business results.
              </p>
              <p className="text-muted fs-6 lh-lg">
                As a leading Website Development Company, we work
                closely with startups, SMEs, and enterprises to understand their
                unique requirements and provide solutions that align with their
                goals. Our team combines creativity with technology to build
                websites that are responsive, SEO-optimized, and ready for
                long-term scalability. Over the years, we have earned the trust
                of our clients by delivering consistent quality, reliable
                support, and measurable outcomes.
              </p>
              <p className="text-muted fs-6 lh-lg">
                Whether you are looking to establish your brand online or
                upgrade your existing website, Nakshatra Namaha Creations is
                your reliable partner for driving digital success 
                and beyond.
              </p>
            </Col>

            {/* Right Side Image with Animation */}
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Image
                  src="/abt.png"
                  alt="About Us"
                  width={550}
                  height={500}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ================= SERVICES WE OFFER ================= */}
      <section
        className="w-100 py-5 px-3"
        style={{
          background: "linear-gradient(to right, #dbeafe, #e0f2fe, #f0f9ff)",
        }}
      >
        {/* Heading */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "768px" }}>
          <h2 className="fw-bold text-dark" style={{ fontSize: "30px" }}>
            Web Design and <br />
            <span className="text-black">Development Services We Offer</span>
          </h2>
          <div
            className="mx-auto mb-4 mt-3"
            style={{
              width: "120px",
              height: "3px",
              backgroundColor: "#3b82f6", // Tailwind blue-500 equivalent
            }}
          ></div>
        </div>

        {/* Cards */}
        <div className="container">
          <div className="row g-4">
            {cards.map((card, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div className="bg-white rounded-4 shadow-sm p-4 position-relative h-100 hover-shadow card-hover border-0">
                  {/* Corner Borders */}
                  <span className="position-absolute top-0 start-0 border-top border-start border-4 border-primary rounded-top-start d-none d-md-block corner top-left" />
                  <span className="position-absolute bottom-0 end-0 border-bottom border-end border-4 border-primary rounded-bottom-end d-none d-md-block corner bottom-right" />

                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                  <h3
                    className="fw-bold text-dark"
                    style={{ fontSize: "20px", marginBottom: 10 }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-muted medium mb-4">{card.description}</p>
                  <FiArrowUpRight className="position-absolute top-0 end-0 m-3 text-primary fs-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Styles */}
        <style jsx>{`
          .card-hover:hover {
            box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
          }
          .corner {
            width: 40px;
            height: 40px;
            transform: scale(0);
            transition: transform 0.5s;
          }
          .card-hover:hover .corner {
            transform: scale(1);
          }
        `}</style>
      </section>

      {/* ===== Contact us ====== */}
      <div
        className="position-relative d-flex align-items-center justify-content-center text-white"
        style={{
          backgroundImage: "url('/slidee2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        ></div>

        {/* Content */}
        <div
          className="position-relative text-center px-3"
          style={{ maxWidth: "768px", zIndex: 2 }}
        >
          <h4 className="fw-bold fs-3 mb-3">
            Have A Question? Get in Touch Today!
          </h4>
          <p className="mb-4 fw-medium small">
            NNC – your trusted partner in web design and development for over 8
            years. Contact us today and take the first step toward growing your
            digital presence.
          </p>

          {/* Buttons */}
          <div className=" max-w-50 d-flex flex-column flex-md-row justify-content-center gap-3 mx-auto" style={{width:"250px"}}>
            <a
              href="tel:+919900566466"
              className="btn btn-primary d-flex align-items-center gap-2 px-4 py-2 fw-semibold"
              style={{ backgroundColor: "#1d4ed8", border: "none" }}
            >
              <FaPhoneAlt /> Call: +91 9900566466
            </a>
          </div>
        </div>
      </div>

      {/* ===== why to choose us ====== * */}
      <section className="py-5 bg-white">
        <div className="container text-center px-3">
          {/* Title */}
          <h2 className="fw-bold fs-2 text-dark mt-4 mb-2">
            Why should you choose us?
          </h2>
          <div
            className="mx-auto mb-4 mt-3"
            style={{
              width: "120px",
              height: "3px",
              backgroundColor: "#3b82f6", // Tailwind blue-500 equivalent
            }}
          ></div>

          {/* Grid */}
          <div className="row mt-5 text-start">
            {services.map((service, index) => (
              <div className="col-12 col-md-6 mb-4" key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="d-flex align-items-start gap-3"
                >
                  {/* Icon with hover border */}
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle border border-2"
                    style={{
                      width: "120px",
                      height: "60px",
                      padding: "10px",
                      color: "#1d4ed8", // blue-700
                      borderColor: "transparent",
                      transition: "border-color 0.3s",
                      fontSize: "32px",
                    }}
                    onMouseEnter={
                      (e) => (e.currentTarget.style.borderColor = "#3b82f6") // blue-500
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor = "transparent")
                    }
                  >
                    {service.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h5 className="fw-bold text-dark mb-1">{service.title}</h5>
                    <p className="text-muted small mb-0">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-100 via-blue-200 to-white">
        <div className=" mx-auto px-6 text-center">
          <h2 className="fw-bold fs-2 text-dark mt-4 mb-2">Our Portfolio</h2>
          <div
            className="mx-auto mb-4 mt-3"
            style={{
              width: "120px",
              height: "3px",
              backgroundColor: "#3b82f6", // Tailwind blue-500 equivalent
            }}
          ></div>
          <Our_Service cardData={ourworkData} />
        </div>
      </section>
      {/* ================= CLIENTS ================= */}
      <section className="py-5 bg-white">
        <div className="text-center mb-4">
          <h3 className="fw-bold fs-3 text-dark">
            We Serve Clients Across The Globe
          </h3>
          <div
            className="mx-auto mb-4 mt-3"
            style={{
              width: "120px",
              height: "3px",
              backgroundColor: "#3b82f6", // Tailwind blue-500 equivalent
            }}
          ></div>
        </div>

        <div className="container">
          <div className="row g-3 justify-content-center">
            {clients.map((client, idx) => (
              <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="d-flex align-items-center justify-content-center p-3 border rounded shadow-sm hover-shadow transition"
                  style={{ height: "100px" }}
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={70}
                    height={70}
                    className="object-fit-contain"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-light py-5 px-3">
        <div className="container" style={{ maxWidth: "900px" }}>
          <h4 className="text-center fw-bold fs-2 text-dark mb-4 position-relative">
            FAQ’s – Choosing a Website Development Company
            <div
              className="mx-auto mt-3"
              style={{
                width: "100px",
                height: "4px",
                backgroundColor: "#3b82f6", // blue-500
              }}
            />
          </h4>

          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div className="accordion-item mb-3 border rounded" key={index}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button d-flex justify-content-between align-items-center ${
                      activeIndex === index ? "" : "collapsed"
                    } fw-semibold text-dark`}
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <h5 style={{ fontSize: "17px", margin: 0 }}>
                      {faq.question}
                    </h5>
                  </button>
                </h2>
                {activeIndex === index && (
                  <p
                    className="accordion-body bg-light text-muted border-top text-dark"
                    style={{ fontSize: "16px", margin: 0 }}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= INDUSTRIES ================= */}
      <div className="py-5 bg-white text-center">
        <h2 className="fw-bold fs-3 text-dark mb-4 position-relative">
          Industries Empowered by Our Website Designing Company 
          <div
            className="mx-auto mt-3 rounded-pill"
            style={{
              width: "140px",
              height: "6px",
              backgroundColor: "#3b82f6", // Tailwind blue-500
            }}
          />
        </h2>

        <div className="container py-5">
          <div className="row row-cols-2 row-cols-md-5 g-4 justify-content-center">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="d-flex flex-column align-items-center"
              >
                {/* Top label & line */}
                <div className="mb-3 text-center">
                  <span className="badge bg-dark text-white fw-semibold mb-2">
                    {industry.name}
                  </span>
                  <div className="d-flex flex-column align-items-center">
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#1f2937", // Tailwind gray-800
                      }}
                    ></span>
                    <div
                      style={{
                        width: "2px",
                        height: "32px",
                        borderRight: "2px dashed #9ca3af", // Tailwind gray-400
                      }}
                    ></div>
                  </div>
                </div>

                {/* Icon Block */}
                <div
                  className={`d-flex align-items-center justify-content-center rounded shadow text-white fs-3`}
                  style={{
                    width: "96px",
                    height: "96px",
                    backgroundColor: getBootstrapColor(industry.color),
                  }}
                >
                  {industry.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-white py-5 px-3">
        <div className="container">
          <div className="text-center pb-4">
            <h2 className="fw-bold fs-3 text-dark position-relative d-inline-block hover-underline">
              Review of Website Development Services
            </h2>
            <div
              className="mx-auto mb-4 mt-3"
              style={{
                width: "120px",
                height: "3px",
                backgroundColor: "#3b82f6", // Tailwind blue-500 equivalent
              }}
            ></div>
          </div>

          <div className="row g-4">
            {testimonials.map((item, idx) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
                <div className="border rounded shadow-sm p-4 h-100 d-flex flex-column justify-content-between testimonial-box">
                  <h5 className="fw-semibold text-dark mb-2">{item.name}</h5>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <div className="d-flex text-warning">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <span className="text-primary small">✔</span>
                    <FaGoogle className="text-danger ms-auto" />
                  </div>
                  <h4 className="text-muted small flex-grow">{item.review}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .hover-underline::after {
            content: "";
            position: absolute;
            width: 0;
            height: 3px;
            left: 0;
            bottom: -6px;
            background-color: #0490d2;
            transition: width 0.5s;
          }
          .hover-underline:hover::after {
            width: 100%;
          }
          .testimonial-box:hover {
            box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease-in-out;
          }
        `}</style>
      </section>
      <LandingFooter />
    </div>
  );
}
