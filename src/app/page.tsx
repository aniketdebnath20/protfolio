"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./[pages]";
import IntroAnimation from "@/components/intro-animation";
import { useEffect, useState } from "react";

const App = () => {
  const [isIntroVisible, setIsIntroVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroVisible(false);
    }, 3300); // Duration matches the animation timings

    return () => clearTimeout(timer);
  }, []);

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="relative min-h-screen">
        <IntroAnimation isVisible={isIntroVisible} />
        <Index isVisible={!isIntroVisible} />
      </div>
    </TooltipProvider>
  );
};

export default App;
