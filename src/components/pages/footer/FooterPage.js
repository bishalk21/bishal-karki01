import React, { useContext } from "react";
import "./Footer.css";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Logo from "../../../assets/img/me1.png";
import { themeContext } from "../../extra/Toggle/Context";
import { Link } from "react-router-dom";

export const FooterPage = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <footer
      className="footer text-center p-5 mt-3"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <div className="top">
        <div className="footer__logo">
          <Link to="/Intro" className="footer__logo">
            {" "}
            <img
              src={Logo}
              alt="BK"
              style={{
                width: "50px",
              }}
            />{" "}
          </Link>{" "}
        </div>{" "}
        <div className="f-content footer__social">
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
        </div>{" "}
      </div>{" "}
      <div className="footer__copyright">
        <small> &copy; </small> <span>{new Date().getFullYear()}</span> made
        with &hearts; by <em> Bishal Karki </em>{" "}
      </div>{" "}
    </footer>
  );
};
