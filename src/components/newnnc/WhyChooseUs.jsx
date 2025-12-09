import React from "react";
// import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const data = [
    {
      icon: "fas fa-user-tie",
      title: "Expert Guidance",
      text: "Our developers don’t just code — they guide smarter tech decisions, driving growth and preparing your business for the future.",
    },
    {
      icon: "fas fa-layer-group",
      title: "Diverse Solutions",
      text: "Your business is unique — and your technology should be too. We use modern tech, AI, and automation to build solutions tailored to your goals.",
    },
    {
      icon: "fas fa-heart",
      title: "Client-Centric",
      text: "We see every project as a partnership. We communicate openly and support you like a true tech ally focused on your success.",
    },
    {
      icon: "fas fa-lightbulb",
      title: "Innovation First",
      text: "The world moves fast — and we help you move faster with AI automation, predictive insights, and future-ready digital solutions that keep you ahead.",
    },
  ];

  return (
    <section className="why-section">
      <div className="container">
        <div className="why-title-box">
          <h2 className="why-title">
            Why Choose <span>Us?</span>
          </h2>
          <p className="why-subtitle">
            We're offering innovative IT solutions, expert consultancy, and
            modern technology to help businesses thrive in the digital age.
          </p>
        </div>

        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-6">
              <div className="why-card">
                <div className="why-icon">
                  <i className={item.icon}></i>
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
