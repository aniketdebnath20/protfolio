"use client"

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/usescrollanimation";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const titleAnimation = useScrollAnimation({ threshold: 0.2 });
  const highlightsAnimation = useScrollAnimation({ threshold: 0.1 });
  const skillsAnimation = useScrollAnimation({ threshold: 0.2 });

  const skills = [
    "React", "TypeScript", "JavaScript", "Next.js", "Vue.js",
    "Tailwind CSS", "Sass", "Node.js", "GraphQL", "REST API",
    "Git", "Webpack", "Vite", "Jest", "Cypress"
  ];

  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code following best practices."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Focus",
      description: "Creating intuitive and beautiful user interfaces with attention to detail."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and search engine optimization."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "Working effectively in team environments using modern development workflows."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-16 transition-all duration-800 ${
            titleAnimation.isVisible 
              ? 'animate-fade-in-up opacity-100' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I m a passionate frontend developer with expertise in modern web technologies. 
            I love creating engaging user experiences and bringing creative designs to life through code.
          </p>
        </div>

        {/* Highlights Grid */}
        <div 
          ref={highlightsAnimation.ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-glow transition-all duration-500 border-border/50 ${
                highlightsAnimation.isVisible 
                  ? 'animate-slide-in-left opacity-100' 
                  : 'opacity-0 -translate-x-8'
              }`}
              style={{ 
                animationDelay: highlightsAnimation.isVisible ? `${index * 150}ms` : '0ms',
                transitionDelay: highlightsAnimation.isVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform text-primary-foreground">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div 
          ref={skillsAnimation.ref}
          className={`text-center transition-all duration-800 ${
            skillsAnimation.isVisible 
              ? 'animate-fade-in-up opacity-100' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-bold mb-8">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className={`px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-all cursor-default ${
                  skillsAnimation.isVisible 
                    ? 'animate-scale-in opacity-100' 
                    : 'opacity-0 scale-95'
                }`}
                style={{ 
                  animationDelay: skillsAnimation.isVisible ? `${index * 50}ms` : '0ms',
                  transitionDelay: skillsAnimation.isVisible ? `${index * 50}ms` : '0ms'
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;