import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts Clone Made By -{" "}
        <a href="https://www.linkedin.com/in/imbhavesh28" target="__blank">
          Bhavesh Mali
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.twitter.com/imbhavesh28/" target="__blank">
          <i className="fab fa-twitter-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/imbhavesh28" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://bhaveshmali.web.app/" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
