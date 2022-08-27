import React, { useContext } from "react";
import { themeContext } from "../../extra/Toggle/Context";
import { MainLayout } from "../layout/MainLayout";
import { AboutMe } from "./AboutMe";

export const AmP = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <MainLayout>
      <AboutMe
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      />{" "}
    </MainLayout>
  );
};
