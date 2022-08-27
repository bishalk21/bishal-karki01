import React from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://github.com/bishalk21"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <SiGithub />{" "}
      </a>{" "}
      <a
        href="https://www.linkedin.com/in/bishalk21/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <FaLinkedin />{" "}
      </a>{" "}
      <a
        href="https://twitter.com/k_bishal21"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <BsTwitter />{" "}
      </a>{" "}
    </div>
  );
};

export default HeaderSocials;
