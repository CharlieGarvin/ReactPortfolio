import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import "../assets/portfolio-pic.JPG";
import "../styles/Footer.css";

function Footer() {
    return( <div className="footer">
    <div className="socialMedia"> <LinkedInIcon /> </div>
    <img id="logo" src="../assets/portfolio-pic.JPG" alt="picture of me"/>
    <p> &copy; 2023</p>
    </div>
  );
  
}

export default Footer;