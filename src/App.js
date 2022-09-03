import { useContext } from "react";
import "./App.css";
import { Loader } from "./components/extra/loader/Loader.js";
import { themeContext } from "./components/extra/Toggle/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import { CmP } from "./components/pages/contact/CmP";
import { HrP } from "./components/pages/hero/HrP";
import { AmP } from "./components/pages/about/AmP";
import { SkP } from "./components/pages/skills/SkP";
import { PrP } from "./components/pages/projects/PrP";
import { BlP } from "./components/pages/blog/BlP";
import { Container } from "react-bootstrap";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <Loader />
      <div
        className="App page-wrapper"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Intro" element={<HrP />} />
            <Route path="/skills" element={<SkP />} />
            <Route path="/projects" element={<PrP />} />
            <Route path="/BLOG" element={<BlP />} />
            <Route path="/about" element={<AmP />} />
            <Route path="/contact" element={<CmP />} />
          </Routes>
        </BrowserRouter>
      </div>{" "}
    </>
  );
}

export default App;
