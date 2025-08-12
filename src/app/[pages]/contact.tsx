import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/usescrollanimation";
import Link from "next/link";
import { useState, useEffect } from "react";

const Contact = () => {
  const titleAnimation = useScrollAnimation({ threshold: 0.2 });
  const contentAnimation = useScrollAnimation({ threshold: 0.1 });

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowButton(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const section = document.getElementById("contact");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const primaryEmail = "debnathaniket@41gmail.com";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(primaryEmail)}&su=${encodeURIComponent("New project inquiry")}&body=${encodeURIComponent("Hi, I'd like to discuss a project with you.")}`;

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-background opacity-30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-glow-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-10 animate-glow-pulse delay-1000"></div>

      {/* Fixed Contact Button */}
      {/* Fixed Contact Button */}
      <div
        className={`fixed bottom-14 left-1/2 -translate-x-1/2 transition-all duration-700 z-50 ${showButton
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
          }`}
      >
        <Link
          href={gmailComposeUrl}
          aria-label="Open Gmail compose window"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="hero" size="lg" className="group shadow-lg">
            <Mail className="mr-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
            Contact via Gmail
          </Button>
        </Link>
      </div>


      {/* Section Content */}
      <div className="container mx-auto max-w-6xl relative z-10 py-20">
        <div
          ref={titleAnimation.ref}
          className={`text-center mb-20 transition-all duration-800 ${titleAnimation.isVisible
              ? "animate-fade-in-up opacity-100"
              : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
              Lets Connect
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you. Lets create something amazing together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
