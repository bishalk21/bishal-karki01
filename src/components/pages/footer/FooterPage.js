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
    <>
      <div
        className="footer md:flex md:flex-row-reverse md:justify-between"
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
                alt="f-logo"
                style={{
                  width: "100%",
                }}
              />{" "}
            </Link>{" "}
          </div>{" "}
          <div className="permalinks">
            <ul className="permalinks">
              <li>
                {" "}
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  Home{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link
                  to="/about"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  About{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link
                  to="/skills"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  Skills{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link
                  to="/projects"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  Projects{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link
                  to="/contact"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  Contact{" "}
                </Link>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        <div className="f-content">
          <div className="footer__social">
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
          <div className="footer__copyright">
            <small> &copy; </small> <span>{new Date().getFullYear()}</span> made
            with &hearts; by <span> @Bishal Karki </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
