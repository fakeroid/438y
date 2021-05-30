import React from "react";
import "../css/Footer.css";
import Logo from "./Logo";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
        <div className="col-10"></div>
        <div className="col-2">
            <Logo />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;