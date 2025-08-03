"use client"

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
// import heroImage from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";
import Image from "next/image";
import WordAnimator from "@/components/wordanimation";

const Hero = () => {
    const [displayText, setDisplayText] = useState("");
    const [currentPhase, setCurrentPhase] = useState(0);

    const texts = ["Frontend Developer", "Freelancer"];

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        let index = 0;
        let currentTextIndex = 0;

        const animateText = () => {
            const timer = setInterval(() => {
                if (currentTextIndex < texts.length) {
                    const currentText = texts[currentTextIndex];

                    if (index <= currentText.length) {
                        if (currentTextIndex === 0) {
                            setDisplayText(currentText.slice(0, index));
                        } else {
                            setDisplayText(texts[0] + " & " + currentText.slice(0, index));
                        }
                        index++;
                    } else {
                        // Move to next text
                        currentTextIndex++;
                        index = 0;

                        if (currentTextIndex >= texts.length) {
                            clearInterval(timer);
                        }
                    }
                }
            }, 100);

            return timer;
        };

        const timer = animateText();
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/public/vercel.svg"
                    alt="Hero Background"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-background opacity-90" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <div className="animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent min-h-[1.2em]">
                        <WordAnimator />
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
                        Crafting beautiful, interactive experiences with modern web technologies
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
                    <Button
                        variant="hero"
                        size="lg"
                        onClick={() => scrollToSection('projects')}
                    >
                        View My Work
                    </Button>
                    <Button
                        variant="glass"
                        size="lg"
                        onClick={() => scrollToSection('contact')}
                    >
                        <Mail className="mr-2 h-5 w-5" />
                        Get In Touch
                    </Button>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-6 mb-12 animate-fade-in-up">
                    <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                        <Github className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                        <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                        <Mail className="h-5 w-5" />
                    </Button>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => scrollToSection('about')}
                        className="rounded-full"
                    >
                        <ArrowDown className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;