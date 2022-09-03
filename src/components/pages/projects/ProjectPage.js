import React, { useContext } from "react";
import { themeContext } from "../../extra/Toggle/Context";

import "./project.css";
import img1 from "../../../assets/img/calculator.png";
import img2 from "../../../assets/img/nottodo.png";
import img3 from "../../../assets/img/financetracker.png";
import img4 from "../../../assets/img/habittracker.png";

const data = [
  {
    id: 1,
    image: img1,
    title: "Prank Calculator",
    github: "https://github.com/bishalk21/JS_Calculator",
    demo: "https://bishalk21.github.io/JS_Calculator/",
  },

  {
    id: 2,
    image: img2,
    title: "Not To Do List",
    github: "https://github.com/bishalk21/FS-not-to-do-app",
    demo: "https://not-to-do-list-app.herokuapp.com/",
  },

  {
    id: 3,
    image: img3,
    title: "My Finance Tracker",
    github: "https://github.com/bishalk21/my-finance-tracker",
    demo: "https://my-finance-tracker.herokuapp.com/",
  },

  {
    id: 4,
    image: img4,
    title: "My Habit Tracker",
    github: "https://github.com/bishalk21/habit-tracker-system",
    demo: "https://bishalk21.github.io/habit-tracker-system/",
  },
];
export const ProjectPage = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section
      id="portfolio"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <h2> My Recent Projects </h2>
      <h5>The following are some of the projects I have worked on. </h5>
      <div className="container portfolio__container">
        {" "}
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />{" "}
              </div>{" "}
              <h3> {title} </h3>{" "}
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  {" "}
                  GitHub{" "}
                </a>{" "}
                <a
                  href={demo}
                  target="_blank"
                  className="btn btn-success"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Live Demo{" "}
                </a>{" "}
              </div>{" "}
            </article>
          );
        })}{" "}
      </div>{" "}
    </section>
  );
};
