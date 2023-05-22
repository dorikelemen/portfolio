import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// pages
import HomePage from "../pages/HomePage";
import Projects from "../pages/Projects";
import InteractiveCV from "../pages/InteractiveCV";
import PageNotFound from "../pages/PageNotFound";
import MapPage from "../pages/MapPage";
import Cisco from "../pages/Cisco";
import SkillSet from "../pages/Skills";
import Contact from "../pages/Contact";
import NewsApp from "../pages/NewsApp";
import AboutMe from "../pages/AboutMe";

// animation
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "./AnimatedPage";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage key="home">
              <HomePage />
            </AnimatedPage>
          }
        />
        <Route
          path="/about-me"
          element={
            <AnimatedPage key="about-me">
              <AboutMe />
            </AnimatedPage>
          }
        />
        <Route
          path="/projects"
          element={
            <AnimatedPage key="projects">
              <Projects />
            </AnimatedPage>
          }
        />
        <Route
          exact
          path="/web/interactive-map-visualiser"
          element={
            <AnimatedPage key="interactive-map-visualiser">
              <MapPage />
            </AnimatedPage>
          }
        />
        <Route
          exact
          path="/web/cisco-integration"
          element={
            <AnimatedPage key="cisco-integration">
              <Cisco />
            </AnimatedPage>
          }
        />
        <Route
          path="/ui/news-app"
          element={
            <AnimatedPage key="news-app">
              <NewsApp />
            </AnimatedPage>
          }
        />
        <Route
          path="/education-and-experience"
          element={
            <AnimatedPage key="education-and-experience">
              <InteractiveCV />
            </AnimatedPage>
          }
        />
        <Route
          path="/skills"
          element={
            <AnimatedPage key="skills">
              <SkillSet />
            </AnimatedPage>
          }
        />
        <Route
          path="/contact"
          element={
            <AnimatedPage key="contact">
              <Contact />
            </AnimatedPage>
          }
        />
        <Route
          path="*"
          element={
            <AnimatedPage key="not-found">
              <PageNotFound />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
