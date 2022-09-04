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
    <Navbar
      expand="md"
      className="header js-header navbar navbar-expand-md bg-opacity-10"
      fixed="top"
    >
      <div className="container n-wrapper" id="Navbar">
        <Navbar.Brand className="nav-brand navbar-brand nav-font">
          <div
            className="n-left logo"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="n-name">
              <Link
                activeClass="active"
                style={{ textDecoration: "none", fontSize: "1.5rem" }}
                to="/"
                spy={true}
                smooth={true}
                onClick={() => setActiveNav("/")}
                className={activeNav === "/" ? "active" : ""}
              >
                <img src={me} alt="BK" width="70px" />
              </Link>{" "}
            </div>{" "}
            <Toggle />
          </div>{" "}
        </Navbar.Brand>
        <Navbar.Toggle
          className="navbar-togler bg-white"
          type="button"
          data-bs-toggle="collapse"
          aria-controls="basic-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav js-nav n-right n-list">
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0"
              style={{
                listStyleType: "none",
                fontSize: "1.5rem",
              }}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <li className="nav-link">
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
              <li className="nav-link">
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
              <li className="nav-link">
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
              <li className="nav-link">
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
              <li className="nav-link">
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
