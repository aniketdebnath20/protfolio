"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-[9999] rounded-full bg-primary pointer-events-none transition-transform duration-500 ease-out shadow-lg shadow-primary/50",
        isHovering ? "w-12 h-12 mix-blend-difference" : "w-4 h-4",
        !isVisible && "opacity-0"
      )}
      style={{
        transform: `translate(${position.x - (isHovering ? 24 : 8)}px, ${
          position.y - (isHovering ? 24 : 8)
        }px)`,
      }}
    />
  );
}
