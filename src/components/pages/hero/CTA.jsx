import React from "react";
import cv from "../../../assets/img/bishalkarki.docx";
import "./Header.css";
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-scroll";

function CTA() {
  return (
    <div className="cta">
      <Link
        to={cv}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="btn btn-primary"
      >
        {" "}
        Download CV <AiOutlineDownload fontSize="1em" />{" "}
      </Link>{" "}
      <Link to="contact" className="btn btn-primary">
        let 's talk{" "}
      </Link>{" "}
    </div>
  );
}

export default CTA;
