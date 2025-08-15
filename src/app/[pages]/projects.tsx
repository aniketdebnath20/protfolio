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
    title: "Library Management",
    description: "A comprehensive system for managing books, users, and transactions in a library. Includes features like book cataloging, user registration, borrowing/return tracking, and admin controls.",
    technologies: ["Next js", "TypeScript", "Tailwind CSS", "Prisma", "Drizzle", "Imagekit"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    github: "https://github.com/aniketdebnath20/library_management",
    demo: "#"
  },
  {
    title: "Social Media Platform",
    description: "A full-featured social networking app where users can create posts, like, comment, follow others, and get real-time notifications with a responsive and modern UI.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Imagekit", "Tailwind CSS", "Shadcn" ],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    github: "https://github.com/aniketdebnath20/Full_Stack_Social_Media",
    demo: "#"
  },
  {
    title: "Expense Tracker App",
    description: "A simple yet powerful application to track daily expenses, categorize spending, set budgets, and view detailed analytics with charts and summaries.",
    technologies: ["React-Native", "Firbase", "", "", "JavaScript"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    github: "https://github.com/aniketdebnath20/Expanse-Traker_native",
    demo: "#"
  },
  {
    title: "Portfolio Website",
    description: "A sleek, responsive portfolio website to showcase personal projects, skills, and contact information, enhanced with smooth animations and modern styling.",
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