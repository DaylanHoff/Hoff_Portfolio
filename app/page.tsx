"use client";

import { Github, Linkedin, Twitter, Youtube, ExternalLink, Code, Shield, Zap, Cloud, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SkillChart } from "@/components/SkillChart";
import { AWSArchitecture } from "@/components/AWSArchitecture";
import { PrivacyArchitecture } from "@/components/PrivacyArchitecture";
import { InteractiveTimeline } from "@/components/InteractiveTimeline";
import { ProjectCard } from "@/components/ProjectCard";
import { experience, passionProjects } from "@/lib/data";
import { motion } from "framer-motion";

export default function Home() {
  const focusIcons = { Shield, Zap, Cloud, Code, MapPin };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900" aria-label="Hero section">
        <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:[mask-image:linear-gradient(0deg,black,rgba(0,0,0,0.5))]" />
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Daylan Hoff
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              DevOps Engineer | Privacy Advocate | Technology Leader
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Building secure, scalable solutions with C#/.NET, AWS, and modern DevOps practices.
              Passionate about privacy-first applications and automation.
            </p>

            <div className="flex justify-center gap-4 pt-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/DaylanHoff/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/DaylanHoff" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://twitter.com/Daylan_Hoff" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.youtube.com/channel/UCi-cpZ_fAX4-QqADvUm3nxg" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="pt-4">
              <Button size="lg" asChild>
                <a href="https://github.com/DaylanHoff/resume/blob/main/Daylan_Hoff_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Passion Projects */}
      <section className="py-20 bg-background" aria-labelledby="passion-projects-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="passion-projects-heading" className="text-3xl md:text-4xl font-bold mb-4">Passion Projects</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                All of my projects share a common foundation: <span className="font-semibold text-foreground">privacy-first design</span>. 
                I believe technology should empower users while respecting their fundamental right to privacy.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {passionProjects.map((project, index) => {
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Card className="h-full hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                        <CardContent className="pt-6 text-center space-y-4">
                          <div className="mx-auto w-20 h-20 flex items-center justify-center">
                            {project.image ? (
                              <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-contain"
                                style={(project as any).imageScale ? { transform: `scale(${(project as any).imageScale})` } : undefined}
                              />
                            ) : (
                              (() => {
                                const Icon = focusIcons[project.icon as keyof typeof focusIcons];
                                return (
                                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-primary" />
                                  </div>
                                );
                              })()
                            )}
                          </div>
                          <h3 className="font-semibold text-lg">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                          <p className="text-xs text-primary font-medium">{project.link}</p>
                        </CardContent>
                      </Card>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* AWS Architecture Diagram */}
      <section className="py-20 bg-background" aria-labelledby="hosting-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 id="hosting-heading" className="text-3xl md:text-4xl font-bold mb-4 text-center">How This Site's Hosted</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Automated deployment pipelines using AWS S3, CloudFront, and GitHub Actions
            </p>
            <AWSArchitecture />
          </div>
        </div>
      </section>

      {/* Privacy Architecture */}
      <section className="py-20 bg-muted/50" aria-labelledby="privacy-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 id="privacy-heading" className="text-3xl md:text-4xl font-bold mb-4 text-center">Privacy-First Engineering</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Building secure applications with C#, .NET, and privacy-by-design principles
            </p>
            <PrivacyArchitecture />
          </div>
        </div>
      </section>


      {/* Interactive Timeline */}
      <section className="py-20 bg-background" aria-labelledby="journey-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 id="journey-heading" className="text-3xl md:text-4xl font-bold mb-4 text-center">Professional Journey</h2>
            <p className="text-center text-muted-foreground mb-12">
              Click on any milestone to explore my career path and education
            </p>
            <InteractiveTimeline experiences={experience} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-background">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Daylan Hoff. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
