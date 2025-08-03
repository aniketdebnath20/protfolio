"use client"

import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import Hero from "./hero";
import Navigation from "./navigation";
import Projects from "./projects";


const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;