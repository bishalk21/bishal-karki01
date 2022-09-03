import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import "./hero.css";
import img1 from "../../../assets/img/boy.png";
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
    <div className="Intro container" id="Intro">
      {" "}
      {/* left name side */}{" "}
      <Col className="i-left">
        <div className="i-name">
          {" "}
          {/* yahan change hy darkmode ka */}{" "}
          <span
            style={{
              color: darkMode ? "white" : "",
            }}
          >
            <h3> Howdy &#33; I Am </h3>{" "}
          </span>{" "}
          <span> Bishal Karki </span>{" "}
          <span
            className=""
            style={{
              color: darkMode ? "white" : "",
            }}
          >
            <Typical
              style={{
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
        {/* social icons */}{" "}
        {/* <div className="i-icons">
                        <img src={Github} alt="" />
                        <img src={LinkedIn} alt="" />
                        <img src={Instagram} alt="" />
                      </div>{" "} */}{" "}
        <CTA /> {/* <FeedbackMe /> */}{" "}
      </Col>{" "}
      {/* right image side */}{" "}
      <Col className="i-right">
        {" "}
        {/* <img src={Vector1} alt="" /> */} <img src="" alt="" />
        <img src="" alt="" /> {/* <video src={boy} alt="" /> */}{" "}
        <img src={img1} alt="" /> {/* animation */}{" "}
        <motion.img
          initial={{
            left: "-36%",
          }}
          whileInView={{
            left: "-24%",
          }}
          transition={transition}
          src="{glassesimoji}"
          alt=""
        />
        <motion.div
          initial={{
            top: "5rem",
            left: "9rem",
          }}
          whileInView={{
            left: "0rem",
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
            top: "-11rem",
          }}
          whileInView={{
            left: "5rem",
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
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>{" "}
      </Col>{" "}
    </div>
  );
};
