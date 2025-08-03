"use client"

import { Button } from "@/components/ui/button";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-8">
          {/* Back to Top Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full hover:scale-110 transition-transform"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>

          {/* Social Links */}
          <div className="flex space-x-6">
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:text-primary hover:scale-110 transition-all"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:text-primary hover:scale-110 transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:text-primary hover:scale-110 transition-all"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            {/* <p className="text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by Frontend Developer
            </p> */}
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;