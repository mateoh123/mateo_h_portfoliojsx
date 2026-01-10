import React from "react";
import instagramIcon from "../assets/instagramlogo.png";
import emailIcon from "../assets/emaillogo.png";
import linkedinIcon from "../assets/linkedinlogo.png";

const Footer = () => {
  return (
    <div className="py-4 px-4 justify-items-center font-bold font-source_san_3 text-xl">
      <h3>Socials</h3>
      <div className="flex gap-4">
        <a
          href="https://www.instagram.com/_.tomateo._/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={instagramIcon}
            width="54"
            height="54"
            alt="logo-instagram"
            className="hover:scale-125"
          />
        </a>
        <a href="mailto:mateoche76@gmail.com" target="_blank" rel="noreferrer">
          <img
            src={emailIcon}
            width="54"
            height="54"
            alt="logo-email"
            className="hover:scale-125"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mateo-hernandez21/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedinIcon}
            width="54"
            height="54"
            alt="logo-linkedin"
            className="hover:scale-125"
          />
        </a>
      </div>
      <h3>© 2025 Mateo Hernandez. All Rights Reserved.</h3>
    </div>
  );
};

export default Footer;
