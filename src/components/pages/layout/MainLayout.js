import React from "react";
import { FooterPage } from "../footer/FooterPage";
import { NavbarPage } from "../navbar/NavbarPage";

export const MainLayout = ({ children }) => {
  return (
    <>
      <NavbarPage />
      <main style={{ minHeight: "calc(100vh - 200px)" }} className="container">
        {children}
      </main>
      <FooterPage />
    </>
  );
};
