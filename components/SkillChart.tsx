"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillChartProps {
  title: string;
  skills: Skill[];
  color: string;
}

export function SkillChart({ title, skills, color }: SkillChartProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-sm">{skill.name}</span>
              <span className="text-xs text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${color}`}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                whileHover={{ opacity: 0.8 }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
