"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lock, Key, Shield, Eye, EyeOff, Database } from "lucide-react";

export function PrivacyArchitecture() {
  const principles = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Data encrypted at rest and in transit",
      color: "text-blue-600",
    },
    {
      icon: Key,
      title: "Zero-Knowledge Architecture",
      description: "Server never sees unencrypted data",
      color: "text-green-600",
    },
    {
      icon: EyeOff,
      title: "Privacy by Design",
      description: "No tracking, no analytics, no data mining",
      color: "text-purple-600",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Regular audits and penetration testing",
      color: "text-red-600",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Privacy-First Application Architecture</CardTitle>
        <CardDescription>
          Built with privacy and security as core principles using C# and .NET
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3 p-4 rounded-lg border hover:border-primary/50 transition-colors"
              >
                <div className={`${principle.color} mt-1`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">{principle.title}</h4>
                  <p className="text-xs text-muted-foreground">{principle.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex flex-col items-center"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-blue-500 p-4 rounded-full text-white">
                <Eye className="w-8 h-8" />
              </div>
              <span className="text-sm mt-2 font-medium">Client</span>
            </motion.div>

            <motion.div
              className="flex-1 mx-4 border-t-2 border-dashed border-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />

            <motion.div
              className="flex flex-col items-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-green-500 p-4 rounded-full text-white">
                <Lock className="w-8 h-8" />
              </div>
              <span className="text-sm mt-2 font-medium">Encryption Layer</span>
            </motion.div>

            <motion.div
              className="flex-1 mx-4 border-t-2 border-dashed border-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />

            <motion.div
              className="flex flex-col items-center"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="bg-purple-500 p-4 rounded-full text-white">
                <Database className="w-8 h-8" />
              </div>
              <span className="text-sm mt-2 font-medium">Server</span>
            </motion.div>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg">
          <h4 className="font-semibold mb-2 text-sm">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {["C#", ".NET Core", "AES-256", "RSA Encryption", "HTTPS/TLS", "Secure Storage"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-background rounded-full text-xs font-medium border"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
