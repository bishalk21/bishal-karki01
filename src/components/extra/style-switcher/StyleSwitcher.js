import React from "react";
import "./styleswitcher.css";
import { Button } from "react-bootstrap";

export const StyleSwitcher = () => {
  /*style switcher */

  const styleSwitcherToggl = () => {
    const styleSwitcher = document.querySelector(".js-style-switcher");
    const styleSwitcherToggler = document.querySelector(
      ".js-style-switcher-toggler"
    );

    styleSwitcherToggler.addEventListener("click", function () {
      styleSwitcher.classList.toggle("open");
      this.querySelector("i").classList.toggle("fa-times");
      this.querySelector("i").classList.toggle("fa-cogs");
    });
  };
  styleSwitcherToggl();

  /*style switcher */

  const themeColor = () => {
    const hueSlider = document.querySelector(".js-hue-slider");
    const html = document.querySelector("html");

    const setHue = (value) => {
      html.style.setProperty("--hue", value);
      document.querySelector(".js-hue").innerHTML = value;
    };

    hueSlider.addEventListener("input", function () {
      setHue(this.value);
      /* set the users peference in local storage */
      localStorage.setItem("--hue", this.value);
    });

    const slider = (value) => {
      hueSlider.value = value;
    };

    /*check for saved user preference, if any, on load of the website */

    if (localStorage.getItem("--hue") !== null) {
      setHue(localStorage.getItem("--hue"));
      slider(localStorage.getItem("--hue"));
    } else {
      //default colour
      const hue = getComputedStyle(html).getPropertyValue("--hue");
      setHue(hue);
      slider(hue.split(" ").join(""));
    }
  };

  themeColor();

  /*theme light & dark */

  const themeLightDark = () => {
    const darkModeCheckbox = document.querySelector(".js-dark-mode");

    const themeMode = () => {
      if (localStorage.getItem("theme-dark") === "false") {
        document.body.classList.remove("t-dark");
      } else {
        document.body.classList.add("t-dark");
      }
    };

    darkModeCheckbox.addEventListener("click", function () {
      /*set the user preference in local storage */
      localStorage.setItem("theme-dark", this.checked);
      themeMode();
    });

    /*check for saved peference */
    if (localStorage.getItem("theme-dark") !== null) {
      themeMode();
    }
    if (document.body.classList.contains("t-dark")) {
      darkModeCheckbox.checked = true;
    }
  };

  themeLightDark();

  return (
    <>
      <div className="style-switcher js-style-switcher">
        <Button
          type="button"
          className="style-switcher-toggler js-style-switcher-toggler"
        >
          <i
            className="fa fa-cogs"
            aria-hidden="true"
            style={{ color: "#fff" }}
          ></i>
        </Button>
        <div className="style-switcher-main">
          <h2>Style Switcher</h2>
          <div className="style-switcher-item">
            <p>Theme Color</p>
            <div className="theme-color">
              <input
                type="range"
                min="0"
                max="360"
                className="hue-slider js-hue-slider"
              />
              <div className="hue">
                Hue: <span className="js-hue"></span>
              </div>
            </div>
          </div>
          <div className="style-switcher-item">
            <label className="form-switch">
              <span>Dark Mode</span>
              <input type="checkbox" className="js-dark-mode" />
              <div className="box"></div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
