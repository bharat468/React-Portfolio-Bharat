import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
