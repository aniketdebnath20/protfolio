"use client";

import { cn } from "@/lib/utils";

type IntroAnimationProps = {
  isVisible: boolean;
};

export default function IntroAnimation({ isVisible }: IntroAnimationProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="text-center">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-foreground to-[hsl(var(--background))] bg-no-repeat bg-[length:100%_200%] animate-text-fill">
          Aniket Debnath
        </h1>
      </div>
    </div>
  );
}
