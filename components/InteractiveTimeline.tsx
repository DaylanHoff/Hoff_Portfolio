"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Briefcase, GraduationCap } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  startYear: number;
  description: string;
  technologies: string[];
  achievements: string[];
}

interface InteractiveTimelineProps {
  experiences: Experience[];
}

export function InteractiveTimeline({ experiences }: InteractiveTimelineProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const isEducation = (company: string) => company === "Neumont";

  return (
    <div className="relative">
      {/* Timeline visualization */}
      <div className="flex items-center justify-center mb-12 relative">
        {/* Timeline line */}
        <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-300 to-blue-200 dark:from-blue-900 dark:via-purple-900 dark:to-blue-900" />
        
        {/* Year markers */}
        <div className="relative flex justify-between w-full max-w-5xl px-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center cursor-pointer z-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedIndex(index)}
            >
              {/* Timeline node */}
              <motion.div
                className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all ${
                  selectedIndex === index
                    ? isEducation(exp.company)
                      ? "bg-gradient-to-br from-amber-500 to-orange-600 ring-4 ring-amber-200 dark:ring-amber-900"
                      : "bg-gradient-to-br from-blue-600 to-purple-600 ring-4 ring-blue-200 dark:ring-blue-900"
                    : isEducation(exp.company)
                    ? "bg-gradient-to-br from-amber-400 to-orange-500"
                    : "bg-gradient-to-br from-blue-500 to-purple-500"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isEducation(exp.company) ? (
                  <GraduationCap className="w-8 h-8 text-white" />
                ) : (
                  <Briefcase className="w-8 h-8 text-white" />
                )}
              </motion.div>

              {/* Year label */}
              <div className="mt-3 text-center">
                <div className="text-sm font-bold">{exp.startYear}</div>
                {exp.period.includes("Current") && (
                  <div className="text-xs font-semibold text-primary">Present</div>
                )}
                {isEducation(exp.company) && (
                  <div className="text-xs font-semibold text-amber-600 dark:text-amber-400">Graduated 2021</div>
                )}
                <div className="text-xs text-muted-foreground max-w-[100px] mt-1">
                  {exp.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Selected experience details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-2 hover:shadow-2xl transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {isEducation(experiences[selectedIndex].company) ? (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                    )}
                    <div>
                      <CardTitle className="text-2xl">
                        {experiences[selectedIndex].company}
                      </CardTitle>
                      <CardDescription className="text-base mt-1">
                        {experiences[selectedIndex].role}
                      </CardDescription>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {experiences[selectedIndex].period}
                  </p>
                </div>

                {/* Navigation arrows */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedIndex(Math.max(0, selectedIndex - 1))}
                    disabled={selectedIndex === 0}
                    className="p-2 rounded-lg hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 rotate-180" />
                  </button>
                  <button
                    onClick={() =>
                      setSelectedIndex(Math.min(experiences.length - 1, selectedIndex + 1))
                    }
                    disabled={selectedIndex === experiences.length - 1}
                    className="p-2 rounded-lg hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {experiences[selectedIndex].technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {experiences[selectedIndex].description}
              </p>

              <div>
                <h4 className="font-semibold mb-3 text-lg">
                  {isEducation(experiences[selectedIndex].company)
                    ? "Highlights:"
                    : "Key Achievements:"}
                </h4>
                <div className="space-y-2">
                  {experiences[selectedIndex].achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                      <span className="text-sm flex-1">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Progress indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {experiences.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`h-2 rounded-full transition-all ${
              selectedIndex === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
