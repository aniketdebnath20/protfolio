"use client";

import About from "./about";
import Contact from "./contact";
import Hero from "./hero";
import Navigation from "./navigation";
import Projects from "./projects";
import { cn } from "@/lib/utils";

type LandingContentProps = {
  isVisible: boolean;
};

const Index = ({ isVisible }: LandingContentProps) => {
  return (
    <div className={cn(isVisible ? "opacity-100" : "opacity-0", "transition-opacity duration-500")}>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
