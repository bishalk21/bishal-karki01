import React, { useState } from "react";
import { Link } from "react-router-dom";
import Toggle from "../../extra/Toggle/Toggle";
import "./navbar.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import me from "../../../assets/img/me1.png";
export const NavbarPage = () => {
  const [activeNav, setActiveNav] = useState("/");
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".js-header");
    if (this.scrollY > 0) {
      header.classList.add("bg-reveal");
    } else {
      header.classList.remove("bg-reveal");
    }
  });
  return (
    <Navbar expand="md lg" className="header js-header" fixed="top">
      <div className="container n-wrapper" id="Navbar">
        <Navbar.Brand className="nav-brand">
          <div
            className="n-left logo"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="n-name">
              <Link
                activeClass="active"
                style={{ textDecoration: "none", fontSize: "1.5rem" }}
                to="/Intro"
                spy={true}
                smooth={true}
                onClick={() => setActiveNav("/Intro")}
                className={activeNav === "/Intro" ? "active" : ""}
              >
                <img src={me} alt="logo" height="50rem" width="100%" />
              </Link>{" "}
            </div>{" "}
            <Toggle />
          </div>{" "}
        </Navbar.Brand>
        <Navbar.Toggle
          className="navbar-togler bg-white"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav js-nav n-right n-list">
            <ul
              style={{
                listStyleType: "none",
                fontSize: "1.5rem",
              }}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <li>
                <Link
                  activeClass="active"
                  style={{ textDecoration: "none" }}
                  to="/about"
                  spy={true}
                  smooth={true}
                  onClick={() => setActiveNav("/about")}
                  className={activeNav === "/about" ? "active" : ""}
                >
                  About{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                <Link
                  to="/skills"
                  style={{ textDecoration: "none" }}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  onClick={() => setActiveNav("/skills")}
                  className={activeNav === "/skills" ? "active" : ""}
                >
                  Skills{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                <Link
                  to="/blog"
                  activeClass="active"
                  style={{ textDecoration: "none" }}
                  spy={true}
                  smooth={true}
                  onClick={() => setActiveNav("/blog")}
                  className={activeNav === "/blog" ? "active" : ""}
                >
                  Blog{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                <Link
                  to="/projects"
                  activeClass="active"
                  style={{ textDecoration: "none" }}
                  spy={true}
                  smooth={true}
                  onClick={() => setActiveNav("/projects")}
                  className={activeNav === "/projects" ? "active" : ""}
                >
                  Projects{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                <Link
                  to="/contact"
                  activeClass="active"
                  style={{ textDecoration: "none" }}
                  spy={true}
                  smooth={true}
                  onClick={() => setActiveNav("/contact")}
                  className={activeNav === "/contact" ? "active" : ""}
                >
                  Contact
                </Link>{" "}
              </li>{" "}
            </ul>{" "}
          </Nav>{" "}
        </Navbar.Collapse>{" "}
      </div>{" "}
    </Navbar>
  );
};
