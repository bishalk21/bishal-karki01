import React, { useContext } from "react";
import { themeContext } from "../../extra/Toggle/Context";
import { MainLayout } from "../layout/MainLayout";
import { ContactPage } from "./ContactPage";

export const CmP = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <MainLayout>
      <ContactPage
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      />{" "}
    </MainLayout>
  );
};
