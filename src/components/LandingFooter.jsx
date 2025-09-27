// components/Footer.js
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="text-light pt-5 pb-4 px-4 px-md-5"
      style={{
        background: "linear-gradient(to right, #111827, #1f2937, #111827)",
      }}
    >
      <div className="container">
        <div className="row g-4 justify-content-between">
          {/* Logo and Description */}
          <div className="col-12 col-md-6 col-lg-4">
            <Image
              src="/nnc.png"
              alt="Company Logo"
              width={80}
              height={80}
              className="mb-3"
              priority
            />
            <p className="small mb-4">
              Nakshatra Namaha Creations (NNC) is your trusted partner for
              website design, development, and digital growth solutions.
            </p>
            <div className="d-flex gap-2">
              <SocialIcon
                href="https://www.facebook.com/Nakshatranamahacreations/"
                icon={<FaFacebookF />}
                hoverColor="#1877F2"
              />
              <SocialIcon href="#" icon={<FaTwitter />} hoverColor="#1DA1F2" />
              <SocialIcon
                href="https://www.youtube.com/c/NakshatraNamahaCreations"
                icon={<FaYoutube />}
                hoverColor="#FF0000"
              />
              <SocialIcon
                href="https://www.instagram.com/nnc.digitalbengaluru/"
                icon={<FaInstagram />}
                hoverColor="#E1306C"
              />
              <SocialIcon
                href="https://www.linkedin.com/company/nakshatra-namaha-creation/"
                icon={<FaLinkedinIn />}
                hoverColor="#0A66C2"
              />
            </div>
          </div>

          {/* Services */}
          <div className="col-6 col-lg-4 col-md-6">
            <h5 className="text-white mb-3">Our Services</h5>
            <ul className="list-unstyled small">
              {[
                "Static Website Development",
                "Dynamic Website Development",
                "Ecommerce Website Development",
                "React JS Website Development",
                "Next JS Website Development",
                "Custom Website Development",
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-light text-decoration-none d-block py-1 link-hover"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-lg-4">
            <h5 className="text-white mb-3">Contact Info</h5>
            <p className="small mb-2">
              <strong>Address:</strong> <br />
              <a
                href="https://www.google.com/maps?q=1st+floor,+Darshan+Plazza,+Dwaraka+Nagar,+Banashankari,+6th+Stage+1st+Block,+Channasandra,+Bengaluru,+Karnataka+-+560061"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none link-hover"
              >
                1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th
                Stage 1st Block, Channasandra, Bengaluru, Karnataka - 560061
              </a>
            </p>
            <p className="small mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@nakshatranamahacreations.com"
                className="text-light text-decoration-none link-hover"
              >
                info@nakshatranamahacreations.com
              </a>
            </p>
            <p className="small">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+919900566466"
                className="text-light text-decoration-none link-hover"
              >
                +91 9900566466
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-top border-secondary mt-4 pt-3 text-center small text-secondary">
          © {new Date().getFullYear()} Nakshatra Namaha Creations. All Rights
          Reserved.
        </div>
      </div>

      <style jsx>{`
        .link-hover:hover {
          color: #3b82f6 !important;
        }
      `}</style>
    </footer>
  );
}

function SocialIcon({ href, icon, hoverColor }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="d-flex align-items-center justify-content-center rounded-circle"
      style={{
        width: "36px",
        height: "36px",
        backgroundColor: "#374151", // gray-700
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#374151")}
    >
      <span className="text-white">{icon}</span>
    </a>
  );
}
