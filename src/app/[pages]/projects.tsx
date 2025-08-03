"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/usescrollanimation";

const Projects = () => {
  const titleAnimation = useScrollAnimation({ threshold: 0.2 });
  const projectsAnimation = useScrollAnimation({ threshold: 0.1 });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React, TypeScript, and Stripe integration. Features include product catalog, shopping cart, and secure checkout.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe", "Node.js"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Next.js", "React", "MongoDB", "Socket.io", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard displaying current conditions, forecasts, and weather maps with beautiful data visualizations.",
      technologies: ["Vue.js", "Chart.js", "Weather API", "CSS Grid", "JavaScript"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing web development projects with smooth animations and modern design principles.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "TypeScript"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
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
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in frontend development, 
            UI/UX design, and modern web technologies.
          </p>
        </div>

        <div 
          ref={projectsAnimation.ref}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group overflow-hidden hover:shadow-glow transition-all duration-700 border-border/50 ${
                projectsAnimation.isVisible 
                  ? 'animate-slide-in-right opacity-100' 
                  : 'opacity-0 translate-x-8'
              }`}
              style={{ 
                animationDelay: projectsAnimation.isVisible ? `${index * 200}ms` : '0ms',
                transitionDelay: projectsAnimation.isVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={100}
                  height={100}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    variant="accent" 
                    size="sm"
                    className="flex-1"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;