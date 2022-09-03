import React, { useContext } from "react";
import { themeContext } from "../../extra/Toggle/Context";
import { MainLayout } from "../layout/MainLayout";
import { ProjectPage } from "./ProjectPage";

export const PrP = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <MainLayout>
        <ProjectPage />
      </MainLayout>{" "}
    </div>
  );
};
