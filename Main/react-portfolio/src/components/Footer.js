import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
    return( <div className="footer">
    <div className="socialMedia"> <LinkedInIcon /> </div>
    <img id="logo" src="../assests/portfolio-pic.jPG" alt=""/>
    <p> &copy; 2023</p>
    </div>
  );
  
}

export default Footer;