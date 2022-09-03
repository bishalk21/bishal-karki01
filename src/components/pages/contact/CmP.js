import React, { useContext } from "react";
import { themeContext } from "../../extra/Toggle/Context";
import { FooterPage } from "../footer/FooterPage";
import { MainLayout } from "../layout/MainLayout";
import { NavbarPage } from "../navbar/NavbarPage";
import { ContactPage } from "./ContactPage";

export const CmP = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <MainLayout>
        <ContactPage
          style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "white" : "",
          }}
          className="d-flex justify-content-center"
        />
      </MainLayout>
    </div>
  );
};
