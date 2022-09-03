import React, { useContext } from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { themeContext } from "../../extra/Toggle/Context";

export const SkillsPage = () => {
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
      <h5> What Skills I Have </h5> <h2> My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Frontend Development </h3>{" "}
          <div className="experience__content">
            <article>
              {/* <BsPatchCheckFill className="experience__detail-icon" /> */}
              <span>
                <i class="fa-brands fa-html5"></i>
              </span>
              <div>
                <h4> HTML </h4> <small> Experienced </small>{" "}
              </div>{" "}
            </article>{" "}
            <article>
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4> CSS / SASS </h4> <small> Experienced </small>{" "}
              </div>{" "}
            </article>{" "}
            <article>
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4> JavaScript </h4> <small> Experienced </small>{" "}
              </div>{" "}
            </article>{" "}
            <article>
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4> React </h4> <small> Intermediate </small>{" "}
              </div>{" "}
            </article>{" "}
            <article>
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4> Git </h4> <small> Experienced </small>{" "}
              </div>{" "}
            </article>{" "}
            <article>
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4> Node.js </h4> <small> Intermediate </small>{" "}
              </div>{" "}
            </article>{" "}
          </div>{" "}
        </div>{" "}
        <div className="experience__cms">
          <h3> Content Management Systems </h3>{" "}
          <div className="experience__content">
            <article>
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4> Widget Customization </h4> <small> Intermedate </small>{" "}
              </div>{" "}
            </article>{" "}
            <article>
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4> Web Design </h4> <small> Experienced </small>{" "}
              </div>{" "}
            </article>{" "}
            <article>
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4> Content Management Tools </h4> <small> Basic </small>{" "}
              </div>{" "}
            </article>{" "}
            <article>
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4> Responsive Design </h4> <small> Experienced </small>{" "}
              </div>{" "}
            </article>{" "}
            <article>
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4> Testing / Debugging </h4> <small> Intermediate </small>{" "}
              </div>{" "}
            </article>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
