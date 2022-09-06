import { useContext } from "react";
import ParticlesBG from "../extra/Particles/Particles.js";
import { themeContext } from "../extra/Toggle/Context";
import { AboutMe } from "../pages/about/AboutMe";
import { BlogPage } from "../pages/blog/BlogPage";
import { ContactPage } from "../pages/contact/ContactPage";
import { FooterPage } from "../pages/footer/FooterPage";
import { HeroPage } from "../pages/hero/HeroPage";
import { NavbarPage } from "../pages/navbar/NavbarPage";
import { ProjectPage } from "../pages/projects/ProjectPage";
import { SkillsPage } from "../pages/skills/SkillsPage";
import "./home.css";
function HomePage() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      id="/"
      className="App page-wrapper"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <NavbarPage />
      {/* <ParticlesBG /> */}
      <HeroPage />
      <SkillsPage />
      <ProjectPage />
      <AboutMe />
      <BlogPage />
      <ContactPage />
      <FooterPage />
    </div>
  );
}

export default HomePage;
