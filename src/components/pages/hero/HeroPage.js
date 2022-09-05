import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import "./hero.css";
import glassesimoji from "../../../assets/img/glassesimoji.png";
import img1 from "../../../assets/img/boy.jpeg";
import thumbup from "../../../assets/img/thumbup.png";
import crown from "../../../assets/img/crown.png";
import FloatinDiv from "../../extra/FloatingDiv/FloatingDiv";
import Typical from "react-typical";
import { motion } from "framer-motion";
import { themeContext } from "../../extra/Toggle/Context";
import CTA from "./CTA";

export const HeroPage = () => {
  // Transition
  const transition = {
    duration: 2,
    type: "spring",
  };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="hero" className="hero container">
      <div className="row">
        <Col className="i-right col-md-5 text-center order-2 order-md-1">
          <img
            src={img1}
            alt=""
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
              padding: "4",
            }}
          />
          <motion.div
            initial={{
              top: "-0.1rem",
              left: "13rem",
            }}
            whileInView={{
              left: "-1rem",
            }}
            transition={transition}
            className="floating-div"
          >
            <FloatinDiv img={crown} text1="Web" text2="Developer" />
          </motion.div>{" "}
          {/* animation */}{" "}
          <motion.div
            initial={{
              left: "15rem",
              top: "24rem",
            }}
            whileInView={{
              left: "-6rem",
            }}
            transition={transition}
            className="floating-div"
          >
            {" "}
            {/* floatinDiv mein change hy dark mode ka */}{" "}
            <FloatinDiv type="button" img={thumbup} text1="Hire" text2="Me" />
          </motion.div>{" "}
          <div
            className="blur"
            style={{
              background: "rgb(238 210 255)",
            }}
          ></div>{" "}
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17px",
              width: "21px",
              height: "11px",
              left: "--9px",
            }}
          ></div>{" "}
        </Col>
        <Col className="i-left col-md-7 mt-5">
          <div className="i-name">
            {" "}
            {/* yahan change hy darkmode ka */}{" "}
            <span
              style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "white" : "",
              }}
            >
              <h3> Howdy &#33; I Am </h3>{" "}
            </span>{" "}
            <span> Bishal Karki </span>{" "}
            <span
              className=""
              style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "white" : "",
              }}
            >
              <Typical
                style={{
                  background: darkMode ? "black" : "",
                  color: darkMode ? "white" : "",
                }}
                loop={Infinity}
                className="banner-text"
                wrapper="b"
                steps={["Web Developer", 1800, "Software Engineer", 1800]}
              />{" "}
            </span>{" "}
            <span>
              Frontend Developer with high level of experience in web designing
              and development, producting the Quality work{" "}
            </span>{" "}
          </div>{" "}
          <CTA />
        </Col>
      </div>
    </div>
  );
};
