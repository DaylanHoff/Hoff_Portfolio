"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  startYear: number;
  description: string;
  technologies: string[];
  achievements: string[];
}

interface ExperienceWebProps {
  experiences: Experience[];
}

export function ExperienceWeb({ experiences }: ExperienceWebProps) {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  // Position nodes in a circular/web pattern
  const positions = [
    { x: 50, y: 15 }, // top center - AdvancedMD
    { x: 75, y: 40 }, // right - 1CompleteSolution
    { x: 25, y: 40 }, // left - Neumont
    { x: 50, y: 70 }, // bottom - Community Support
  ];

  // Color mapping for special nodes
  const getNodeColor = (company: string) => {
    if (company === "Neumont") {
      return "bg-gradient-to-br from-amber-500 to-orange-600";
    }
    return "bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500";
  };

  return (
    <div className="relative">
      {/* Web visualization */}
      <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg mb-8 overflow-hidden">
        {/* Center point */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center z-10">
          <div className="w-8 h-8 rounded-full bg-primary" />
        </div>

        {/* Connection lines from center */}
        <svg className="absolute inset-0 w-full h-full">
          {experiences.map((_, index) => {
            const pos = positions[index] || positions[0];
            return (
              <motion.line
                key={index}
                x1="50%"
                y1="50%"
                x2={`${pos.x}%`}
                y2={`${pos.y}%`}
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary/30"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
              />
            );
          })}
        </svg>

        {/* Job nodes */}
        {experiences.map((exp, index) => {
          const pos = positions[index] || positions[0];
          return (
            <motion.div
              key={exp.company + index}
              className="absolute cursor-pointer"
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedJob(selectedJob === index ? null : index)}
            >
              <div className="relative -translate-x-1/2 -translate-y-1/2">
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center text-white shadow-lg transition-all ${
                    selectedJob === index
                      ? "bg-primary ring-4 ring-primary/30"
                      : getNodeColor(exp.company)
                  }`}
                >
                  <div className="text-center px-2">
                    <div className="text-xs font-bold leading-tight">{exp.company}</div>
                    <div className="text-[10px] mt-1">{exp.startYear}</div>
                  </div>
                </div>
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap max-w-[120px]">
                  <span className="text-xs font-medium bg-background px-2 py-1 rounded shadow-sm border block text-center">
                    {exp.role}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Selected job details */}
      <AnimatePresence>
        {selectedJob !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-2 border-primary">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-2xl">{experiences[selectedJob].company}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {experiences[selectedJob].role}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mt-2">
                      {experiences[selectedJob].period}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {experiences[selectedJob].technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{experiences[selectedJob].description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experiences[selectedJob].achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="text-blue-600 mr-2">▸</span>
                        <span className="text-sm">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instruction text */}
      {selectedJob === null && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-muted-foreground text-sm"
        >
          Click on any position to view details
        </motion.p>
      )}
    </div>
  );
}
