import React, { useContext } from "react";
import { themeContext } from "../../extra/Toggle/Context";
import { MainLayout } from "../layout/MainLayout";
import { BlogPage } from "./BlogPage";

export const BlP = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <MainLayout>
      <BlogPage
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      />{" "}
    </MainLayout>
  );
};
