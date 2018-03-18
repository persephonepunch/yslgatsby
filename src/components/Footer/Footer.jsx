import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import Link from "gatsby-link";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.scss";

class Footer extends Component {
  render() {

    const copyright = config.copyright;
    const fixedFooter = config.fixedFooter;
    if (!copyright) {
      return null;
    }
    return (
      <footer className={fixedFooter ? "footer footer-fixed" : "footer"} >
       
        <div className="notice-container">
            <div className="copyright " >
              <h6>{copyright}</h6>
            </div>
        </div>
         
      </footer>
    );
  }
}

export default Footer;
