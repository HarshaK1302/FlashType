import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <a
        target="_blank"
        className="footer-link"
        href="https://github.com/HarshaK1302?tab=repositories"
        rel="noreferrer"
      >
        <i class="fab fa-github"></i> <br />
        Developed By @Harsha
      </a>
    </div>
  );
};

export default Footer;
