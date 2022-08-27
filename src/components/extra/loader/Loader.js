import AOS from "aos";
import React from "react";
import "./loader.css";

export const Loader = () => {
  window.addEventListener("load", () => {
    const preloader = document.querySelector(".js-preloader");
    preloader.classList.add("fade-out");

    setTimeout(() => {
      preloader.style.display = "none";

      AOS.init();
    }, 600);
  });

  return (
    <div className="preloader js-preloader" id="preloader">
      <div> </div>{" "}
    </div>
  );
};
