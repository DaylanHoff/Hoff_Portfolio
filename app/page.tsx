"use client";

import { Github, Linkedin, Youtube, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AWSArchitecture } from "@/components/AWSArchitecture";
import { PrivacyArchitecture } from "@/components/PrivacyArchitecture";
import { InteractiveTimeline } from "@/components/InteractiveTimeline";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { experience, passionProjects } from "@/lib/data";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <main className="min-h-screen">
      <DarkModeToggle />
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900" aria-label="Hero section">
        <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:[mask-image:linear-gradient(0deg,black,rgba(0,0,0,0.5))]" />
        <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Daylan Hoff
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
              DevOps Engineer | Privacy Advocate | Technology Leader
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Building secure, scalable solutions with C#/.NET, AWS, and modern DevOps practices.
              Passionate about privacy-first applications and automation.
            </p>

            <div className="pt-8">
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
      <section id="projects" className="py-12 md:py-16 lg:py-20 bg-background" aria-labelledby="passion-projects-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 id="passion-projects-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Passion Projects</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                All of my projects share a common foundation: <span className="font-semibold text-foreground">privacy-first design</span>. 
                I believe technology should empower users while respecting their fundamental right to privacy.
              </p>
            </div>
            <ProjectCarousel projects={passionProjects} />
            
            {/* GitHub link */}
            <div className="mt-8 md:mt-12 text-center">
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                I have many more projects to explore!
              </p>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/DaylanHoff" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View All Projects on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* AWS Architecture Diagram */}
      <section id="architecture" className="py-12 md:py-16 lg:py-20 bg-background" aria-labelledby="hosting-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 id="hosting-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center">How This Site's Hosted</h2>
            <p className="text-center text-sm md:text-base text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-2">
              Automated deployment pipelines using AWS S3, CloudFront, and GitHub Actions
            </p>
            <AWSArchitecture />
          </div>
        </div>
      </section>

      {/* Privacy Architecture */}
      <section id="privacy" className="py-12 md:py-16 lg:py-20 bg-muted/50" aria-labelledby="privacy-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 id="privacy-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center">Privacy-First Engineering</h2>
            <p className="text-center text-sm md:text-base text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-2">
              Building secure applications with C#, .NET, and privacy-by-design principles
            </p>
            <PrivacyArchitecture />
          </div>
        </div>
      </section>


      {/* Interactive Timeline */}
      <section id="journey" className="py-12 md:py-16 lg:py-20 bg-background" aria-labelledby="journey-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 id="journey-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center">Professional Journey</h2>
            <p className="text-center text-sm md:text-base text-muted-foreground mb-8 md:mb-12 px-2">
              Click on any milestone to explore my career path and education
            </p>
            <InteractiveTimeline experiences={experience} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 border-t bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <div className="flex justify-center gap-4">
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
                <a href="https://www.youtube.com/channel/UCi-cpZ_fAX4-QqADvUm3nxg" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <p className="text-center text-muted-foreground">
              © {new Date().getFullYear()} Daylan Hoff. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
