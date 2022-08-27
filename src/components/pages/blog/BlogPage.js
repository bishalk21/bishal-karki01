import React, { useContext } from "react";
import { themeContext } from "../../extra/Toggle/Context";
import "./blog.css";

export const BlogPage = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      id=""
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <h1>Blog Page</h1>
    </div>
  );
};
