import React from "react";
import "./styles/styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">&copy; {new Date().getFullYear()} Auriga IT</p>
        <ul className="social-links">
          <li>
            <a href="/">
              <i className="fab fa-twitter">Twitter</i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-facebook">Facebook</i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-instagram">Instagram</i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
