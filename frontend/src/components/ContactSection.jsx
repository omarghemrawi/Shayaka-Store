import React from "react";
import { FaHeadphones, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-header">
        <h2>We are always here to help!</h2>
        <p>Reach out to us through any of these support channels</p>
      </div>
      <div className="contact-item contact-phone">
        <span>
          <FaHeadphones />
        </span>
        <div className="contact-details">
          <p>Phone Support : 71-03 66 96</p>
          <p className="contact-hour">Monday to Friday: 9:00 AM - 6:00 PM</p>
        </div>
      </div>
      <div className="contact-item contact-email">
        <span>
          <FaEnvelope />
        </span>
        <p className="contact-details">
          Email Support :
          <a href="mailto:support@company.com">support@company.com</a>
        </p>
      </div>
      <div className="contact-item contact-whatsapp">
        <span>
          <FaWhatsapp />
        </span>
        <p>WhatsApp Us</p>
      </div>
    </div>
  );
};

export default ContactSection;
