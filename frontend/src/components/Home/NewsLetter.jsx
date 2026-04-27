import React from "react";
import "./NewsLetter.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const NewsLetter = () => {
  return (
    <>
      {/* // <!-- NEWSLETTER SECTION --> */}
      <section class="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with the latest arrivals and exclusive offers.</p>

        <div class="newsletter-input">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>

      {/* // <!-- FOOTER --> */}
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-column">
            <h3>About</h3>
            <p>Our Story</p>
            <p>Careers</p>
          </div>

          <div class="footer-column">
            <h3>Customer Service</h3>
            <p>Contact Us</p>
            <p>FAQs</p>
            <p>Order Tracking</p>
          </div>

          <div class="footer-column">
            <h3>Shop</h3>
            <p>Women</p>
          </div>

          <div class="footer-column social">
            <h3>Follow Us</h3>
            <div class="icons">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaLinkedinIn />
              </span>
            </div>
          </div>
        </div>

        <p class="copyright">© 2026 YourStore. All rights reserved.</p>
      </footer>
    </>
  );
};

export default NewsLetter;
