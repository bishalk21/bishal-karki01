import React from "react";
import { FooterPage } from "../footer/FooterPage";
import { NavbarPage } from "../navbar/NavbarPage";

export const MainLayout = ({ children }) => {
  return (
    <>
      <NavbarPage />
      <div
        style={{
          minHeight: "",
        }}
        className="container main"
      >
        {" "}
        {children}{" "}
      </div>{" "}
      <FooterPage />
    </>
  );
};
