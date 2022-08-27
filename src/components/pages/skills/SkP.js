import React, { useContext } from "react";
import { themeContext } from "../../extra/Toggle/Context";
import { MainLayout } from "../layout/MainLayout";
import { SkillsPage } from "./SkillsPage";

export const SkP = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <MainLayout>
      <SkillsPage
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      />
    </MainLayout>
  );
};
