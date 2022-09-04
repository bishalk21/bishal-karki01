import React from "react";
import { FooterPage } from "../footer/FooterPage";
import { NavbarPage } from "../navbar/NavbarPage";
// import "../../../App.css";

export const MainLayout = ({ children }) => {
  return (
    <>
      <NavbarPage />
      <div
        style={{
          minHeight: "",
        }}
        className="main"
      >
        {" "}
        {children}{" "}
      </div>{" "}
      <FooterPage />
    </>
  );
};
