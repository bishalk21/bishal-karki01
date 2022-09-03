import React, { useContext } from "react";
import { SiFigma } from "react-icons/si";
import { VscRootFolderOpened } from "react-icons/vsc";
import { CgUserlane } from "react-icons/cg";
import me from "../../../assets/img/pp.jpeg";
import "./about.css";
import { themeContext } from "../../extra/Toggle/Context";
import { Link } from "react-router-dom";

export const AboutMe = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section
      id=""
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <div className="about_content">
        <h1 className="title"> A little about me </h1>{" "}
      </div>{" "}
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="AboutMe Img" />
          </div>{" "}
        </div>{" "}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <SiFigma className="about-icon" />
              <h5> Design </h5> <small> clean mordern designs </small>{" "}
            </article>{" "}
            <article className="about__card">
              <VscRootFolderOpened className="about-icon" />
              <h5> Projects </h5> <small> 30 + Completed </small>{" "}
            </article>{" "}
            <article className="about__card">
              <CgUserlane className="about-icon" />
              <h5> Clients </h5> <small> 10 + satisfied </small>{" "}
            </article>{" "}
          </div>{" "}
          <p>
            Motivated front - end developer who brings a creative and solution -
            driven mindset to every team and project.passionate about writing
            clean code that is reusable and follows DRY principles, design
            interface that incorporates accessibility and user - friendliness
            approach all new projects with the priority of simplicity and
            functionality{" "}
          </p>{" "}
          <Link to="/contact" className="btn btn-primary">
            {" "}
            Let 's Connect{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
