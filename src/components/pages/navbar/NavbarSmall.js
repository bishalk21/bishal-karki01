import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { RiUserHeartLine } from "react-icons/ri";
import { MdOutlineMarkEmailUnread, MdOutlineWorkOutline } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarSmall = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="navbar">
      <li className="list-item">
        <Link
          to="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </Link>{" "}
        <span className="list-item-name"> Home </span>{" "}
      </li>{" "}
      <li className="list-item">
        <Link
          to="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <FaTools />
        </Link>{" "}
        <span className="list-item-name"> Skills </span>{" "}
      </li>{" "}
      <li className="list-item">
        <Link
          to="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <RiUserHeartLine />
        </Link>{" "}
        <span className="list-item-name"> Profile </span>{" "}
      </li>{" "}
      <li className="list-item">
        <Link
          to="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <MdOutlineWorkOutline />
        </Link>{" "}
        <span className="list-item-name"> Projects </span>{" "}
      </li>{" "}
      <li className="list-item">
        <Link
          to="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <MdOutlineMarkEmailUnread />
        </Link>{" "}
        <span className="list-item-name"> Contact </span>{" "}
      </li>{" "}
    </nav>
  );
};

export default NavbarSmall;
