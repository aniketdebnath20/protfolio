
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Frontend Developer", "App Developer", "Freelancer"];
const LETTER_INTERVAL = 200; // ms between letters appearing/disappearing
const WORD_HOLD = 2000; // ms to hold full word before disappearing

export default function WordAnimator() {
    const [wordIndex, setWordIndex] = useState(0);
    const [lettersVisible, setLettersVisible] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    const currentWord = words[wordIndex];

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (!isDeleting) {
            // Typing animation
            if (lettersVisible < currentWord.length) {
                timeout = setTimeout(() => {
                    setLettersVisible((prev) => prev + 1);
                }, LETTER_INTERVAL);
            } else {
                // Pause before deleting
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, WORD_HOLD);
            }
        } else {
            // Deleting animation
            if (lettersVisible > 0) {
                timeout = setTimeout(() => {
                    setLettersVisible((prev) => prev - 1);
                }, LETTER_INTERVAL);
            } else {
                // Move to next word
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [lettersVisible, isDeleting, currentWord]);

    useEffect(() => {
        const cursorBlink = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorBlink);
    }, []);

    return (
        <div className="h-20 overflow-hidden text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold flex items-center justify-center">
            <div className="flex space-x-1 justify-center text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-accent tracking-tighter">
                {currentWord.slice(0, lettersVisible).split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block"
                    >
                        {letter === "" ? "\u00A0" : letter}
                    </motion.span>
                ))}
                {/* Blinking cursor */}
                <span className="w-1 text-primary">
                    {showCursor && <span className="animate-blink">|</span>}
                </span>
            </div>
        </div>
    );
}
